'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import React from 'react'

import { CHART_COLORS, demographics } from '../mockData'

export const Demographics: React.FC = () => {
  return (
    <ResponsiveContainer className="seo-dashboard__chart" width="100%" height="100%">
      <BarChart data={demographics} margin={{ top: 16, right: 16, bottom: 8, left: 0 }}>
        <CartesianGrid stroke="var(--seo-grid-line)" vertical={false} />
        <XAxis
          dataKey="ageRange"
          tick={{ fill: 'var(--seo-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--seo-grid-line)' }}
          tickLine={false}
        />
        <YAxis
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
          cursor={{ fill: 'var(--theme-elevation-50)' }}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12, color: 'var(--seo-muted)', paddingTop: 4 }}
        />
        <Bar dataKey="female" name="Female" fill={CHART_COLORS.tertiary} radius={[6, 6, 0, 0]} />
        <Bar dataKey="male" name="Male" fill={CHART_COLORS.quaternary} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
