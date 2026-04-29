'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const SeoDashboardContent = dynamic(
  () => import('./SeoDashboardContent').then((mod) => mod.SeoDashboardContent),
  {
    loading: () => (
      <div className="seo-dashboard" style={{ padding: '2rem', color: 'var(--theme-elevation-500)' }}>
        Loading charts…
      </div>
    ),
    ssr: false,
  },
)

export const SeoDashboardChartsClient: React.FC = () => <SeoDashboardContent />
