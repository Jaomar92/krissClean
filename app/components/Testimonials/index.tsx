"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Reviews = [
  {
    id: 1,
    name: "Jeffrey Aroun bin Omar",
    quote:
      "I recently hired this vacuum cleaning service to clean my furniture, carpets, and car seats, and I couldn't be happier with the results! They were thorough, professional, and left everything looking and smelling fresh. Highly recommend!",
    star: 4,
    title: 0,
  },
  {
    id: 2,
    name: "Daniel Sharkif",
    quote:
      "Absolutely delighted with the vacuum cleaning service provided by this company! They transformed my sofas and carpets, removing tough stains and leaving them looking brand new. The team was efficient, friendly, and went above and beyond to ensure customer satisfaction. Will definitely be using their services again!",
    star: 5,
    title: 0,
  },
  {
    id: 3,
    name: "Dita Claudia",
    quote:
      "I'm amazed at the quality of service I received from this vacuum cleaning company. They were prompt, courteous, and incredibly thorough in their cleaning process. My carpets and car seats look and feel fantastic, and I couldn't be happier with the results. Highly recommended for anyone in need of a professional clean!",
    star: 3,
    title: 0,
  },
  {
    id: 4,
    name: "kawan Daniel Sharkif",
    quote:
      "I cannot praise this vacuum cleaning service enough! From the moment they arrived, I knew I was in good hands. They took the time to assess my furniture, carpets, and car seats, and then proceeded to clean them with precision and care. The results were outstanding, and my home feels refreshed and rejuvenated. Thank you for your excellent service!",
    star: 4,
    title: 0,
  },
  {
    id: 5,
    name: "Istri Daniel Sharkif",
    quote:
      "What a fantastic experience! I contacted this vacuum cleaning service to tackle some tough stains on my sofas and carpets, and they exceeded all my expectations. Not only did they remove the stains completely, but they also gave me valuable tips on maintaining cleanliness. Friendly, professional, and highly effective – I couldn't be happier with the service provided.",
    star: 5,
    title: 0,
  },
];
interface ReviewItemProps {
  id: number;
  name: string;
  quote: string;
  star: number;
  title: number; // Assuming 'title' is a required property
}

const Testimonials = () => {
  const renderContent = (item: ReviewItemProps) => {
    return (
      <div className="content">
        <h4 className="font-semibold text-xl">{item.name}</h4>
        {renderStars(item.star)}
        <p>{item.quote}</p>
      </div>
    );
  };
  const renderStars = (numStars: number) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">
          &#9733;
        </span>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-black">
      <div className="container text-white py-5">
        <h3 className="text-center py-4 text-5xl font-bold">
          Here are some of the top reviews on what others
          <br /> have had to say about us
        </h3>
        <div className="my-5">
          <InfiniteMovingCards
            className="-z-0"
            items={Reviews}
            direction="left"
            speed="slow"
            renderContent={renderContent}
            pauseOnHover={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
