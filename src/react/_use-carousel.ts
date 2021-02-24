import { useRef } from "react"

export const useCarousel = <T extends HTMLElement>() => {
  const containerRef = useRef<T>(null)

  return [containerRef]
}