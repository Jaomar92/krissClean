"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";

const Items = [
  {
    id: 1,
    title: "Carpet's",
    description: "We Clean Carpets",
    url: "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Sofa's",
    description: "We Clean Sofa's",
    url: "https://images.pexels.com/photos/4401537/pexels-photo-4401537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Car Interior's",
    description: "We Clean Cars",
    url: "https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const SliderCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? Items.length - 1 : index - 1;

    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = index === Items.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index, nextSlide]);

  return (
    <div className="container my-6">
      <div className="relative h-[720px] group ">
        <div
          className="relative w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-linear shadow-lg"
          style={{ backgroundImage: `url(${Items[index].url})` }}
        >
          <div className="flex flex-col text-white items-center h-full justify-center">
            <div className="text-center  w-full px-5 text-6xl font-extrabold  md:mt-0">
              {Items[index].title}
            </div>

            <div className="p-5 text-center text-2xl font-semibold">
              {Items[index].description}
            </div>
          </div>
        </div>
        {/** Navigation-- Start */}
        <div>
          <ChevronLeftIcon
            onClick={prevSlide}
            color="rgb(31 41 55 / 0.8)"
            className="hidden group-hover:block group-hover:ease-in-out group-hover:duration-300 absolute top-[43%] left-5 h-20 w-20 hover:bg-slate-200/20 hover:rounded-full"
          />
        </div>
        <div>
          <ChevronRightIcon
            onClick={nextSlide}
            color="rgb(31 41 55 / 0.8)"
            className="hidden  group-hover:block absolute h-20 w-20 top-[43%] right-5 hover:bg-slate-200/20 hover:rounded-full"
          />
        </div>
        {/** Navigation-- End */}
      </div>
      {/** Pagination -- Start */}
      <div className="flex gap-3 items-center justify-center my-3">
        {Items.map((item, itemIndex) => (
          <div
            onClick={() => goToSlide(itemIndex)}
            className={`h-3 w-3 ${
              itemIndex === index ? "bg-gray-600" : "bg-gray-300"
            } rounded-full shadow-md cursor-pointer duration-700 ease-in-out`}
            key={itemIndex}
          ></div>
        ))}
      </div>
      {/** Pagination -- End */}
    </div>
  );
};

export default SliderCarousel;
