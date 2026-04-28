'use client'

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import React from 'react'

import { CHART_COLORS, searchPerformanceOverTime } from '../mockData'

export const SearchPerformance: React.FC = () => {
  return (
    <ResponsiveContainer className="seo-dashboard__chart" width="100%" height="100%">
      <AreaChart
        data={searchPerformanceOverTime}
        margin={{ top: 16, right: 24, bottom: 8, left: 0 }}
      >
        <defs>
          <linearGradient id="seo-clicks-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.4} />
            <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0.02} />
          </linearGradient>
          <linearGradient id="seo-impressions-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART_COLORS.secondary} stopOpacity={0.4} />
            <stop offset="100%" stopColor={CHART_COLORS.secondary} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--seo-grid-line)" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fill: 'var(--seo-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--seo-grid-line)' }}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          tick={{ fill: 'var(--seo-muted)', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={48}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fill: 'var(--seo-muted)', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={64}
        />
        <Tooltip
          contentStyle={{
            background: 'var(--theme-elevation-0)',
            border: '1px solid var(--seo-card-border)',
            borderRadius: 8,
          }}
          formatter={(value) => Number(value).toLocaleString()}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12, color: 'var(--seo-muted)' }}
        />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="clicks"
          name="Clicks"
          stroke={CHART_COLORS.primary}
          strokeWidth={2.5}
          fill="url(#seo-clicks-fill)"
        />
        <Area
          yAxisId="right"
          type="monotone"
          dataKey="impressions"
          name="Impressions"
          stroke={CHART_COLORS.secondary}
          strokeWidth={2.5}
          fill="url(#seo-impressions-fill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
