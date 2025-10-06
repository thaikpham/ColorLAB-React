'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ImageCarousel from "./image-carousel";

const images = [
  "https://www.dummyimage.com/600x400/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
  "https://www.dummyimage.com/600x400/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
  "https://www.dummyimage.com/600x400/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
  "https://www.dummyimage.com/600x400/000/fff",
  "https://www.dummyimage.com/600x400/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
  "https://www.dummyimage.com/600x400/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
  "https://www.dummyimage.com/600x400/000/fff",
  "https://www.dummyimage.com/400x600/000/fff",
];
const RecipeImageCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent className="max-h-96">
        {
          images.map((image, index) => (
            <CarouselItem key={index} className="basis-1/3 self-center">
              <ImageCarousel
                href={image} />
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}

export default RecipeImageCarousel;
