'use client'

import { useState } from 'react'
import type { Accordion as AccordionType } from '@/payload-types'
import { ChevronRight } from 'lucide-react'

interface AccordionClientProps {
  accordionData: AccordionType
}

export function AccordionClient({ accordionData }: AccordionClientProps) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const questions = accordionData?.questions || []

  const toggleItem = (questionId: string) => {
    if (openItem === questionId) {
      setOpenItem(null)
    } else {
      setOpenItem(questionId)
    }
  }

  return (
    <div className="w-full flex flex-col items-center mt-10 mb-20">
      <h2 className="text-4xl font-bold text-black pt-10 text-center">{accordionData?.title}</h2>
      <div className="w-2/3 mx-auto">
        {questions.map((question) => {
          const isOpen = openItem === question.id
          return (
            <div key={question.id} className="border-b-2 border-blue-800">
              <button
                className="text-2xl font-bold text-black p-10 text-left w-full flex justify-between items-center hover:bg-blue-50 transition-colors"
                onClick={() => toggleItem(question.id || '')}
              >
                <span>{question.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                >
                  <ChevronRight className="w-10 h-10" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-10 py-6 text-gray-700 text-lg">{question.answer}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
