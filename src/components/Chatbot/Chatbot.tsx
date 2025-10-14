'use client'

import React, { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputValue,
        isUser: true,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, newMessage])
      setInputValue('')
      setIsTyping(true)

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: "Thanks for your message! We'll get back to you soon.",
          isUser: false,
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, botResponse])
        setIsTyping(false)
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-6 z-50 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3"
      >
        <div className="relative">
          <img
            src="https://static.wixstatic.com/media/e188cb_4d38a439b0044bcf84991b7d85b0abba~mv2.png/v1/fill/w_110,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen_Shot_2021-08-23_at_6_19_36_PM-removebg-preview%20(1).png"
            alt="GenXL Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <span className="font-medium">Message</span>
      </button>

      {/* Chatbot Dropdown */}
      {isOpen && (
        <div className="fixed bottom-5 right-6 z-50 w-115 h-[38rem] bg-gray-50 rounded-t-2xl shadow-2xl border border-gray-200 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white rounded-t-2xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://static.wixstatic.com/media/e188cb_4d38a439b0044bcf84991b7d85b0abba~mv2.png/v1/fill/w_110,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen_Shot_2021-08-23_at_6_19_36_PM-removebg-preview%20(1).png"
                  alt="GenXL Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-xl leading-6">Message Us!</h3>
                <p className="text-sm text-green-600 font-extralight leading-5">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-800 hover:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length > 0 && (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}