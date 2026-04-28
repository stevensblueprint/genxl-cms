'use client'

import React from 'react'

import { topPages } from '../mockData'

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return m > 0 ? `${m}m ${s}s` : `${s}s`
}

export const TopPages: React.FC = () => {
  const maxViews = Math.max(...topPages.map((p) => p.pageViews))

  return (
    <div style={{ overflowX: 'auto', flex: 1 }}>
      <table className="seo-dashboard__table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="seo-dashboard__table-numeric">Views</th>
            <th className="seo-dashboard__table-numeric">Avg. engagement</th>
            <th className="seo-dashboard__table-numeric">Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          {topPages.map((page) => (
            <tr key={page.pagePath}>
              <td>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <strong>{page.pageTitle}</strong>
                  <span style={{ color: 'var(--seo-muted)', fontSize: '0.75rem' }}>
                    {page.pagePath}
                  </span>
                </div>
              </td>
              <td className="seo-dashboard__table-numeric">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: 6,
                  }}
                >
                  {page.pageViews.toLocaleString()}
                  <span
                    className="seo-dashboard__table-bar"
                    style={
                      {
                        width: '120px',
                        '--seo-bar-width': `${(page.pageViews / maxViews) * 100}%`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </td>
              <td className="seo-dashboard__table-numeric">
                {formatTime(page.avgEngagementTimeSeconds)}
              </td>
              <td className="seo-dashboard__table-numeric">
                {(page.bounceRate * 100).toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
