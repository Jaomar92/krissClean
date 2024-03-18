"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  children: ReactNode;
  autoSlide: boolean;
  autoSlideInterval: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide,
  autoSlideInterval,
}) => {
  const [curr, setCurr] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const childArray = React.Children.toArray(children);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? (childArray.length ?? 0) - 1 : curr - 1)); // Change `ImageGallery` to `children`

  const next = () =>
    setCurr((curr) => (curr === (childArray.length ?? 0) - 1 ? 0 : curr + 1)); // Change `ImageGallery` to `children`

  const setIndex = (index: number) => {
    setCurr(index);
  };
  useEffect(() => {
    let slideInterval: NodeJS.Timeout;
    if (autoSlide && !isHovered) {
      slideInterval = setInterval(next, autoSlideInterval);
    }
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, isHovered, next]);

  return (
    <div
      className="overflow-hidden relative group rounded-2xl "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex  transition-transform ease-linear duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="hidden group-hover:block">
        <div className="flex items-center justify-between gap-20 absolute inset-0 px-4 w-full opacity-60">
          <Button
            variant={"ghost"}
            className="h-fit rounded-full shadow-md"
            onClick={prev}
          >
            <FaChevronLeft size={40} />
          </Button>
          <Button
            variant={"ghost"}
            className="h-fit rounded-full shadow-md"
            onClick={next}
          >
            <FaChevronRight size={40} />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {childArray.map((_, i) => (
            <div
              onClick={() => setIndex(i)}
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
