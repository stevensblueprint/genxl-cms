'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

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

  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item, i) => {
        const hasDropdown = item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0

        if (hasDropdown) {
          return (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                {item.label}
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              {/* Dropdown Menu */}
              {hoveredItem === i && (
                <div className="absolute top-full left-0 pt-2 -mt-2">
                  <div className="bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50 min-w-[160px] mt-2">
                    {item.dropdownItems.map((dropdownItem, j) => (
                      <Link
                        key={j}
                        href={dropdownItem.url || '#'}
                        target={dropdownItem.newTab ? '_blank' : undefined}
                        rel={dropdownItem.newTab ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-2 text-white hover:text-yellow-400 hover:bg-gray-700 transition-colors duration-200 text-sm first:rounded-t-md last:rounded-b-md"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
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
            className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
          >
            {item.label}
          </Link>
        )
      })}
      <Link href="/search" className="text-white hover:text-yellow-400 transition-colors duration-200">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 h-5" />
      </Link>
    </nav>
  )
}
