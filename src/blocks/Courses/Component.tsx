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

type FilterOption = { label: string; value: string }

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
    <div className="mb-4 md:mb-5">
      <h3 className="text-sm md:text-md font-semibold text-blue-600 mb-2">{title}</h3>
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
  // State to track which filters are selected
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedGrades, setSelectedGrades] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [selectedClassSizes, setSelectedClassSizes] = useState<string[]>([])

  // State for mobile filter menu
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Parse filter config into display-ready options
  // SUBJECTS: Array of {label, value}
  const subjectOptions: FilterOption[] = (filtersConfig?.subjects || [])
    .filter((s) => s.value)
    .map((s) => ({
      label: s.label || s.value || '',
      value: s.value || '',
    }))

  // GRADES: Array of {grade: number} -> convert to {label, value}
  const gradeOptions: FilterOption[] = (filtersConfig?.grades || [])
    .map((g: any) => {
      // Try multiple possible field names
      const gradeValue = g.grade ?? g.Grade ?? g.value ?? g.gradeLevel
      if (gradeValue !== undefined) {
        return {
          label: String(gradeValue),
          value: String(gradeValue),
        }
      }
      return null
    })
    .filter((g): g is FilterOption => g !== null)

  // DURATIONS: Array of {weeks: number} -> convert to {label, value}
  const durationOptions: FilterOption[] = (filtersConfig?.durations || [])
    .map((d: any) => {
      const weeks = d.weeks ?? d.duration ?? d['Duration (weeks)'] ?? d.value
      if (weeks !== undefined) {
        return {
          label: weeks === 1 ? '1 week' : `${weeks} weeks`,
          value: String(weeks),
        }
      }
      return null
    })
    .filter((d): d is FilterOption => d !== null)

  // CLASS SIZES: Array of {minSize, maxSize} -> convert to {label, value}
  const classSizeOptions: FilterOption[] = (filtersConfig?.classSizes || [])
    .map((c: any) => {
      const min = c.minSize ?? c['Minimum Class Size'] ?? c.min
      const max = c.maxSize ?? c['Maximum Class Size'] ?? c.max
      if (min !== undefined && max !== undefined) {
        return {
          label: `${min} - ${max}`,
          value: `${min}-${max}`,
        }
      }
      return null
    })
    .filter((c): c is FilterOption => c !== null)

  // Toggle functions - add or remove a value from selected array
  const toggleSubject = (value: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  const toggleGrade = (value: string) => {
    setSelectedGrades((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  const toggleDuration = (value: string) => {
    setSelectedDurations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  const toggleClassSize = (value: string) => {
    setSelectedClassSizes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  // Debug: Show what's selected
  console.log('Selected filters:', {
    subjects: selectedSubjects,
    grades: selectedGrades,
    durations: selectedDurations,
    classSizes: selectedClassSizes,
  })

  console.log('Selected cards: ', {
    subject: selectedSubjects,
    grade: selectedGrades,
    duration: selectedDurations,
    classSize: selectedClassSizes,
  })

  const hasFilters =
    subjectOptions.length ||
    gradeOptions.length ||
    durationOptions.length ||
    classSizeOptions.length

  // Check if any filters are active
  const hasActiveFilters =
    selectedSubjects.length > 0 ||
    selectedGrades.length > 0 ||
    selectedDurations.length > 0 ||
    selectedClassSizes.length > 0

  // Filter the cards based on selected filters (all active filters must match)
  const filteredCards = !cards?.length
    ? []
    : !hasActiveFilters
      ? cards // No filters selected = show all cards
      : cards.filter((block) => {
          const card = block as any
          if (card.blockType !== 'courseCard') return false

          // Get card's filter values
          const cardSubject = String(card.subject || '').toLowerCase()
          const cardGrade = card.grade
          const cardDuration = card.duration // Number of weeks
          const cardClassSize = card.classSize // Single number

          // SUBJECT FILTER: If subjects are selected, check if card matches any selected subject
          const matchesSubject =
            selectedSubjects.length === 0 ||
            selectedSubjects.some((selectedValue) =>
              cardSubject.includes(selectedValue.toLowerCase()),
            )

          // GRADE FILTER: If grades are selected, check if card's grade ranges include any selected grade
          const matchesGrade =
            selectedGrades.length === 0 ||
            selectedGrades.some((selectedGrade) => {
              const gradeNum = parseInt(selectedGrade, 10)

              // Handle if cardGrade is an array of ranges
              if (Array.isArray(cardGrade)) {
                return cardGrade.some((range: any) => {
                  const min = range?.minGrade
                  const max = range?.maxGrade
                  return (
                    min !== undefined && max !== undefined && gradeNum >= min && gradeNum <= max
                  )
                })
              }

              // Handle if cardGrade is a single object with minGrade/maxGrade
              if (cardGrade && typeof cardGrade === 'object') {
                const min = (cardGrade as any).minGrade
                const max = (cardGrade as any).maxGrade
                if (min !== undefined && max !== undefined) {
                  return gradeNum >= min && gradeNum <= max
                }
              }

              return false
            })

          // DURATION FILTER: If durations are selected, check if card's duration matches any selected duration
          const matchesDuration =
            selectedDurations.length === 0 ||
            selectedDurations.some((selectedDuration) => {
              const durationNum = parseInt(selectedDuration, 10)
              return cardDuration === durationNum
            })

          // CLASS SIZE FILTER: If class sizes are selected, check if card's class size falls within any selected range
          const matchesClassSize =
            selectedClassSizes.length === 0 ||
            selectedClassSizes.some((selectedRange) => {
              // Parse the range format "min-max"
              const [minStr, maxStr] = selectedRange.split('-')
              const min = parseInt(minStr, 10)
              const max = parseInt(maxStr, 10)
              // Check if card's class size falls within this range
              return !isNaN(min) && !isNaN(max) && cardClassSize >= min && cardClassSize <= max
            })

          // Card must match ALL active filters (subject AND grade AND duration AND class size)
          return matchesSubject && matchesGrade && matchesDuration && matchesClassSize
        })

  console.log('Active filters:', {
    subjects: selectedSubjects,
    grades: selectedGrades,
    durations: selectedDurations,
    classSizes: selectedClassSizes,
  })
  console.log('Filtered cards:', filteredCards.length, 'out of', cards?.length || 0)

  return (
    <section className="w-full my-8 md:my-12 lg:my-16 px-4 md:px-8 lg:px-16">
      {/* Mobile Filter Button */}
      {hasFilters && (
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="w-full bg-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      )}

      <div className="flex gap-6 lg:gap-12 xl:gap-16 w-full">
        {/* Sidebar */}
        {hasFilters && (
          <aside
            className={`w-full lg:w-56 xl:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4 md:p-6 lg:sticky lg:top-24">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                Filter By
              </h2>
              <div className="h-[2px] bg-gray-300 w-full rounded-full mb-4 md:mb-6" />

              {/* Subject Filters */}
              {subjectOptions.length > 0 && (
                <FilterGroup
                  title="Subject"
                  options={subjectOptions}
                  selected={selectedSubjects}
                  onChange={toggleSubject}
                />
              )}

              {/* Grade Level Filters - 2 column grid */}
              {gradeOptions.length > 0 && (
                <FilterGroup
                  title="Grade Level"
                  options={gradeOptions}
                  selected={selectedGrades}
                  onChange={toggleGrade}
                  layout="grid"
                />
              )}

              {/* Duration Filters */}
              {durationOptions.length > 0 && (
                <FilterGroup
                  title="Course Duration"
                  options={durationOptions}
                  selected={selectedDurations}
                  onChange={toggleDuration}
                />
              )}

              {/* Class Size Filters */}
              {classSizeOptions.length > 0 && (
                <FilterGroup
                  title="Class Size"
                  options={classSizeOptions}
                  selected={selectedClassSizes}
                  onChange={toggleClassSize}
                />
              )}
            </div>
          </aside>
        )}

        {/* Cards Grid - showing filtered results */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-8xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {filteredCards.map((block, i) => {
                if (!block || (block as any).blockType !== 'courseCard') return null
                return (
                  <div key={i} className="w-full">
                    <CourseCardBlock {...(block as any)} />
                  </div>
                )
              })}
            </div>

            {filteredCards.length === 0 && !cards?.length && (
              <div className="text-center py-12 text-gray-500">No courses available.</div>
            )}

            {filteredCards.length === 0 && cards && cards.length > 0 && (
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
