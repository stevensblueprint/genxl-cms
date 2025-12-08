'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  })
}

type MapViewProps = {
  locations: Array<{
    name: string
    latitude: number
    longitude: number
    description?: string | null
  }>
  defaultZoom: number
  centerLat: number
  centerLng: number
}

const MapView: React.FC<MapViewProps> = ({ locations, defaultZoom, centerLat, centerLng }) => {
  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={defaultZoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => {
        if (
          !location.latitude ||
          !location.longitude ||
          typeof location.latitude !== 'number' ||
          typeof location.longitude !== 'number'
        ) {
          return null
        }

        return (
          <Marker key={index} position={[location.latitude, location.longitude]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                {location.description && (
                  <p className="text-sm text-gray-600">{location.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default MapView
