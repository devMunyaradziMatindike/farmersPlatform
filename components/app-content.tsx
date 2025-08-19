"use client"

import { ReactNode } from "react"
import { useNavigation } from "./navigation-context"
import { usePageLoading } from "./use-page-loading"
import LoadingOverlay from "./loading-overlay"

interface AppContentProps {
  children: ReactNode
}

export default function AppContent({ children }: AppContentProps) {
  const { isLoading } = useNavigation()
  usePageLoading()
  
  return (
    <>
      {children}
      <LoadingOverlay isLoading={isLoading} />
    </>
  )
}
