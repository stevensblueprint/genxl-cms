'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, ChevronDown, Menu, X } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState<number | null>(null)

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleMobileDropdown = (index: number) => {
    setExpandedMobileItem(expandedMobileItem === index ? null : index)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
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
                      {item.dropdownItems?.map((dropdownItem, j) => (
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

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white hover:text-yellow-400 transition-colors duration-200 p-2"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Slide-out Menu */}
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMobileMenu}
        />
        
        {/* Mobile Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-700 shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <span className="text-white font-semibold">Menu</span>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-yellow-400 transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="p-4 space-y-2">
              {navItems.map((item, i) => {
                const hasDropdown = item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0

                if (hasDropdown) {
                  return (
                    <div 
                      key={i} 
                      className={`transform transition-all duration-300 ease-out ${
                        isMobileMenuOpen 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <button
                        onClick={() => toggleMobileDropdown(i)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-yellow-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-800"
                      >
                        {item.label}
                        <ChevronDown 
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                            expandedMobileItem === i ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {expandedMobileItem === i && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdownItems?.map((dropdownItem, j) => (
                            <Link
                              key={j}
                              href={dropdownItem.url || '#'}
                              target={dropdownItem.newTab ? '_blank' : undefined}
                              rel={dropdownItem.newTab ? 'noopener noreferrer' : undefined}
                              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-800 text-sm"
                              onClick={toggleMobileMenu}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <div
                    key={i}
                    className={`transform transition-all duration-300 ease-out ${
                      isMobileMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <Link
                      href={item.url || '#'}
                      target={item.newTab ? '_blank' : undefined}
                      rel={item.newTab ? 'noopener noreferrer' : undefined}
                      className="block text-white hover:text-yellow-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-800"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </div>
                )
              })}
              
              {/* Mobile Search */}
              <div
                className={`transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${navItems.length * 50}ms` }}
              >
                <Link
                  href="/search"
                  className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-800"
                  onClick={toggleMobileMenu}
                >
                  <SearchIcon className="w-4 h-4 mr-2" />
                  Search
                </Link>
              </div>
            </nav>
          </div>
      </>
    </>
  )
}
