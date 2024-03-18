"use client";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";
import Modal from "../Modal";

const Navbar = () => {
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
      <div className="container">
        <div className="flex  items-center justify-between w-full h-fit">
          <div className="m-5 text-secondary text-3xl font-bold">Logo</div>
          <div className="px-7 py-3">
            <Button
              onClick={openModal}
              className="
          bg-yellow-400
          px-12
          py-6
          rounded-md
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
      </div>
    </>
  );
};

export default Navbar;
