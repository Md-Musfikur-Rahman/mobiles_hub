"use client";

import { LoadingSpinner, TopCard } from "@/components";
import { TopByInternetPhone } from "@/utils";
import React, { useState, useEffect } from "react";

const TopInternet = () => {
  const [phoneData, setPhoneData] = useState(null);

  const getTopInternet = async () => {
    const result = await TopByInternetPhone();
    setPhoneData(result.data);
  };

  useEffect(() => {
    getTopInternet();
  }, []);

  if (!phoneData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <h2 className="text-3xl font-bold my-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        Trending on the Internet
      </h2>

      <div className="grid lg:grid-cols-5  sm:grid-cols-3 gap-5">
        {phoneData.phones.map((phone, i) => (
          <div key={i}>
            <TopCard {...phone} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInternet;
