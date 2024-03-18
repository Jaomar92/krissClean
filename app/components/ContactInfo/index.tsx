import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-yellow-300  pt-3 pb-12"
      style={{
        backgroundImage: "url(/Assets/liquid-cheese.svg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-6">
          <div
            className="w-full h-full block bg-white rounded-lg shadow-lg"
            style={{
              backgroundImage: "url(/Assets/Lets-get-in-touch.png)",
              height: "450px",
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h3 className="text-3xl font-bold py-8">
              Dont Hestitate to Whatsapp us at:
            </h3>
            <p className="text-2xl font-semibold">011-6120 0740</p>
            <p className="text-2xl font-semibold">011-6120 6982</p>
            <div>
              <h3 className="text-3xl font-bold py-8">
                All deliveries are free for the following locations
              </h3>
              <p className="text-2xl font-semibold">Bandar Sri Putra</p>
              <p className="text-2xl font-semibold">Bukit Mahkota</p>
              <p className="text-2xl font-semibold">Bangi Avenue</p>
              <p className="text-2xl font-semibold">Bangi Lama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
