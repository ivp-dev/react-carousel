import { ForwardedRef, forwardRef, ForwardRefRenderFunction, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { CarouselItem } from './_carousel-item'

type CarouseProps<T extends {} = {}> = PropsWithChildren<T>

type Carousel = ForwardRefRenderFunction<HTMLDivElement, { children?: ReactNode }> & {
  Item: typeof CarouselItem
}

const CarouselConstructor = (
  { children }: CarouseProps, ref: ForwardedRef<HTMLDivElement>
): ReactElement<any, any> | null => {
  return <div ref={ref} className="carousel">
    <div className="carousel-container">
      {children}
    </div>
  </div>
}

const Carousel: Carousel = (forwardRef<HTMLDivElement, CarouseProps>(CarouselConstructor) as any ) as Carousel

Carousel.Item = CarouselItem

export default Carousel

