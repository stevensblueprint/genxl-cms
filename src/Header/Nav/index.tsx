'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null)

  const toggleMobileDropdown = (index: number) => {
    setOpenMobileDropdown((prev) => (prev === index ? null : index))
  }

  const handleMouseEnter = (index: number) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setHoveredItem(index)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null)
    }, 150) // 150ms delay
    setHoverTimeout(timeout)
  }

  const isUrlActive = (url?: string | null) => {
    if (!url) return false
    if (url === '/') return pathname === '/'
    return pathname.startsWith(url)
  }

  const isItemActive = (item: any) => {
    if (isUrlActive(item.url)) return true
    if (item.dropdownItems && Array.isArray(item.dropdownItems)) {
      return item.dropdownItems.some((d: any) => isUrlActive(d.url))
    }
    return false
  }

  const desktopLinkClasses = (active: boolean) =>
    [
      'text-sm font-medium transition-colors duration-200',
      active ? 'text-yellow-400' : 'text-white hover:text-yellow-400',
    ].join(' ')

  const mobileLinkClasses = (active: boolean) =>
    ['block text-sm font-medium', active ? 'text-yellow-400' : 'text-white'].join(' ')

  return (
    <div className="w-full">
      {/* Top row: desktop nav + mobile hamburger */}
      <div className="flex items-center w-full">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          {navItems.map((item, i) => {
            const hasDropdown =
              item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0
            const active = isItemActive(item)

            if (hasDropdown) {
              return (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Parent label */}
                  <button
                    type="button"
                    className={`bg-transparent border-none cursor-pointer ${desktopLinkClasses(
                      active,
                    )} flex items-center`}
                  >
                    {item.label}
                  </button>

                  {/* Dropdown menu on hover */}
                  {hoveredItem === i && (
                    <div className="absolute top-full left-0 pt-2 -mt-2 z-50">
                      <div className="mt-2 min-w-[160px] rounded-md border border-gray-700 bg-black shadow-lg">
                        {item.dropdownItems!.map((dropdownItem: any, j: number) => {
                          const dropdownActive = isUrlActive(dropdownItem.url)

                          return (
                            <Link
                              key={j}
                              href={dropdownItem.url || '#'}
                              target={dropdownItem.newTab ? '_blank' : undefined}
                              rel={dropdownItem.newTab ? 'noopener noreferrer' : undefined}
                              className={[
                                'block px-4 py-2 text-sm transition-colors duration-200 first:rounded-t-md last:rounded-b-md',
                                dropdownActive
                                  ? 'text-yellow-400 bg-gray-800'
                                  : 'text-white hover:text-yellow-400 hover:bg-gray-700',
                              ].join(' ')}
                            >
                              {dropdownItem.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={i}
                href={item.url || '#'}
                target={item.newTab ? '_blank' : undefined}
                rel={item.newTab ? 'noopener noreferrer' : undefined}
                className={desktopLinkClasses(active)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden ml-auto flex h-8 w-8 flex-col items-center justify-center space-y-1"
          onClick={() => {
            setMobileOpen((prev) => !prev)
            setOpenMobileDropdown(null)
          }}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <span className="text-2xl leading-none text-white">&times;</span>
          ) : (
            <>
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </>
          )}
        </button>
      </div>

      {/* Mobile menu panel – pushdown, full width */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 md:hidden z-50 bg-black border-t border-zinc-800">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, i) => {
              const hasDropdown =
                item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0
              const active = isItemActive(item)

              return (
                <div key={i} className="pb-3 border-b border-zinc-800 last:border-b-0">
                  {hasDropdown ? (
                    <>
                      {/* top-level row (home, about, get involved, etc.) */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between"
                        onClick={() => toggleMobileDropdown(i)}
                      >
                        <span className={mobileLinkClasses(active)}>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-white transition-transform ${
                            openMobileDropdown === i ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* nested dropdown links */}
                      {openMobileDropdown === i && (
                        <div className="mt-2 space-y-1 pl-4">
                          {item.dropdownItems!.map((dropdownItem: any, j: number) => {
                            const dropdownActive = isUrlActive(dropdownItem.url)

                            return (
                              <Link
                                key={j}
                                href={dropdownItem.url || '#'}
                                target={dropdownItem.newTab ? '_blank' : undefined}
                                rel={dropdownItem.newTab ? 'noopener noreferrer' : undefined}
                                className={`block text-sm ${
                                  dropdownActive ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                {dropdownItem.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.url || '#'}
                      target={item.newTab ? '_blank' : undefined}
                      rel={item.newTab ? 'noopener noreferrer' : undefined}
                      className={mobileLinkClasses(active)}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
