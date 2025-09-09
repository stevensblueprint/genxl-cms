'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const CustomTwoColumnHero: React.FC<Page['hero']> = ({ 
  links, 
  media, 
  richText, 
  badge 
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="relative bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {badge?.text && (
              <div className="inline-flex">
                {badge.link ? (
                  <a 
                    href={badge.link}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                    {badge.text}
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
                    {badge.text}
                  </div>
                )}
              </div>
            )}

            {richText && (
              <div className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
                <RichText 
                  className="text-gray-900 [&_h1]:text-gray-900 [&_h2]:text-gray-900 [&_h3]:text-gray-900 [&_h4]:text-gray-900 [&_p]:text-gray-700" 
                  data={richText} 
                  enableGutter={false} 
                />
              </div>
            )}

            {Array.isArray(links) && links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <CMSLink 
                      key={i} 
                      {...link}
                      className={`
                        px-6 py-3 rounded-full font-medium transition-all duration-200
                        ${link.appearance === 'outline' 
                          ? 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50' 
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                        }
                      `}
                    />
                  )
                })}
              </div>
            )}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {media && typeof media === 'object' && (
                <Media 
                  resource={media} 
                  className="w-full h-full"
                  imgClassName="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 