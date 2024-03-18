import React from "react";
import Carousel from "./components/Carousel";
import Image from "next/image";

const ImageGallery = [
  {
    id: 1,
    img: "/BeforeAfter/img-1.jpg",
  },
  {
    id: 2,
    img: "/BeforeAfter/img-2.jpg",
  },
  {
    id: 3,
    img: "/BeforeAfter/img-3.jpg",
  },
  {
    id: 4,
    img: "/BeforeAfter/img-4.jpg",
  },
  {
    id: 5,
    img: "/BeforeAfter/img-6.jpg",
  },
  {
    id: 7,
    img: "/BeforeAfter/img-7.jpg",
  },
  {
    id: 8,
    img: "/BeforeAfter/img-8.jpg",
  },
  {
    id: 9,
    img: "/BeforeAfter/img-9.jpg",
  },
  {
    id: 10,
    img: "/BeforeAfter/img-10.jpg",
  },
  {
    id: 11,
    img: "/BeforeAfter/img-11.jpg",
  },
];

const Work = () => {
  return (
    <div className="container my-10 ">
      <h3 className="text-center text-5xl font-bold">Check out Our Works</h3>
      <div className="flex flex-col md:flex-row items-stretch justify-around gap-3">
        <div className="max-w-md  w-full py-2">
          <Carousel autoSlide={true} autoSlideInterval={5000}>
            {ImageGallery.map((item) => (
              <Image
                src={item.img}
                width={500}
                height={800}
                key={item.id}
                alt={item.img}
              />
            ))}
          </Carousel>
        </div>
        {/* <div className="py-5 w-full">
          <p className="text-xl">
            Here are some of our best works with the biggest transformations.
            <br />
            <br />
          </p>
          <p className="text-xl">
            Our service is able to remove the majority of the stains accumulated
            after years of use.
            <br />
            <br />
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Work;
