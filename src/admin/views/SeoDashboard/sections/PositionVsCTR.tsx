'use client'

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts'
import React from 'react'

import { CHART_COLORS, positionVsCtr } from '../mockData'

export const PositionVsCTR: React.FC = () => {
  return (
    <ResponsiveContainer className="seo-dashboard__chart" width="100%" height="100%">
      <ScatterChart margin={{ top: 16, right: 24, bottom: 24, left: 0 }}>
        <CartesianGrid stroke="var(--seo-grid-line)" />
        <XAxis
          dataKey="position"
          name="Position"
          type="number"
          domain={[0, 'dataMax + 1']}
          tick={{ fill: 'var(--seo-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--seo-grid-line)' }}
          tickLine={false}
          label={{
            value: 'Avg. position',
            position: 'insideBottom',
            offset: -8,
            fill: 'var(--seo-muted)',
            fontSize: 12,
          }}
        />
        <YAxis
          dataKey="ctr"
          name="CTR"
          unit="%"
          tick={{ fill: 'var(--seo-muted)', fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          width={48}
        />
        <ZAxis dataKey="impressions" range={[60, 400]} name="Impressions" />
        <Tooltip
          contentStyle={{
            background: 'var(--theme-elevation-0)',
            border: '1px solid var(--seo-card-border)',
            borderRadius: 8,
          }}
          formatter={(value, name) => {
            const v = Number(value)
            const n = String(name)
            if (n === 'CTR') return [`${v.toFixed(2)}%`, n]
            if (n === 'Impressions') return [v.toLocaleString(), n]
            return [v, n]
          }}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Scatter data={positionVsCtr} fill={CHART_COLORS.tertiary} fillOpacity={0.7} />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
