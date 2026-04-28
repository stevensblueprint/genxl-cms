'use client'

import React from 'react'

import { topQueries } from '../mockData'

export const TopQueries: React.FC = () => {
  const maxClicks = Math.max(...topQueries.map((q) => q.clicks))

  return (
    <div style={{ overflowX: 'auto', flex: 1 }}>
      <table className="seo-dashboard__table">
        <thead>
          <tr>
            <th>Query</th>
            <th className="seo-dashboard__table-numeric">Clicks</th>
            <th className="seo-dashboard__table-numeric">Impressions</th>
            <th className="seo-dashboard__table-numeric">CTR</th>
            <th className="seo-dashboard__table-numeric">Position</th>
          </tr>
        </thead>
        <tbody>
          {topQueries.map((q) => (
            <tr key={q.query}>
              <td>{q.query}</td>
              <td className="seo-dashboard__table-numeric">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: 6,
                  }}
                >
                  {q.clicks.toLocaleString()}
                  <span
                    className="seo-dashboard__table-bar"
                    style={
                      {
                        width: '100px',
                        '--seo-bar-width': `${(q.clicks / maxClicks) * 100}%`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </td>
              <td className="seo-dashboard__table-numeric">
                {q.impressions.toLocaleString()}
              </td>
              <td className="seo-dashboard__table-numeric">{(q.ctr * 100).toFixed(2)}%</td>
              <td className="seo-dashboard__table-numeric">{q.position.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
