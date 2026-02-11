'use client'

import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'

type Question = {
  id?: string
  question?: string
  answer?: string
}

type Props = {
  title?: string
  questions?: Question[]
}

export const AccordionBlock: React.FC<Props> = ({ title, questions = [] }) => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (questionId: string) => {
    setOpenItem(openItem === questionId ? null : questionId)
  }

  return (
    <div className="w-full flex flex-col items-center mt-10 mb-20">
      {title && (
        <h2 className="text-4xl font-bold text-black pt-10 text-center">{title}</h2>
      )}
      <div className="w-full md:w-2/3 mx-auto px-4">
        {questions.map((question, index) => {
          const questionId = question.id || `question-${index}`
          const isOpen = openItem === questionId
          return (
            <div key={questionId} className="border-b-2 border-blue-800">
              <button
                className="text-xl md:text-2xl font-bold text-black p-6 md:p-10 text-left w-full flex justify-between items-center hover:bg-blue-50 transition-colors"
                onClick={() => toggleItem(questionId)}
              >
                <span>{question.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                >
                  <ChevronRight className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-10 py-6 text-gray-700 text-base md:text-lg">
                  {question.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccordionBlock
