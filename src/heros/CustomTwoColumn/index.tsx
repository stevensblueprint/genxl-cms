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
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <>
      {/* Mobile: Title above image */}
      {richText && (
        <div className="lg:hidden bg-white py-8 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="prose prose-lg max-w-none">
              <RichText
                className="[&_h1]:text-gray-900 [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:font-bold [&_h1]:mb-0 [&_h1]:leading-tight [&_*]:hidden [&_h1]:!block"
                data={richText}
                enableGutter={false}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Mobile: Just image, Desktop: Full content */}
      <div className="relative w-full min-h-[500px] lg:min-h-[800px] flex items-start">
        {/* Background Image */}
        {media && typeof media === 'object' && (
          <div className="absolute inset-0 z-0">
            <Media
              resource={media}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Dark Overlay - Gradient on desktop only */}
        <div
          className="hidden lg:block absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.2) 60%, transparent 70%)',
          }}
        />

        {/* Desktop: Full content overlay */}
        <div className="hidden lg:block relative z-20 w-full container mx-auto pl-0 pr-4 lg:pr-8 pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="max-w-2xl">
            <div>
              {/* Rich Text Content */}
              {richText && (
                <div className="prose prose-lg max-w-none">
                  <RichText
                    className="[&_h1]:text-white [&_h1]:text-5xl [&_h1]:lg:text-6xl [&_h1]:xl:text-7xl [&_h1]:font-bold [&_h1]:mb-2 [&_h1]:leading-tight [&_h2]:text-white [&_h2]:text-4xl [&_h2]:lg:text-6xl [&_h2]:xl:text-7xl [&_h2]:font-bold [&_h2]:leading-tight [&_h3]:text-white [&_h3]:text-3xl [&_h3]:lg:text-5xl [&_h3]:xl:text-6xl [&_h3]:font-bold [&_h3]:leading-tight [&_h4]:text-white [&_h4]:text-2xl [&_h4]:lg:text-4xl [&_h4]:xl:text-5xl [&_h4]:font-bold [&_h4]:leading-tight [&_p]:text-white [&_p]:text-md [&_p]:lg:text-lg [&_p]:xl:text-xl [&_p]:leading-tight"
                    data={richText}
                    enableGutter={false}
                  />
                </div>
              )}

              {/* Links/Buttons */}
              {Array.isArray(links) && links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-2">
                  {links.map(({ link }, i) => {
                    return (
                      <CMSLink
                        key={i}
                        {...link}
                        className={`
                          px-7 py-3.5 rounded-full font-medium text-lg lg:text-xl transition-all duration-200
                          ${
                            link.appearance === 'outline'
                              ? 'border-2 border-white text-white bg-transparent hover:bg-white/10'
                              : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                          }
                        `}
                      />
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Content section with white background - centered */}
      <div className="lg:hidden bg-white py-8 px-4">
        <div className="container mx-auto max-w-2xl space-y-4 text-center">
          {/* Rich Text Content - Excluding H1 */}
          {richText && (
            <div className="prose prose-lg max-w-none">
              <RichText
                className="[&_h1]:hidden [&_h2]:text-gray-900 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-2 [&_h3]:text-gray-900 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-2 [&_h4]:text-gray-900 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:mb-2 [&_p]:text-gray-900 [&_p]:text-base [&_p]:leading-relaxed [&_*]:text-center"
                data={richText}
                enableGutter={false}
              />
            </div>
          )}

          {/* Links/Buttons */}
          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-2 justify-center">
              {links.map(({ link }, i) => {
                return (
                  <CMSLink
                    key={i}
                    {...link}
                    className={`
                      px-7 py-3.5 rounded-full font-medium text-base transition-all duration-200
                      ${
                        link.appearance === 'outline'
                          ? 'border-2 border-gray-900 text-gray-900 bg-transparent hover:bg-gray-100'
                          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                      }
                    `}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
