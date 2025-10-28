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
      {/* Heading */}
      {heading && (
        <>
          <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
            {heading}
          </h1>
          {/* Yellow bar under heading */}
          <div className="mx-auto mt-3 mb-5 h-1 w-40 rounded-full bg-warning" />
        </>
      )}

      {/* Subheading */}
      {subheading && <p className="text-center text-muted-foreground">{subheading}</p>}

      {/* Description */}
      {description && <p className="mx-auto mt-4 max-w-3xl text-center">{description}</p>}

      {/* Button */}
      {button?.label && button?.url && (
        <div className="mt-8 flex justify-center">
          <a
            href={button.url}
            className="
              inline-flex items-center rounded-full border-2 px-6 py-3 text-sm font-semibold tracking-wide
              border-foreground text-foreground
              hover:bg-warning hover:border-warning hover:text-black
              transition-colors duration-150
              focus:outline-none focus-visible:ring-2 focus-visible:ring-warning
            "
          >
            {button.label}
          </a>
        </div>
      )}

      {/* Large image */}
      {image && (
        <div className="mt-8 mx-auto max-w-3xl">
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
    </section>
  )
}

export default AboutBlock
