'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
<<<<<<< HEAD
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50" {...(theme ? { 'data-theme': theme } : {})}>
=======
    <header className="bg-gray-900 border-b border-gray-800 relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
>>>>>>> origin/main
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Logo loading="eager" priority="high" className="text-white" />
          </Link>
          <HeaderNav data={data} />
        </div>
      </div>
    </header>
  )
}
