import React from "react";

const Rental = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-stretch">
        <div className="grid grid-rows-3 w-full h-full gap-2">
          <div className="w-full h-full ">
            <div
              className="col-span-5 h-full w-full rounded-lg shadow-lg"
              style={{
                backgroundImage: "url(/Assets/Car-vacuuming.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
              }}
            ></div>
          </div>
          <div
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              backgroundImage: "url(/Assets/sofa-vacuuming.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          ></div>
          <div
            className="w-full h-ful rounded-lg shadow-lg"
            style={{
              backgroundImage: "url(/Assets/carpet-vacuuming.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          ></div>
        </div>
        <div className="h-[800px] w-full p-2">
          <table className="w-full ">
            <thead className="">
              <tr>
                <th className="w-[50%] font-bold text-2xl rounded-tl-md rounded-bl-md bg-gray-400/50 py-3">
                  Items
                </th>
                <th className="w-[50%] font-bold text-2xl rounded-tr-md rounded-br-md bg-gray-400/50 py-3 ">
                  RM
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-16">
                <td className="text-center">DIY Cleaning</td>
                <td className="text-center">RM 55 per day</td>
              </tr>
              <tr className="h-16">
                <td className="text-center">24H Rental</td>
                {/* <td className="text-center">RM80 - Rm150</td> */}
              </tr>
              <tr className="h-16">
                <td className="text-center">Free Detergent</td>
                {/* <td className="text-center">RM30 - RM150</td> */}
              </tr>
              <tr className="h-16">
                <td className="text-center">Delivery Provided</td>
                {/* <td className="text-center">RM80 - Rm150</td> */}
              </tr>
            </tbody>
          </table>
          <div>* Dependent on Stock availability</div>
          <div>* All services are subject to 6% gst charges</div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
