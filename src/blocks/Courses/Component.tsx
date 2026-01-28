'use client'

import React, { useState } from 'react'
import type { Page } from '@/payload-types'

import { CourseCardBlock } from '@/blocks/CourseCard/Component'

// Types matching the Config structure (using camelCase field names)
type SubjectFilter = { id?: string; label?: string; value?: string }
type GradeFilter = { id?: string; grade?: number }
type DurationFilter = { id?: string; weeks?: number }
type ClassSizeFilter = { id?: string; minSize?: number; maxSize?: number }

type FiltersGroup = {
  subjects?: SubjectFilter[] | null
  grades?: GradeFilter[] | null
  durations?: DurationFilter[] | null
  classSizes?: ClassSizeFilter[] | null
}

type CardBlock = Page['layout'][0]

type Props = {
  title?: string | null
  filters?: FiltersGroup | null
  cards?: CardBlock[] | null
}

type FilterState = {
  subjects: string[]
  grades: number[]
  durations: number[]
  classSizes: string[] // Store as "min-max" strings
}

type FilterOption = { label: string; value: string }

// Helper to safely convert values
const safeString = (val: unknown): string => {
  if (typeof val === 'string') return val
  if (typeof val === 'number') return String(val)
  return ''
}

// Types for CourseCard filter fields (matching CourseCard config with camelCase)
type GradeRange = { id?: string; minGrade?: number; maxGrade?: number }
type ClassSizeRange = { id?: string; minSize?: number; maxSize?: number }

