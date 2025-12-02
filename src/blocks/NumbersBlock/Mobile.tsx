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
    <div className={cn('bg-yellow-400 py-16 px-8', className)}>
      <div className={cn('max-w-lg mx-auto', { container: enableGutter })}>
        {/* Header */}
        <div className={cn('text-center mb-12', { container: !disableInnerContainer })}>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Education as an<br />Influence
          </h1>
          <p className="text-base text-black mt-2">Growing Every Day</p>
        </div>

        {/* Statistics Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12 max-w-md mx-auto">
          {/* Applicants - Top Left */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              {applicants?.toLocaleString()}
            </div>
            <div className="text-sm text-black">Applicants</div>
          </div>

          {/* Instructors - Top Right */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              {instructors?.toLocaleString()}
            </div>
            <div className="text-sm text-black">Instructors</div>
          </div>

          {/* Unique Classes - Bottom Left */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              {uniqueCourses}
            </div>
            <div className="text-sm text-black">Unique Classes</div>
          </div>

          {/* Countries - Bottom Right */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              {countriesStates}
            </div>
            <div className="text-sm text-black">Countries</div>
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
