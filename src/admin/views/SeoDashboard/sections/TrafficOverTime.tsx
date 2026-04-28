'use client'

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import React from 'react'

import { CHART_COLORS, trafficOverTime } from '../mockData'

export const TrafficOverTime: React.FC = () => {
  return (
    <ResponsiveContainer className="seo-dashboard__chart" width="100%" height="100%">
      <LineChart data={trafficOverTime} margin={{ top: 10, right: 24, bottom: 8, left: 0 }}>
        <CartesianGrid stroke="var(--seo-grid-line)" strokeDasharray="0" vertical={false} />
        <XAxis
          dataKey="month"
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
          width={48}
        />
        <Tooltip
          contentStyle={{
            background: 'var(--theme-elevation-0)',
            border: '1px solid var(--seo-card-border)',
            borderRadius: 8,
          }}
          labelStyle={{ color: 'var(--seo-text)' }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="sessions"
          name="Sessions"
          stroke={CHART_COLORS.primary}
          strokeWidth={3}
          dot={{ r: 5, stroke: CHART_COLORS.primary, fill: CHART_COLORS.primary }}
          activeDot={{ r: 7 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="users"
          name="Users"
          stroke={CHART_COLORS.secondary}
          strokeWidth={3}
          dot={{ r: 5, stroke: CHART_COLORS.secondary, fill: CHART_COLORS.secondary }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
