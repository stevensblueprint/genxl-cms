'use client'

import React from 'react'
import type { Media as MediaDoc, Page } from '@/payload-types'
import { cn } from '@/utilities/ui'

import { CourseCardBlock } from '@/blocks/CourseCard/Component'

// Types coming from the block config shape:
type FilterOption = { label?: string; value?: string }
type CardBlock = Page['layout'][0] // each sub-block is a layout item

type Props = {
  title?: string | null
  filters?: FilterOption[] | null
  cards?: CardBlock[] | null
}

export const CoursesBlock: React.FC<Props> = ({ title, filters, cards }) => {
  const [selected, setSelected] = React.useState<string>('')

  const hasFilters = !!filters?.length

  // Build the rendered list based on selected filter.
  const visibleCards = React.useMemo(() => {
    if (!cards?.length) return []
    if (!selected) return cards
    return cards.filter((block) => {
      // Expect the CourseCard to carry a "category"
      const anyBlock = block as any
      const category =
        anyBlock?.category ?? anyBlock?.fields?.category ?? anyBlock?.data?.category ?? ''
      return String(category).toLowerCase() === String(selected).toLowerCase()
    })
  }, [cards, selected])

  return (
    <section className="container my-16">
      {/* Title */}
      {title && (
        <>
          <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
          <div className="mx-auto mt-3 mb-8 h-1 w-52 rounded-full bg-warning" />
        </>
      )}

      {/* Dropdown */}
      {hasFilters && (
        <div className="mb-10 flex justify-center">
          <select
            className={cn(
              'rounded-full border bg-background px-6 py-3 text-sm shadow-sm',
              'outline-none focus-visible:ring-2 focus-visible:ring-ring',
            )}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">All</option>
            {filters!.map((opt, idx) => (
              <option key={`${opt.value}-${idx}`} value={opt.value || ''}>
                {opt.label || opt.value}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {visibleCards.map((block, i) => {
          if (!block || (block as any).blockType !== 'courseCard') return null
          // Render existing CourseCard block component
          return <CourseCardBlock key={i} {...(block as any)} />
        })}
      </div>
    </section>
  )
}

export default CoursesBlock
