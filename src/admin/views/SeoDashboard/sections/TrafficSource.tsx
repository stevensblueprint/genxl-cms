'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import React from 'react'

import { CHART_COLORS, trafficSources } from '../mockData'

const PALETTE = [
  CHART_COLORS.primary,
  CHART_COLORS.secondary,
  CHART_COLORS.tertiary,
  CHART_COLORS.quaternary,
  CHART_COLORS.accent,
  '#FCD34D',
]

export const TrafficSource: React.FC = () => {
  const total = trafficSources.reduce((sum, s) => sum + s.sessions, 0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
      <ResponsiveContainer className="seo-dashboard__chart" width="100%" height="100%">
        <PieChart>
          <Pie
            data={trafficSources}
            dataKey="sessions"
            nameKey="name"
            innerRadius="55%"
            outerRadius="85%"
            paddingAngle={2}
            stroke="var(--seo-card-bg)"
          >
            {trafficSources.map((_, idx) => (
              <Cell key={idx} fill={PALETTE[idx % PALETTE.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: 'var(--theme-elevation-0)',
              border: '1px solid var(--seo-card-border)',
              borderRadius: 8,
            }}
            formatter={(value, name) => {
              const v = Number(value)
              return [`${v.toLocaleString()} (${((v / total) * 100).toFixed(1)}%)`, String(name)]
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <ul className="seo-dashboard__legend" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {trafficSources.map((source, idx) => (
          <li key={source.name} className="seo-dashboard__legend-item">
            <span
              className="seo-dashboard__legend-swatch"
              style={{ background: PALETTE[idx % PALETTE.length] }}
            />
            {source.name}
            <span style={{ marginLeft: 'auto' }}>
              {((source.sessions / total) * 100).toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
