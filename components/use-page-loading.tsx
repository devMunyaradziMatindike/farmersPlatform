"use client"

import { useEffect } from "react"
import { useNavigation } from "./navigation-context"
import { usePathname } from "next/navigation"

export function usePageLoading() {
  const { stopLoading } = useNavigation()
  const pathname = usePathname()

  useEffect(() => {
    // Stop loading when the pathname changes (page has loaded)
    stopLoading()
  }, [pathname, stopLoading])
}
