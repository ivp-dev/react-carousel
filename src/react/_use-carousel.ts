import { useRef } from "react"

export const useCarrousel = () => {
  const containerRef = useRef()

  return [containerRef]
}