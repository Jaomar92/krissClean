import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Services_cleaning from "./components/Services_cleaning";
import Rental from "./components/Rental";

const Services = () => {
  return (
    <div className="container">
      <div className="my-5">
        <h3 className="text-center text-5xl font-extrabold">
          Services <br /> & <br /> Prices
        </h3>
        <p className="text-center text-xl py-5">
          We provide mainly Vacuum rental services & Vacuum cleaning Services
          for Sofas, Carpets and Car interiors.
        </p>
      </div>
      {/** Services and Price -- Start */}
      <Tabs defaultValue="Vacuuming Services" className="w-full h-fit mb-5">
        <TabsList className="w-full h-16 bg-slate-950">
          <TabsTrigger value="Vacuuming Services" className="w-full h-12 ">
            Vacuuming Services
          </TabsTrigger>
          <TabsTrigger value="Vacuum Rental DIY" className="w-full h-12 ">
            Vacuum Rental DIY
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Vacuuming Services">
          <Services_cleaning />
        </TabsContent>
        <TabsContent value="Vacuum Rental DIY">
          <Rental />
        </TabsContent>
      </Tabs>
      {/** Services and Price -- End */}
      <div>
        <div className="container max-w-full md:max-w-[65%]">
          <div className="bg-slate-950 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-3xl p-5 flex gap-5">
            <h5 className="text-2xl text-white font-semibold">Free Delivery</h5>
            <ul className="text-white font-medium text-lg">
              <li>Bandar Sri Putra</li>
              <li>Bukit Mahkota</li>
              <li>Bangi Avenue</li>
              <li>Bangi Lama</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
