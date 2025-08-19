"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingOverlayProps {
  isLoading: boolean
}

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setShow(true)
    } else {
      // Add a small delay before hiding to ensure smooth transition
      const timer = setTimeout(() => setShow(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-4">
          <Image
            src="/images/musika-wethu-logo.png"
            alt="Musika Wethu"
            width={200}
            height={67}
            className="h-16 w-auto animate-pulse"
            style={{ background: "transparent" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}
