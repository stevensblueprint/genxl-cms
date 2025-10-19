'use client'

import React, { useState } from 'react';

const dropdownConfig = {
  label: 'What are you interested in learning?',
  placeholder: 'Select an option',
  options: [
    { value: 'math', label: 'Math' },
    { value: 'science', label: 'Science' },
    { value: 'programming', label: 'Programming' },
    { value: 'economics', label: 'Economics' },
    { value: 'all', label: 'All' },
  ],
};

export function DropdownBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(label);
    setIsOpen(false);
    console.log('Selected:', value, label);
    // Handle selection logic here
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Dropdown Container */}
        <div className="relative">
          {/* Dropdown Button */}
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          >
            <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
              {selectedOption || dropdownConfig.label}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
              <ul className="py-2">
                {dropdownConfig.options.map((option) => (
                  <li key={option.value}>
                    <button
                      type="button"
                      onClick={() => handleSelect(option.value, option.label)}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Click outside to close */}
        {isOpen && (
          <div
            className="fixed inset-0 z-0"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
