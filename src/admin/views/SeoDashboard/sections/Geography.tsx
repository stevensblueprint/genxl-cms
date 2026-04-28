'use client'

import React from 'react'

import { CHART_COLORS, geography } from '../mockData'

const getColor = (intensity: number): string => {
  const palette = CHART_COLORS.geo
  const idx = Math.min(palette.length - 1, Math.floor(intensity * palette.length))
  return palette[idx]
}

export const Geography: React.FC = () => {
  const max = Math.max(...geography.map((g) => g.sessions))

  return (
    <div className="seo-dashboard__geo">
      <div className="seo-dashboard__geo-map">
        <GeoHeatBars rows={geography.slice(0, 6)} max={max} />
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="seo-dashboard__table">
          <thead>
            <tr>
              <th>Country</th>
              <th className="seo-dashboard__table-numeric">Sessions</th>
              <th className="seo-dashboard__table-numeric">Engagement</th>
              <th className="seo-dashboard__table-numeric">Bounce</th>
            </tr>
          </thead>
          <tbody>
            {geography.map((row) => (
              <tr key={row.countryCode}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      aria-hidden
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 2,
                        background: getColor(row.sessions / max),
                        display: 'inline-block',
                      }}
                    />
                    {row.country}
                  </div>
                </td>
                <td className="seo-dashboard__table-numeric">
                  {row.sessions.toLocaleString()}
                </td>
                <td className="seo-dashboard__table-numeric">
                  {(row.engagementRate * 100).toFixed(0)}%
                </td>
                <td className="seo-dashboard__table-numeric">
                  {(row.bounceRate * 100).toFixed(0)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const GeoHeatBars: React.FC<{
  rows: typeof geography
  max: number
}> = ({ rows, max }) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
    {rows.map((row) => {
      const pct = (row.sessions / max) * 100
      return (
        <div key={row.countryCode} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              width: 80,
              fontSize: '0.75rem',
              color: 'var(--seo-muted)',
              flexShrink: 0,
            }}
          >
            {row.country}
          </span>
          <div
            style={{
              flex: 1,
              height: 14,
              background: 'var(--seo-grid-line)',
              borderRadius: 999,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${pct}%`,
                height: '100%',
                background: getColor(row.sessions / max),
                borderRadius: 999,
                transition: 'width 0.3s',
              }}
            />
          </div>
          <span
            style={{
              fontSize: '0.75rem',
              fontVariantNumeric: 'tabular-nums',
              minWidth: 64,
              textAlign: 'right',
            }}
          >
            {row.sessions.toLocaleString()}
          </span>
        </div>
      )
    })}
  </div>
)
