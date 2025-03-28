"use client";

import { LoadingSpinner, MobileCard } from "@/components";
import { LatestPhone } from "@/utils";
import React, { useState, useEffect } from "react";

const Latest = () => {
  const [phoneData, setPhoneData] = useState(null);

  const getLatest = async () => {
    const result = await LatestPhone();
    setPhoneData(result.data);
  };

  useEffect(() => {
    getLatest();
  }, []);

  if (!phoneData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <h2 className="text-3xl font-bold my-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        Exploring the Latest Devices on the Market
      </h2>

      <div className="grid lg:grid-cols-6 sm:grid-cols-3 gap-5">
        {phoneData.phones.map((phone, i) => (
          <div key={i}>
            <MobileCard {...phone} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
