import React from 'react'

export default function VideoComponent() {
  return (
    <div>
      <video
          className="absolute inset-0 w-full h-full object-cover"
          src="videos/komo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
    </div>
  )
}
