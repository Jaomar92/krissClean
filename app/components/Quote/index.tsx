import React from "react";

const Quote = () => {
  return (
    <>
      <div
        className="bg-yellow-300  pt-3 pb-12"
        style={{
          backgroundImage: "url(/Assets/liquid-cheese.svg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-fit ">
          <h3 className="my-5 text-5xl font-extrabold">
            Muhammad Zulkifli
            <br />
            (Owner and Service Provider)
          </h3>
          <div className="rounded-lg grid grid-cols-1 md:grid-cols-4 gap-5 bg-slate-950/35 place-items-stretch place-content-center shadow-lg pb-10">
            <div
              className="h-full min-h-[300px] col-span-2  rounded-lg m-5 md:ml-5 md:mr-0 md:my-5 bg-gray-300"
              style={{
                backgroundImage: "url(/Assets/Daniel_Sharkif.png)",
                backgroundPosition: "center top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="h-full col-span-2 bg-white rounded-lg m-5 md:mr-5 md:ml-0 md:my-5">
              <div className="p-3">
                <h4 className="text-2xl font-semibold pt-2 pb-3 m-2">
                  How it Started
                </h4>
                <p className="text-lg font-sans m-2">
                  KrisClean Services is dedicated to prioritizing customer
                  satisfaction through a meticulous approach to delicate fabric
                  handling, ensuring that even the most sensitive materials are
                  treated with care. Our team of trained professionals follows
                  stringent work processes, utilizing advanced techniques and
                  equipment to deliver outstanding results every time. We
                  believe in providing excellent value for your money, offering
                  competitively priced services that exceed expectations.
                  Whether it's our soft furniture cleaning services or vacuum
                  rentals, you can rely on KrisClean Services for top-notch
                  quality and reliability....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
