'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type Props = {
  heading?: string | null
  subheading?: string | null
  description?: string | null
  button?: { label?: string; url?: string } | null
  image?: MediaDoc | string | null
}

export const AboutBlock: React.FC<Props> = ({
  heading,
  subheading,
  description,
  image,
  button,
}) => {
  return (
    <section className="container my-16">
      <div className="grid gap-10 md:grid-cols-2 items-start md:items-center">
        {/* Text column */}
        <div className="order-2 md:order-1 space-y-4">
          {heading && (
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center md:text-left">
              {heading}
            </h1>
          )}

          {subheading && (
            <p className="text-base md:text-lg text-muted-foreground text-center md:text-left">
              {subheading}
            </p>
          )}

          {description && <p className="text-base leading-relaxed text-left">{description}</p>}

          {button?.label && button?.url && (
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href={button.url}
                className="inline-flex items-center rounded-full px-8 py-3 text-sm md:text-base font-semibold tracking-wide bg-[#F8DC48] text-black hover:bg-[#e5c843] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8DC48]"
              >
                {button.label}
              </a>
            </div>
          )}
        </div>

        {/* Image column */}
        {image && (
          <div className="order-1 md:order-2">
            {typeof image === 'object' ? (
              <Media
                resource={image as MediaDoc}
                imgClassName="w-full h-auto rounded-xl object-cover"
              />
            ) : (
              <img src={image as string} className="w-full h-auto rounded-xl object-cover" />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default AboutBlock
