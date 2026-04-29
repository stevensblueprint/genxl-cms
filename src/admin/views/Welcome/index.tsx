import type { ServerProps } from 'payload'

import Link from 'next/link'
import React from 'react'

import './styles.scss'

export const WelcomeView: React.FC<ServerProps> = ({ user }) => {
  const firstName =
    user && 'name' in user && typeof user.name === 'string' && user.name.length > 0
      ? user.name.split(' ')[0]
      : null

  return (
    <div className="welcome-view">
      <div className="welcome-view__inner">
        <h1 className="welcome-view__title">
          Welcome Back{firstName ? `, ${firstName}` : ''}
        </h1>
        <p className="welcome-view__lede">
          Would you like to access the search engine optimization dashboard or the content
          management system dashboard?
        </p>
        <div className="welcome-view__actions">
          <Link className="welcome-view__button" href="/admin/seo-dashboard">
            SEO Dashboard
          </Link>
          <Link className="welcome-view__button" href="/admin/collections/pages">
            CMS Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomeView
