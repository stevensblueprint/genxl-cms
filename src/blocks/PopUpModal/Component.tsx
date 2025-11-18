'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/utilities/ui';
import type { PopUpModal as PopUpModalProps } from '@/payload-types';

type Props = PopUpModalProps & {
  className?: string;
};

export const PopUpModal: React.FC<Props> = ({
  title,
  description,
  placeholder,
  buttonText,
  showOnLoad,
  delaySeconds,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (showOnLoad) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, (delaySeconds || 0) * 1000);

      return () => clearTimeout(timer);
    }
  }, [showOnLoad, delaySeconds]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setIsOpen(false);
    setEmail('');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div
          className={cn(
            'bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative',
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Left side - Blue section with icon */}
            <div className="bg-blue-600 p-8 md:p-12 flex items-center justify-center md:w-2/5">
              <div className="text-white">
                {/* Light bulb icon */}
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  className="mx-auto"
                >
                  {/* Light rays */}
                  <line
                    x1="60"
                    y1="15"
                    x2="60"
                    y2="25"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="85"
                    y1="25"
                    x2="78"
                    y2="32"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="35"
                    y1="25"
                    x2="42"
                    y2="32"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Bulb shape */}
                  <path
                    d="M60 35C50 35 42 43 42 53C42 60 46 65 48 70C49 72 49 74 49 76H71C71 74 71 72 72 70C74 65 78 60 78 53C78 43 70 35 60 35Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Base */}
                  <rect
                    x="50"
                    y="76"
                    width="20"
                    height="8"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                  <line
                    x1="52"
                    y1="84"
                    x2="68"
                    y2="84"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Right side - Form section */}
            <div className="p-8 md:p-12 md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {title || 'Stay Connected!'}
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                {description || 'Get to know about new classes and programs!'}
              </p>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder || 'Your Email'}
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap text-sm"
                >
                  {buttonText || 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
