import type { AdminViewServerProps } from 'payload'

import React from 'react'

import { SeoDashboardChartsClient } from './SeoDashboardChartsClient'
import './styles.scss'

export const SeoDashboardView: React.FC<AdminViewServerProps> = ({ initPageResult }) => {
  if (!initPageResult?.req) {
    return null
  }

  return (
    <main className="seo-dashboard seo-dashboard--standalone">
      <SeoDashboardChartsClient />
    </main>
  )
}

export default SeoDashboardView
