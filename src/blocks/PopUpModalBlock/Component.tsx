'use client';
import React, { useState } from 'react';
import { cn } from '@/utilities/ui';
import { X } from 'lucide-react';
import type { PopUpModalBlock as PopUpModalProps } from '@/payload-types';

type Props = PopUpModalProps & {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export const PopUpModalBlock: React.FC<Props> = ({
  title = 'Stay Connected!',
  description = 'Get to know about new classes and programs!',
  emailPlaceholder = 'Your Email',
  buttonText = 'Subscribe',
  className,
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const [email, setEmail] = useState('');

  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const onClose = controlledOnClose || (() => setInternalIsOpen(false));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribing email:', email);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={cn(
            'bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative',
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={24} />
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
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  {/* Rays */}
                  <path
                    d="M60 20 L60 10 M85 35 L92 28 M100 60 L110 60 M85 85 L92 92"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Bulb */}
                  <circle
                    cx="60"
                    cy="55"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* Base */}
                  <rect
                    x="52"
                    y="75"
                    width="16"
                    height="8"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <rect
                    x="52"
                    y="83"
                    width="16"
                    height="6"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Right side - Form section */}
            <div className="p-8 md:p-12 md:w-3/5">
              <h2
                id="modal-title"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                {title}
              </h2>
              <p className="text-gray-600 mb-8 text-sm md:text-base">{description}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={emailPlaceholder}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
