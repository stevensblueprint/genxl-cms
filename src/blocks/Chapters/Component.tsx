import Link from 'next/link'
import React from 'react'

type Chapter = {
  id?: string | number
  name?: string | null
  newTab?: boolean | null
  url?: string | null
}

type ChapterColumn = {
  chapters?: Chapter[] | null
  id?: string | number
}

type Props = {
  columns?: ChapterColumn[] | null
  heading?: string | null
  subheading?: string | null
}

const fallbackColumns: ChapterColumn[] = [
  {
    chapters: [
      { name: 'Acton-Boxborough, MA' },
      { name: 'Alpharetta, Georgia' },
      { name: 'Ashburn, VA' },
      { name: 'Bay Area, CA' },
      { name: 'Boston, MA' },
    ],
  },
  {
    chapters: [
      { name: 'Brentwood, TN' },
      { name: 'Dover-Sherborn, MA' },
      { name: 'Downingtown, PA' },
      { name: 'Fresno, TX' },
      { name: 'Glenn Dale, MD' },
    ],
  },
  {
    chapters: [
      { name: 'Houston, TX' },
      { name: 'Jersey City, NJ' },
      { name: 'Middletown, NJ' },
      { name: 'Mount Clemens, MI' },
      { name: 'Nashua, NH' },
    ],
  },
  {
    chapters: [
      { name: 'New York City, NY' },
      { name: 'Ontario, CA' },
      { name: 'Reynoldsburg, OH' },
      { name: 'Saginaw, MI' },
      { name: 'Woodbridge, NJ' },
    ],
  },
]

export const ChaptersBlock: React.FC<Props> = ({
  columns,
  heading = 'National Chapters',
  subheading = 'Past and Present',
}) => {
  const columnsToRender = columns && columns.length > 0 ? columns : fallbackColumns
  const isThreeColumnLayout = columnsToRender.length === 3

  return (
    <section className="w-full bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          {heading && <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{heading}</h2>}
          {subheading && <p className="mt-2 text-base text-neutral-800">{subheading}</p>}
        </div>

        <div className="mx-auto max-w-6xl bg-neutral-100 px-8 py-8 md:px-14">
          <div
            className={[
              'grid gap-8 md:grid-cols-2 lg:gap-0',
              isThreeColumnLayout
                ? 'lg:mx-auto lg:max-w-4xl lg:grid-cols-3'
                : 'lg:grid-cols-4',
            ].join(' ')}
          >
            {columnsToRender.map((column, index) => (
              <div
                key={column.id ?? index}
                className="lg:border-l lg:border-neutral-300 lg:px-10 lg:first:border-l-0"
              >
                <ul className="space-y-1.5 text-lg font-bold leading-tight">
                  {(column.chapters ?? []).map((chapter, chapterIndex) => {
                    const content = <span>{chapter.name}</span>

                    return (
                      <li key={chapter.id ?? `${chapter.name}-${chapterIndex}`}>
                        {chapter.url ? (
                          <Link
                            className="underline decoration-2 underline-offset-2 transition-colors hover:text-yellow-600"
                            href={chapter.url}
                            target={chapter.newTab ? '_blank' : undefined}
                            rel={chapter.newTab ? 'noopener noreferrer' : undefined}
                          >
                            {content}
                          </Link>
                        ) : (
                          <span className="underline decoration-2 underline-offset-2">{content}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChaptersBlock
