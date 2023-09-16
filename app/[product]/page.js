"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { PhoneSpecsFetch } from "@/utils";

const page = ({ params }) => {
  const phone = params.product;

  const [PhoneData, setPhoneData] = useState(null);

  const getPhone = async () => {
    const result = await PhoneSpecsFetch(phone);
    setPhoneData(result.data);
  };

  useEffect(() => {
    getPhone();
  }, []);

  if (!PhoneData) {
    return <div className="w-4/5 mx-auto my-4 py-8">Loading...</div>;
  }

  return (
    <div className="w-4/5 mx-auto my-4 py-8">
      <h1 className="text-center text-3xl font-bold capitalize mb-3">
        {PhoneData.phone_name} Details
      </h1>

      <div className="flex justify-center items-center mb-6">
        <Image
          src={PhoneData.thumbnail}
          alt={PhoneData.phone_name}
          width={150}
          height={300}
        />
      </div>

      <div className="flex gap-3 justify-around items-center mb-6">
        {PhoneData.phone_images.map((img, index) => (
          <Image key={index} src={img} alt="Image" width={150} height={300} />
        ))}
      </div>

      {PhoneData.specifications.map((info, index) => (
        <div key={index}>
          <h2 className="font-bold text-xl text-center capitalize my-4">
            {info.title}
          </h2>

          {info.specs.map((spec, i) => (
            <div
              key={i}
              className="flex justify-center items-center border hover:bg-gray-100"
            >
              <p className="flex-1 text-lg px-4 py-6">{spec.key}</p>
              <p className="flex-1 text-lg px-4 py-6 border-l border-r">
                {spec.val}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default page;
