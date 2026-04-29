/**
 * Mock data for the SEO / Google Analytics dashboard.
 *
 * Replace these exports with real GA4 + Search Console API calls when wiring
 * up live data. The shapes here mirror what those APIs typically return so the
 * UI components don't need to change.
 */

export const CHART_COLORS = {
  primary: '#A4A0E8',
  secondary: '#F5DC9C',
  tertiary: '#F4B6C2',
  quaternary: '#CFE3FF',
  accent: '#7C75D6',
  muted: '#E5E7EB',
  geo: ['#EDE9FE', '#C4B5FD', '#8B5CF6', '#6D28D9', '#4C1D95'],
} as const

export type TrafficPoint = {
  month: string
  sessions: number
  users: number
}

export const trafficOverTime: TrafficPoint[] = [
  { month: 'Jan', sessions: 4200, users: 3100 },
  { month: 'Feb', sessions: 5100, users: 3800 },
  { month: 'Mar', sessions: 7800, users: 5900 },
  { month: 'Apr', sessions: 7300, users: 5400 },
  { month: 'May', sessions: 6800, users: 5100 },
  { month: 'Jun', sessions: 8200, users: 6300 },
  { month: 'Jul', sessions: 9100, users: 7000 },
]

export type TrafficSource = {
  name: string
  sessions: number
}

export const trafficSources: TrafficSource[] = [
  { name: 'Organic Search', sessions: 12450 },
  { name: 'Direct', sessions: 8210 },
  { name: 'Social', sessions: 4380 },
  { name: 'Referral', sessions: 2960 },
  { name: 'Email', sessions: 1850 },
  { name: 'Paid Search', sessions: 1240 },
]

export type TopPage = {
  pageTitle: string
  pagePath: string
  pageViews: number
  avgEngagementTimeSeconds: number
  bounceRate: number
}

export const topPages: TopPage[] = [
  {
    pageTitle: 'Home',
    pagePath: '/',
    pageViews: 18452,
    avgEngagementTimeSeconds: 184,
    bounceRate: 0.32,
  },
  {
    pageTitle: 'Programs',
    pagePath: '/programs',
    pageViews: 9821,
    avgEngagementTimeSeconds: 142,
    bounceRate: 0.41,
  },
  {
    pageTitle: 'About Us',
    pagePath: '/about',
    pageViews: 6310,
    avgEngagementTimeSeconds: 96,
    bounceRate: 0.55,
  },
  {
    pageTitle: 'Get Involved',
    pagePath: '/get-involved',
    pageViews: 4870,
    avgEngagementTimeSeconds: 168,
    bounceRate: 0.36,
  },
  {
    pageTitle: 'Donate',
    pagePath: '/donate',
    pageViews: 3920,
    avgEngagementTimeSeconds: 132,
    bounceRate: 0.28,
  },
  {
    pageTitle: 'Contact',
    pagePath: '/contact',
    pageViews: 2104,
    avgEngagementTimeSeconds: 88,
    bounceRate: 0.49,
  },
]

export type DemographicBucket = {
  ageRange: string
  male: number
  female: number
}

export const demographics: DemographicBucket[] = [
  { ageRange: '18-24', male: 1450, female: 1820 },
  { ageRange: '25-34', male: 3120, female: 3540 },
  { ageRange: '35-44', male: 2410, female: 2680 },
  { ageRange: '45-54', male: 1820, female: 2010 },
  { ageRange: '55-64', male: 980, female: 1160 },
  { ageRange: '65+', male: 540, female: 720 },
]

export type GeographyRow = {
  country: string
  countryCode: string
  sessions: number
  engagementRate: number
  totalUsers: number
  bounceRate: number
}

