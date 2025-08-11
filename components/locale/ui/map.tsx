'use client'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ZoomMap = 17

export interface IGeocodeData {
  data: {
    lat: number
    lon: number
  }
}

interface FlyToProps {
  activeCityCoords: { lat: number; lon: number }
}

const FlyTo = ({ activeCityCoords }: FlyToProps) => {
  const map = useMap()

  useEffect(() => {
    if (activeCityCoords) {
      map.flyTo([activeCityCoords.lat, activeCityCoords.lon], ZoomMap, {
        duration: 3.5
      })
    }
  }, [activeCityCoords, map])

  return null
}

interface MapProps {
  data: IGeocodeData
}

const Map = ({ data }: MapProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !data?.data) return null

  const location = data.data
  const position: LatLngExpression = [16.4637116, 107.5859973]

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer center={position} zoom={ZoomMap} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyTo activeCityCoords={{ lat: location.lat, lon: location.lon }} />
      </MapContainer>
    </div>
  )
}

export default Map
