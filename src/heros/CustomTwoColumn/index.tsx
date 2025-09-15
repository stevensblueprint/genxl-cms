'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const CustomTwoColumnHero: React.FC<Page['hero']> = ({ links, media, richText, badge }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="relative bg-white py-16 lg:py-24">
      <div className="container mx-auto px-2 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {badge?.text && (
              <div className="inline-flex">
                {badge.link ? (
                  <a
                    href={badge.link}
                    className="inline-flex items-center bg-black text-white rounded-full px-2 py-1 shadow-lg hover:shadow-xl transition-shadow duration-200 gap-1"
                  >
                    <span className="bg-blue-600 text-white px-2 py-0.5 text-xs font-medium rounded-full">
                      {badge.text}
                    </span>
                    {badge.secondaryText && (
                      <span className="text-xs font-medium">{badge.secondaryText}</span>
                    )}
                  </a>
                ) : (
                  <div className="inline-flex items-center bg-black text-white rounded-full px-2 py-1 shadow-lg hover:shadow-xl transition-shadow duration-200 gap-1">
                    <span className="bg-blue-600 text-white px-2 py-0.5 text-xs font-medium rounded-full">
                      {badge.text}
                    </span>
                    {badge.secondaryText && (
                      <span className="text-xs font-medium">{badge.secondaryText}</span>
                    )}
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
                        ${
                          link.appearance === 'outline'
                            ? 'border-2 border-black text-black bg-white hover:bg-black'
                            : 'bg-gray-900 text-yellow-500'
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