export const geography: GeographyRow[] = [
  {
    country: 'United States',
    countryCode: 'US',
    sessions: 14820,
    engagementRate: 0.62,
    totalUsers: 11200,
    bounceRate: 0.38,
  },
  {
    country: 'Canada',
    countryCode: 'CA',
    sessions: 5240,
    engagementRate: 0.58,
    totalUsers: 4100,
    bounceRate: 0.42,
  },
  {
    country: 'United Kingdom',
    countryCode: 'GB',
    sessions: 3820,
    engagementRate: 0.55,
    totalUsers: 3050,
    bounceRate: 0.45,
  },
  {
    country: 'Australia',
    countryCode: 'AU',
    sessions: 2410,
    engagementRate: 0.6,
    totalUsers: 1980,
    bounceRate: 0.4,
  },
  {
    country: 'Germany',
    countryCode: 'DE',
    sessions: 1820,
    engagementRate: 0.51,
    totalUsers: 1480,
    bounceRate: 0.49,
  },
  {
    country: 'India',
    countryCode: 'IN',
    sessions: 1640,
    engagementRate: 0.47,
    totalUsers: 1390,
    bounceRate: 0.53,
  },
  {
    country: 'Philippines',
    countryCode: 'PH',
    sessions: 1280,
    engagementRate: 0.65,
    totalUsers: 1010,
    bounceRate: 0.35,
  },
  {
    country: 'France',
    countryCode: 'FR',
    sessions: 980,
    engagementRate: 0.49,
    totalUsers: 820,
    bounceRate: 0.51,
  },
]

export type DeviceShare = {
  device: 'Desktop' | 'Mobile' | 'Tablet'
  share: number
}

export const devices: DeviceShare[] = [
  { device: 'Mobile', share: 0.58 },
  { device: 'Desktop', share: 0.34 },
  { device: 'Tablet', share: 0.08 },
]

export type SearchQuery = {
  query: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

export const topQueries: SearchQuery[] = [
  { query: 'genxl programs', clicks: 1820, impressions: 14200, ctr: 0.128, position: 2.4 },
  { query: 'genxl volunteer', clicks: 1340, impressions: 9800, ctr: 0.137, position: 1.9 },
  { query: 'youth empowerment program', clicks: 980, impressions: 22400, ctr: 0.044, position: 6.8 },
  {
    query: 'leadership development for teens',
    clicks: 720,
    impressions: 18600,
    ctr: 0.039,
    position: 7.4,
  },
  { query: 'genxl donate', clicks: 640, impressions: 4200, ctr: 0.152, position: 1.6 },
  { query: 'community service teens', clicks: 510, impressions: 16200, ctr: 0.031, position: 9.1 },
  { query: 'genxl careers', clicks: 420, impressions: 3100, ctr: 0.135, position: 2.1 },
  { query: 'genxl about', clicks: 380, impressions: 2700, ctr: 0.141, position: 1.8 },
]

export type PositionCTRPoint = {
  query: string
  position: number
  ctr: number
  impressions: number
}

export const positionVsCtr: PositionCTRPoint[] = topQueries.map((q) => ({
  query: q.query,
  position: q.position,
  ctr: q.ctr * 100,
  impressions: q.impressions,
}))

export type SearchPerformancePoint = {
  date: string
  clicks: number
  impressions: number
}

export const searchPerformanceOverTime: SearchPerformancePoint[] = [
  { date: 'Jan', clicks: 3200, impressions: 48000 },
  { date: 'Feb', clicks: 4100, impressions: 56000 },
  { date: 'Mar', clicks: 5400, impressions: 71000 },
  { date: 'Apr', clicks: 5100, impressions: 68000 },
  { date: 'May', clicks: 4800, impressions: 64000 },
  { date: 'Jun', clicks: 6200, impressions: 78000 },
  { date: 'Jul', clicks: 7100, impressions: 88000 },
]

export type KpiSummary = {
  totalUsers: number
  totalUsersChange: number
  sessions: number
  sessionsChange: number
  avgEngagementSeconds: number
  avgEngagementChange: number
  totalClicks: number
  totalClicksChange: number
}

export const kpis: KpiSummary = {
  totalUsers: 32450,
  totalUsersChange: 0.124,
  sessions: 48920,
  sessionsChange: 0.087,
  avgEngagementSeconds: 142,
  avgEngagementChange: 0.034,
  totalClicks: 17120,
  totalClicksChange: 0.218,
}
