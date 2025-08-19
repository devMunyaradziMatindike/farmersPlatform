"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface NavigationContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  startLoading: () => void
  stopLoading: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return (
    <NavigationContext.Provider value={{ isLoading, setIsLoading, startLoading, stopLoading }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider")
  }
  return context
}
