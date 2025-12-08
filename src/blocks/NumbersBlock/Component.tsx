'use client';
import React from 'react';
import { cn } from '@/utilities/ui';
import type { NumbersBlock as NumbersBlockProps } from '@/payload-types';

type Props = NumbersBlockProps & {
  className?: string;
  enableGutter?: boolean;
  disableInnerContainer?: boolean;
};

export const NumbersBlock: React.FC<Props> = ({
  uniqueCourses,
  applicants,
  countriesStates,
  instructors,
  className,
  enableGutter = true,
  disableInnerContainer,
}) => {
  return (
    <div className={cn('py-16 px-8', className)} style={{ backgroundColor: '#F8DC48' }}>
      <div className={cn('max-w-6xl mx-auto', { container: enableGutter })}>
        {/* Header */}
        <div className={cn('text-center mb-16', { container: !disableInnerContainer })}>
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Education as an Influence
          </h1>
          <p className="text-lg text-black mt-2">Growing Every Day</p>
        </div>

        {/* Statistics Row - Horizontal Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 max-w-5xl mx-auto">
          {/* Applicants */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-black mb-2">
              {applicants?.toLocaleString()}
            </div>
            <div className="text-base text-black">Applicants</div>
          </div>

          {/* Instructors */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-black mb-2">
              {instructors?.toLocaleString()}
            </div>
            <div className="text-base text-black">Instructors</div>
          </div>

          {/* Unique Courses */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-black mb-2">
              {uniqueCourses}
            </div>
            <div className="text-base text-black">Unique Courses</div>
          </div>

          {/* Countries */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-black mb-2">
              {countriesStates}
            </div>
            <div className="text-base text-black">Countries</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-black text-yellow-400 px-10 py-3.5 rounded-full font-medium hover:bg-gray-900 transition-colors duration-300">
            See our Team
          </button>
        </div>
      </div>
    </div>
  );
};
