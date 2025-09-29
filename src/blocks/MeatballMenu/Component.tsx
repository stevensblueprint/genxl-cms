'use client'

import React from 'react'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'

import type { MeatballMenu as MeatballMenuProps } from '@/payload-types'

type Props = MeatballMenuProps & {
  className?: string
  enableGutter?: boolean
  disableInnerContainer?: boolean
}

export const MeatballMenu: React.FC<Props> = (props) => {
  const {
    title,
    subtitle,
    sections,
    backgroundColor,
    button,
    className,
    enableGutter = true,
    disableInnerContainer,
  } = props

  // Helper function to determine if background is dark
  const isDarkBackground = (hexColor: string | null | undefined): boolean => {
    if (!hexColor) return false

    // Remove # if present
    const hex = hexColor.replace('#', '')

    // Convert to RGB
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

    return luminance < 0.5
  }

  const useLightText = isDarkBackground(backgroundColor)
  const titleColor = useLightText ? 'text-white' : 'text-black'
  const subtitleColor = useLightText ? 'text-gray-300' : 'text-gray-600'
  const sectionTitleColor = useLightText ? 'text-white' : 'text-black'
  const sectionDescColor = useLightText ? 'text-gray-300' : 'text-gray-600'
  const buttonColor = useLightText
    ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
    : 'border-gray-300 text-gray-700 hover:bg-gray-50'

  return (
    <div
      className="w-full py-16"
      style={{
        backgroundColor: backgroundColor || undefined,
      }}
    >
      <div
        className={cn(
          '',
          {
            container: enableGutter,
          },
          className,
        )}
      >
        {/* Header Section */}
        <div
          className={cn('text-center mb-16', {
            container: !disableInnerContainer,
          })}
        >
          {title && (
            <h2 className={`text-4xl md:text-5xl font-bold ${titleColor} mb-4`}>{title}</h2>
          )}
          {subtitle && <p className={`text-lg ${subtitleColor} max-w-2xl mx-auto`}>{subtitle}</p>}
        </div>

        {/* Three Sections */}
        {sections && sections.length > 0 && (
          <div
            className={cn('grid grid-cols-1 md:grid-cols-3 gap-12 mb-16', {
              container: !disableInnerContainer,
            })}
          >
            {sections.map((section, index) => (
              <div key={index} className="text-center">
                {/* Icon/Image */}
                {section.image && typeof section.image === 'object' && (
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <Media
                        resource={section.image}
                        imgClassName="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Title */}
                {section.title && (
                  <h3 className={`text-xl font-semibold ${sectionTitleColor} mb-4`}>
                    {section.title}
                  </h3>
                )}

                {/* Description */}
                {section.description && (
                  <p className={`${sectionDescColor} leading-relaxed max-w-sm mx-auto`}>
                    {section.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Optional Button */}
        {button?.show && button.text && (
          <div className="text-center">
            <a
              href={button.link || '#'}
              className={`inline-flex items-center px-6 py-3 border rounded-full transition-colors duration-200 ${buttonColor}`}
            >
              {button.text}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
