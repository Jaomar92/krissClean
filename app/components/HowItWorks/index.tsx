"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import Modal from "../Modal";

const ProcessList = [
  {
    id: 1,
    title: "Step 1",
    Median: "Whatsapp",
    Icon: <FaWhatsapp size={120} />,
    description:
      "You can contact us via whatsapp or telegram to create a booking.",
  },
  {
    id: 2,
    title: "Step 2",
    Median: "Booking Confirmation",
    Icon: <FaRegCalendarCheck size={120} />,
    description:
      "Upon booking confirmation we will begin to process your order.",
  },
  {
    id: 3,
    title: "Step 3",
    Median: "Delivery",
    Icon: <TbTruckDelivery size={120} />,
    description: "On the day of service we will be on our way to you.",
  },
  {
    id: 4,
    title: "Step 1",
    Median: "Service and Pay",
    Icon: <GiTakeMyMoney size={120} />,
    description:
      "Upon completion of order payment can be made in Cash or bank transfer.",
  },
];

const HowItWorks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? <Modal onClose={closeModal} /> : ""}
      <div className="bg-gradient-to-tl from-yellow-300 to-orange-400 my-12">
        <div className="container py-6">
          <h3 className="text-center text-5xl font-bold pb-10">How It Works</h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 ">
            {ProcessList.map((item) => (
              <div className="bg-white rounded-2xl shadow-md p-3" key={item.id}>
                <h4 className="text-center font-semibold text-2xl">
                  {item.title}
                </h4>
                <h5 className="text-center font-medium text-2xl">
                  {item.Median}
                </h5>
                <div className="flex items-center justify-center py-2">
                  {item.Icon}
                </div>
                <p className="text-center py-2 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center py-8">
          <Button
            onClick={openModal}
            className="
          bg-gray-100
          px-12
          py-6
          rounded-xl
          font-semibold
          text-xl
          text-secondary-foreground
          transition
          ease-in-out
          duration-200
          hover:bg-yellow-500
          hover:text-secondary
          hover:-translate-y-1
          hover:rounded-lg
          "
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
