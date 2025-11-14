'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type Props = {
  image: MediaDoc | string
  title: string
  grade: string
  duration: string
  classSize: string
  category: string
  buttonLabel?: string | null
  buttonHref?: string | null
}

export const CourseCardBlock: React.FC<Props> = ({
  image,
  title,
  grade,
  duration,
  classSize,
  category,
  buttonLabel = 'Information',
  buttonHref,
}) => {
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg bg-background border border-border max-w-sm">
      {/* Image */}
      <div className="aspect-[16/11] w-full overflow-hidden">
        {typeof image === 'object' ? (
          <Media resource={image as MediaDoc} imgClassName="w-full h-full object-cover" />
        ) : (
          <img src={image as string} className="w-full h-full object-cover" />
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

        {/* Specs row */}
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Grade</div>
            <div className="mt-1 font-medium">{grade}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Duration</div>
            <div className="mt-1 font-medium">{duration}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Class size</div>
            <div className="mt-1 font-medium">{classSize}</div>
          </div>
        </div>

        {/* CTA */}
        {buttonLabel && (
          <div className="mt-6">
            {buttonHref ? (
              <a
                href={buttonHref}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium
                           bg-warning text-foreground shadow-sm transition
                           hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {buttonLabel}
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium
                           bg-warning text-foreground shadow-sm transition
                           hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {buttonLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default CourseCardBlock
