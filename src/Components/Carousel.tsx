import { Carousel } from "@mantine/carousel"
import { LazyLoadImage } from "react-lazy-load-image-component"
import classes from "../Components/Carousel.module.css"

interface MyCarouselProps {
  title: string
  img: string[]
}

export default function MyCarousel({ title, img }: MyCarouselProps) {
  return (
    <Carousel
      key={title}
      slideGap={"xs"}
      controlSize={30}
      withIndicators
      classNames={classes}>
      {img.map((image, i) => (
        <Carousel.Slide key={i} className="w-fit flex justify-center">
          <LazyLoadImage
            className="h-fit xl:h-[74.5vh] w-fit border-2 border-slate-200"
            src={image}
            alt={`Slide ${i + 1}`}
            width={"100%"}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}
