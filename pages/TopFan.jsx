"use client";

import { TopCard } from "@/components";
import { TopByFanPhone } from "@/utils";
import React, { useState, useEffect } from "react";

const TopFan = () => {
  const [phoneData, setPhoneData] = useState(null);

  const getTopFan = async () => {
    const result = await TopByFanPhone();
    setPhoneData(result.data);
  };

  useEffect(() => {
    getTopFan();
  }, []);

  if (!phoneData) {
    return <div className="w-4/5 mx-auto my-4 py-8">Loading...</div>;
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <h2 className="text-3xl font-bold my-6 text-center">
        Adored by Enthusiastic Fans
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

export default TopFan;
