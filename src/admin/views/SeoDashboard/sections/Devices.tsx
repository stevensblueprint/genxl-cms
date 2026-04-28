'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import React from 'react'

import { CHART_COLORS, devices } from '../mockData'

const COLOR_MAP: Record<string, string> = {
  Mobile: CHART_COLORS.tertiary,
  Desktop: CHART_COLORS.secondary,
  Tablet: CHART_COLORS.quaternary,
}

export const Devices: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
      <ResponsiveContainer className="seo-dashboard__chart" width="100%" height="100%">
        <PieChart>
          <Pie
            data={devices}
            dataKey="share"
            nameKey="device"
            innerRadius="60%"
            outerRadius="90%"
            paddingAngle={2}
            stroke="var(--seo-card-bg)"
          >
            {devices.map((d) => (
              <Cell key={d.device} fill={COLOR_MAP[d.device]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: 'var(--theme-elevation-0)',
              border: '1px solid var(--seo-card-border)',
              borderRadius: 8,
            }}
            formatter={(value) => `${(Number(value) * 100).toFixed(1)}%`}
          />
        </PieChart>
      </ResponsiveContainer>
      <ul className="seo-dashboard__legend" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {devices.map((d) => (
          <li key={d.device} className="seo-dashboard__legend-item">
            <span
              className="seo-dashboard__legend-swatch"
              style={{ background: COLOR_MAP[d.device] }}
            />
            {d.device}
            <span style={{ marginLeft: 'auto' }}>{(d.share * 100).toFixed(0)}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
