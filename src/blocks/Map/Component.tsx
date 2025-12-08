'use client'

import React from 'react'
import dynamic from 'next/dynamic'

import type { Map as MapProps } from '@/payload-types'

// Dynamically import the entire map to avoid SSR issues
const DynamicMap = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
})

type Props = MapProps & {
  className?: string
  enableGutter?: boolean
  disableInnerContainer?: boolean
}

export const Map: React.FC<Props> = (props) => {
  const { title, description, locations, defaultZoom = 2, defaultCenter, className } = props

  // Calculate center from locations if not provided
  const centerLat = defaultCenter?.latitude ?? 20
  const centerLng = defaultCenter?.longitude ?? 0

  // Ensure we have locations
  if (!locations || locations.length === 0) {
    return (
      <div className={`container mx-auto px-4 py-8 ${className || ''}`}>
        <div className="text-center text-gray-500">No locations to display on the map.</div>
      </div>
    )
  }

  // Filter valid locations
  const validLocations = locations.filter(
    (loc) =>
      loc &&
      typeof loc.latitude === 'number' &&
      typeof loc.longitude === 'number' &&
      !isNaN(loc.latitude) &&
      !isNaN(loc.longitude),
  )

  return (
    <div className={`container mx-auto px-4 py-8 lg:py-16 ${className || ''}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">{title}</h2>
        )}
        {description && (
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">{description}</p>
        )}
        <div className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <DynamicMap
            locations={validLocations}
            defaultZoom={defaultZoom}
            centerLat={centerLat}
            centerLng={centerLng}
          />
        </div>
      </div>
    </div>
  )
}
