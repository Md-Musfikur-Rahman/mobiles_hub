"use client";

import { MobileCard } from "@/components";
import React, { useState, useEffect } from "react";

const Latest = () => {
  const [phoneData, setPhoneData] = useState(null);

  const getLatest = async () => {
    const response = await fetch(`http://phone-specs-api.vercel.app/latest`);
    const result = await response.json();
    setPhoneData(result.data);
  };

  useEffect(() => {
    getLatest();
  }, []);

  if (!phoneData) {
    return <div className="w-4/5 mx-auto my-4 py-8">Loading...</div>;
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <h2 className="text-3xl font-bold my-4 text-center">{phoneData.title}</h2>

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
