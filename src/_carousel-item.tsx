import { FC, PropsWithChildren } from 'react'

type CarouseItemProps<T extends {} = {}> = PropsWithChildren<T>

export const CarouselItem: FC<CarouseItemProps> = (
  { children }
) => {
  return <div className="carousel-item">
    {children}
  </div>
}