const FilterGroup: React.FC<{
  title: string
  options: FilterOption[]
  selected: string[]
  onChange: (value: string) => void
  layout?: 'list' | 'grid'
}> = ({ title, options, selected, onChange, layout = 'list' }) => {
  if (!options?.length) return null

  const layoutClasses = {
    list: 'space-y-2',
    grid: 'grid grid-cols-2 gap-x-4 gap-y-2',
  }

  return (
    <div className="mb-5">
      <h3 className="text-md font-semibold text-blue-600 mb-2">{title}</h3>
      <div className={layoutClasses[layout]}>
        {options.map((opt, idx) => (
          <label
            key={`${opt.value}-${idx}`}
            className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-gray-900"
          >
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={() => onChange(opt.value)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export const CoursesBlock: React.FC<Props> = ({ filters: filtersConfig, cards }) => {
  // Debug: log the filters config to see actual data structure
  // console.log('Filters Config:', JSON.stringify(filtersConfig, null, 2))

  const [activeFilters, setActiveFilters] = useState<FilterState>({
    subjects: [],
    grades: [],
    durations: [],
    classSizes: [],
  })

  // Helper to extract number from various possible field names
  const getNumber = (obj: any, ...keys: string[]): number | undefined => {
    if (!obj) return undefined
    for (const key of keys) {
      if (obj[key] !== undefined && obj[key] !== null) {
        const num = Number(obj[key])
        if (!isNaN(num)) return num
      }
    }
    return undefined
  }

  // Transform config filters to FilterOption arrays
  const subjectOptions: FilterOption[] = (filtersConfig?.subjects || [])
    .filter((s) => s.value)
    .map((s) => ({
      label: s.label || s.value || '',
      value: s.value || '',
    }))

  // Handle grades - try multiple possible field names
  const gradeOptions: FilterOption[] = (filtersConfig?.grades || [])
    .map((g: any) => {
      const grade = getNumber(g, 'grade', 'Grade', 'value')
      if (grade === undefined) return null
      return {
        label: String(grade),
        value: String(grade),
      }
    })
    .filter((g): g is FilterOption => g !== null)

  // Handle durations - try multiple possible field names
  const durationOptions: FilterOption[] = (filtersConfig?.durations || [])
    .map((d: any) => {
      const weeks = getNumber(d, 'weeks', 'duration', 'Duration (weeks)', 'value')
      if (weeks === undefined) return null
      return {
        label: weeks === 1 ? '1 week' : `${weeks} weeks`,
        value: String(weeks),
      }
    })
    .filter((d): d is FilterOption => d !== null)

  // Handle class sizes - try multiple possible field names
  const classSizeOptions: FilterOption[] = (filtersConfig?.classSizes || [])
    .map((c: any) => {
      const min = getNumber(c, 'minSize', 'Minimum Class Size', 'min')
      const max = getNumber(c, 'maxSize', 'Maximum Class Size', 'max')
      if (min === undefined || max === undefined) return null
      return {
        label: `${min} - ${max}`,
        value: `${min}-${max}`,
      }
    })
    .filter((c): c is FilterOption => c !== null)

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setActiveFilters((prev) => {
      if (category === 'grades' || category === 'durations') {
        const numValue = parseInt(value, 10)
        const currentValues = prev[category] as number[]
        return {
          ...prev,
          [category]: currentValues.includes(numValue)
            ? currentValues.filter((v) => v !== numValue)
            : [...currentValues, numValue],
        }
      }
      const currentValues = prev[category] as string[]
      return {
        ...prev,
        [category]: currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      }
    })
  }

  const hasAnyFilters =
    subjectOptions.length ||
    gradeOptions.length ||
    durationOptions.length ||
    classSizeOptions.length

  const hasActiveFilters =
    activeFilters.subjects.length ||
    activeFilters.grades.length ||
    activeFilters.durations.length ||
    activeFilters.classSizes.length

  // Filter cards based on selected filters
  const visibleCards = !cards?.length
    ? []
    : !hasActiveFilters
      ? cards
      : cards.filter((block) => {
          const card = block as any
          if (card.blockType !== 'courseCard') return false

          // Get card filter values
          const cardSubject = safeString(card.subject).toLowerCase()
          const cardGradeRanges: GradeRange[] = Array.isArray(card.grade) ? card.grade : []
          const cardDuration = typeof card.duration === 'number' ? card.duration : null
          const cardClassSizeRanges: ClassSizeRange[] = Array.isArray(card.classSize)
            ? card.classSize
            : []

          // Check subject match
          const matchesSubject =
            !activeFilters.subjects.length ||
            activeFilters.subjects.some((s) => cardSubject.includes(s.toLowerCase()))

          // Check grade match - card has array of grade ranges [{minGrade, maxGrade}]
          const matchesGrade =
            !activeFilters.grades.length ||
            activeFilters.grades.some((selectedGrade) => {
              return cardGradeRanges.some((range) => {
                const min = range.minGrade
                const max = range.maxGrade
                if (min === undefined || max === undefined) return false
                return selectedGrade >= min && selectedGrade <= max
              })
            })

          // Check duration match - card.duration is a number (weeks)
          const matchesDuration =
            !activeFilters.durations.length ||
            (cardDuration !== null && activeFilters.durations.includes(cardDuration))

          // Check class size match - card has array of class size ranges [{minSize, maxSize}]
          const matchesClassSize =
            !activeFilters.classSizes.length ||
            activeFilters.classSizes.some((filterRange) => {
              const [filterMin, filterMax] = filterRange.split('-').map(Number)
              return cardClassSizeRanges.some((range) => {
                const cardMin = range.minSize
                const cardMax = range.maxSize
                if (cardMin === undefined || cardMax === undefined) return false
                // Check if ranges overlap
                return cardMin <= filterMax && cardMax >= filterMin
              })
            })

          return matchesSubject && matchesGrade && matchesDuration && matchesClassSize
        })

  return (
    <section className="w-full my-16 px-8 lg:px-16">
      <div className="flex gap-12 lg:gap-16 w-full">
        {/* Sidebar */}
        {hasAnyFilters && (
          <aside className="w-56 lg:w-64 flex-shrink-0">
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Filter By</h2>
              <div className="h-[2px] bg-gray-300 w-full rounded-full mb-6" />

              <FilterGroup
                title="Subject"
                options={subjectOptions}
                selected={activeFilters.subjects}
                onChange={(v) => toggleFilter('subjects', v)}
              />

              <FilterGroup
                title="Grade Level"
                options={gradeOptions}
                selected={activeFilters.grades.map(String)}
                onChange={(v) => toggleFilter('grades', v)}
                layout="grid"
              />

              <FilterGroup
                title="Course Duration"
                options={durationOptions}
                selected={activeFilters.durations.map(String)}
                onChange={(v) => toggleFilter('durations', v)}
              />

              <FilterGroup
                title="Class Size"
                options={classSizeOptions}
                selected={activeFilters.classSizes}
                onChange={(v) => toggleFilter('classSizes', v)}
              />
            </div>
          </aside>
        )}

        {/* Cards Grid - centered in remaining space */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-8xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10 xl:gap-12">
              {visibleCards.map((block, i) => {
                if (!block || (block as any).blockType !== 'courseCard') return null
                return (
                  <div key={i} className="w-full">
                    <CourseCardBlock {...(block as any)} />
                  </div>
                )
              })}
            </div>

            {visibleCards.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No courses match the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesBlock
