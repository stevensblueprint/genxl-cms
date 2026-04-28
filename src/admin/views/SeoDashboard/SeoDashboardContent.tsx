'use client'

import Link from 'next/link'
import React from 'react'

import { kpis } from './mockData'
import { Demographics } from './sections/Demographics'
import { Devices } from './sections/Devices'
import { Geography } from './sections/Geography'
import { PositionVsCTR } from './sections/PositionVsCTR'
import { SearchPerformance } from './sections/SearchPerformance'
import { TopPages } from './sections/TopPages'
import { TopQueries } from './sections/TopQueries'
import { TrafficOverTime } from './sections/TrafficOverTime'
import { TrafficSource } from './sections/TrafficSource'

const formatPercent = (value: number): string =>
  `${value > 0 ? '+' : ''}${(value * 100).toFixed(1)}%`

const formatDuration = (seconds: number): string => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}m ${s}s`
}

type KpiCardProps = {
  label: string
  value: string
  change: number
}

const KpiCard: React.FC<KpiCardProps> = ({ label, value, change }) => (
  <div className="seo-dashboard__kpi">
    <span className="seo-dashboard__kpi-label">{label}</span>
    <span className="seo-dashboard__kpi-value">{value}</span>
    <span
      className={`seo-dashboard__kpi-delta seo-dashboard__kpi-delta--${change >= 0 ? 'up' : 'down'}`}
    >
      {change >= 0 ? '↑' : '↓'} {formatPercent(change)} vs. last period
    </span>
  </div>
)

type CardProps = {
  title: string
  subtitle?: string
  span: 4 | 6 | 8 | 12
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, subtitle, span, children }) => (
  <section className={`seo-dashboard__card seo-dashboard__card--span-${span}`}>
    <header className="seo-dashboard__card-header">
      <div>
        <h2 className="seo-dashboard__card-title">{title}</h2>
        {subtitle ? <p className="seo-dashboard__card-subtitle">{subtitle}</p> : null}
      </div>
    </header>
    <div className="seo-dashboard__card-body">{children}</div>
  </section>
)

export const SeoDashboardContent: React.FC = () => {
  return (
    <>
      <header className="seo-dashboard__header">
        <span style={{ fontSize: '0.875rem', color: 'var(--seo-muted)' }}>
          <Link href="/admin">Dashboard</Link> &nbsp;/&nbsp; SEO
        </span>
        <h1>SEO Dashboard</h1>
        <p>
          Search engine and audience performance powered by Google Analytics and Search Console.
          Numbers shown reflect mock data — connect a real GA4 property to replace these values.
        </p>
      </header>

      <div className="seo-dashboard__kpis">
        <KpiCard
          label="Total users"
          value={kpis.totalUsers.toLocaleString()}
          change={kpis.totalUsersChange}
        />
        <KpiCard
          label="Sessions"
          value={kpis.sessions.toLocaleString()}
          change={kpis.sessionsChange}
        />
        <KpiCard
          label="Avg. engagement"
          value={formatDuration(kpis.avgEngagementSeconds)}
          change={kpis.avgEngagementChange}
        />
        <KpiCard
          label="Search clicks"
          value={kpis.totalClicks.toLocaleString()}
          change={kpis.totalClicksChange}
        />
      </div>

      <div className="seo-dashboard__grid">
        <Card title="Traffic Over Time" subtitle="Sessions vs. users (multi-axis)" span={8}>
          <TrafficOverTime />
        </Card>
        <Card title="Traffic Source" subtitle="Share of sessions by source" span={4}>
          <TrafficSource />
        </Card>

        <Card title="Top Pages" subtitle="Most viewed pages on the site" span={8}>
          <TopPages />
        </Card>
        <Card title="Devices" subtitle="Sessions by device category" span={4}>
          <Devices />
        </Card>

        <Card title="Demographics" subtitle="User distribution by age and gender" span={6}>
          <Demographics />
        </Card>
        <Card title="Geography" subtitle="Top countries by sessions" span={6}>
          <Geography />
        </Card>

        <Card
          title="Search Performance Over Time"
          subtitle="Clicks and impressions from Search Console"
          span={8}
        >
          <SearchPerformance />
        </Card>
        <Card title="Position vs CTR" subtitle="Bubble size = impressions" span={4}>
          <PositionVsCTR />
        </Card>

        <Card title="Top Queries" subtitle="Highest performing search queries" span={12}>
          <TopQueries />
        </Card>
      </div>
    </>
  )
}
