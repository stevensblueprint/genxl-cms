'use client'

import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'
import React from 'react'

type Logo = { media?: MediaDoc | string; alt?: string; href?: string }
type Section = { heading?: string; description?: string; logos?: Logo[] }

type Props = {
  sponsors?: Section
  partners?: Section
}

export const SponsorsPartnersBlock: React.FC<Props> = ({ sponsors, partners }) => {
  const renderSection = (section?: Section) => {
    if (!section || !(section.heading || section.description || section.logos?.length)) return null

    return (
      <section className="container my-12">
        {section.heading && (
          <h2 className="mb-3 text-center text-2xl md:text-3xl font-semibold tracking-tight">
            {section.heading}
          </h2>
        )}

        {section.description && (
          <p className="mb-6 text-center text-muted-foreground">{section.description}</p>
        )}

        {/* 4 logos per row from sm+; 2 per row on very small screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-8 items-center justify-items-center">
          {section.logos!.map((item, i) => {
            const doc =
              item.media && typeof item.media === 'object' ? (item.media as MediaDoc) : undefined

            const node = doc ? (
              <Media resource={doc} imgClassName="max-h-20 md:max-h-24 w-auto object-contain" />
            ) : (
              <img
                src={typeof item.media === 'string' ? item.media : ''}
                alt={item.alt || ''}
                className="max-h-20 md:max-h-24 w-auto object-contain"
              />
            )

            return item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noreferrer">
                {node}
              </a>
            ) : (
              <div key={i}>{node}</div>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <div className="py-12">
      {renderSection(sponsors)}
      {renderSection(partners)}
    </div>
  )
}
