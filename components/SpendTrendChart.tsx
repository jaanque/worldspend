'use client';

import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { CurrencyConfig } from '@/types/spend';
import { Locale } from '@/types/i18n';
import { formatCompactCurrency } from '@/utils/formatters';
import { getDictionary } from '@/utils/i18n';
import { TrendingUp } from 'lucide-react';

interface SpendTrendChartProps {
  data: { year: number; spendUSD: number }[];
  activeCurrency: CurrencyConfig;
  title: string;
  subtitle: string;
  locale?: Locale;
}

export const SpendTrendChart: React.FC<SpendTrendChartProps> = ({
  data,
  activeCurrency,
  title,
  subtitle,
  locale = 'en',
}) => {
  const dict = getDictionary(locale);

  if (!data || data.length < 2) {
    return null;
  }

  const chartData = data.map((d) => ({
    year: d.year,
    spendConverted: d.spendUSD * activeCurrency.rateToUSD,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const pointData = payload[0].payload;
      return (
        <div className="bg-[#16385c] text-white p-2.5 rounded-xs shadow-lg border border-[#0d233a] text-xs">
          <div className="font-bold text-blue-200 text-[11px] border-b border-blue-400/20 pb-1 mb-1">
            <span>{pointData.year}</span>
          </div>
          <div className="text-sm font-black tabular-numbers text-white">
            {formatCompactCurrency(pointData.spendConverted, activeCurrency)}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-[#c8d1db] rounded-xs p-3.5 sm:p-4 mb-5 shadow-2xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-2.5 mb-4">
        <div>
          <div className="text-xs font-bold text-[#14324f]">
            <span>{title}</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-0.5">{subtitle}</p>
        </div>
      </div>

      {/* Professional Recharts Financial Chart */}
      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 15, right: 25, left: 10, bottom: 5 }}>
            <defs>
              <linearGradient id="financialGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1c4b78" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#1c4b78" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="year"
              axisLine={{ stroke: '#cbd5e1' }}
              tickLine={false}
              tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }}
              dy={6}
            />
            <YAxis
              domain={['auto', 'auto']}
              axisLine={false}
              tickLine={false}
              tickFormatter={(val) => formatCompactCurrency(val, activeCurrency)}
              tick={{ fill: '#475569', fontSize: 10, fontWeight: 500 }}
              width={65}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="spendConverted"
              stroke="#1c4b78"
              strokeWidth={3.5}
              fillOpacity={1}
              fill="url(#financialGradient)"
              dot={{ r: 4.5, fill: '#ffffff', stroke: '#1c4b78', strokeWidth: 2.5 }}
              activeDot={{ r: 7.5, fill: '#14324f', stroke: '#ffffff', strokeWidth: 2.5 }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};
