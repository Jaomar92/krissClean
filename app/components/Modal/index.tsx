"use client";
import { useEffect } from "react";
import Contact from "../ContactInfo";
interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div
      onClick={() => onClose()}
      className="overscroll-none fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center "
    >
      <div className="h-fit w-[fit]   mx-12 flex justify-center items-center">
        <div
          className="bg-yellow-300  h-full w-full rounded-xl"
          style={{
            backgroundImage: "url(/Assets/liquid-cheese.svg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center md:gap-6">
              <div className="w-full h-[70vw] md:h-[100%]  block rounded-lg shadow-lg bg-[url('/Assets/Lets-get-in-touch.png')] bg-cover bg-no-repeat bg-top "></div>
              <div className="my-0 md:my-40">
                <h3 className="text-3xl font-bold py-8 text-center md:text-left">
                  Dont Hestitate to Whatsapp us at:
                </h3>
                <p className="text-2xl font-semibold text-center md:text-left">
                  011-6120 0740
                </p>
                <p className="text-2xl font-semibold text-center md:text-left">
                  011-6120 6982
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
