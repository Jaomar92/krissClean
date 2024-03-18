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
                  I use to spend my <strong>whole weekends</strong> playing
                  video games.
                  <br />
                  <br />
                  Being frequently scolded by my wife on why I can keep my
                  Gaming PC area clean and the car but cant keep anywhere else
                  in the house clean.
                  <br />
                  <br />
                  with that I knew I had to change and began looking at my house
                  as both of those things when it came to keeping things tidy.
                </p>
                <p className="text-lg font-sans m-2">
                  Later I found myself being complimented for the effort I put
                  in cleaning, where friends and family began paying for my
                  services.
                  <br />
                  <br />
                  Currently offering my services to the everyone within Gombak
                  Selangor area and still playing games on my very expensive,
                  high-spec and tom-yam lights Gaming-PC.
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
