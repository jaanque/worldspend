'use client';

import React, { useState } from 'react';
import { CurrencyConfig } from '@/types/spend';
import { formatCompactCurrency, formatCurrencyValue } from '@/utils/formatters';
import { TrendingUp } from 'lucide-react';

interface SpendTrendChartProps {
  data: { year: number; spendUSD: number }[];
  activeCurrency: CurrencyConfig;
  title: string;
  subtitle: string;
}

export const SpendTrendChart: React.FC<SpendTrendChartProps> = ({
  data,
  activeCurrency,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length < 2) {
    return null;
  }

  // Chart dimensions
  const width = 640;
  const height = 220;
  const paddingLeft = 60;
  const paddingRight = 30;
  const paddingTop = 25;
  const paddingBottom = 35;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const minSpend = 0;
  const maxSpend = Math.max(...data.map((d) => d.spendUSD)) * 1.15; // 15% headroom

  const getX = (index: number) => {
    return paddingLeft + (index / (data.length - 1)) * chartWidth;
  };

  const getY = (valueUSD: number) => {
    return paddingTop + chartHeight - ((valueUSD - minSpend) / (maxSpend - minSpend)) * chartHeight;
  };

  // Generate SVG path for line and area
  const points = data.map((d, i) => `${getX(i)},${getY(d.spendUSD)}`);
  const linePath = `M ${points.join(' L ')}`;
  const areaPath = `M ${getX(0)},${paddingTop + chartHeight} L ${points.join(' L ')} L ${getX(
    data.length - 1
  )},${paddingTop + chartHeight} Z`;

  // Grid lines
  const gridSteps = 4;
  const gridLines = Array.from({ length: gridSteps + 1 }, (_, i) => {
    const valueUSD = minSpend + (i / gridSteps) * (maxSpend - minSpend);
    const y = getY(valueUSD);
    const converted = valueUSD * activeCurrency.rateToUSD;
    return {
      y,
      label: formatCompactCurrency(converted, activeCurrency),
    };
  });

  const activePoint = hoveredIndex !== null ? data[hoveredIndex] : data[data.length - 1];
  const activeX = hoveredIndex !== null ? getX(hoveredIndex) : getX(data.length - 1);
  const activeY = hoveredIndex !== null ? getY(data[hoveredIndex].spendUSD) : getY(data[data.length - 1].spendUSD);

  return (
    <div className="border border-[#c8d1db] bg-white rounded-xs p-4 mb-5 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-200 pb-2.5 mb-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#14324f]">
            <TrendingUp className="w-4 h-4 text-[#1c4b78]" />
            <span>{title}</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-0.5">{subtitle}</p>
        </div>

        {/* Live Hover Info Badge */}
        {activePoint && (
          <div className="bg-[#f0f4f8] border border-[#c8d1db] rounded-xs px-2.5 py-1 text-right shrink-0">
            <span className="text-[10px] text-gray-500 font-medium block">
              {activePoint.year} {activePoint.year === 2026 ? '(Projected)' : '(Historical)'}
            </span>
            <span className="text-xs font-black text-[#14324f] tabular-numbers">
              {formatCompactCurrency(activePoint.spendUSD * activeCurrency.rateToUSD, activeCurrency)}
            </span>
          </div>
        )}
      </div>

      {/* SVG Chart Frame with Semantic Alt Metadata */}
      <div className="w-full overflow-x-auto">
        <svg
          role="img"
          aria-label={`${title} - ${subtitle}`}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto max-h-[260px] select-none"
        >
          <title>{title}</title>
          <desc>{subtitle}</desc>
          <defs>
            <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c4b78" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1c4b78" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Grid lines & Y-Axis Labels */}
          {gridLines.map((gl, i) => (
            <g key={i}>
              <line
                x1={paddingLeft}
                y1={gl.y}
                x2={width - paddingRight}
                y2={gl.y}
                stroke="#e2e8f0"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <text
                x={paddingLeft - 8}
                y={gl.y + 3.5}
                textAnchor="end"
                className="text-[9px] fill-gray-500 font-sans tabular-numbers"
              >
                {gl.label}
              </text>
            </g>
          ))}

          {/* Fill Area */}
          <path d={areaPath} fill="url(#spendGradient)" />

          {/* Line Stroke */}
          <path
            d={linePath}
            fill="none"
            stroke="#1c4b78"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Active Vertical Crosshair */}
          <line
            x1={activeX}
            y1={paddingTop}
            x2={activeX}
            y2={paddingTop + chartHeight}
            stroke="#1c4b78"
            strokeWidth="1"
            strokeDasharray="2 2"
            opacity="0.6"
          />

          {/* Data Points and X-Axis Labels */}
          {data.map((d, i) => {
            const cx = getX(i);
            const cy = getY(d.spendUSD);
            const isHovered = hoveredIndex === i;

            return (
              <g key={d.year}>
                {/* Year Label */}
                <text
                  x={cx}
                  y={paddingTop + chartHeight + 18}
                  textAnchor="middle"
                  className={`text-[10px] font-sans tabular-numbers ${
                    isHovered ? 'fill-[#14324f] font-bold' : 'fill-gray-600 font-normal'
                  }`}
                >
                  {d.year}
                </text>

                {/* Outer halo */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 6 : 4}
                  fill="#ffffff"
                  stroke="#1c4b78"
                  strokeWidth={isHovered ? 2.5 : 2}
                  className="transition-all cursor-pointer"
                />

                {/* Invisible hover area for touch/mouse */}
                <rect
                  x={cx - 20}
                  y={paddingTop}
                  width={40}
                  height={chartHeight + paddingBottom}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] text-gray-500 mt-2 border-t border-gray-100 pt-1.5">
        <span>Historical compound annual growth rate (CAGR): <strong>+4.8%</strong></span>
        <span>Baseline: 2000–2026 official data series</span>
      </div>
    </div>
  );
};
