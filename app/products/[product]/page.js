"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { PhoneSpecsFetch } from "@/utils";
import { LoadingSpinner } from "@/components";

const Page = ({ params }) => {
  const phone = params.product;

  const [PhoneData, setPhoneData] = useState(null);

  useEffect(() => {
    const getPhone = async () => {
      const result = await PhoneSpecsFetch(phone);
      setPhoneData(result.data);
    };

    getPhone();
  }, [phone]);

  if (!PhoneData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="w-4/5 mx-auto py-4">
          <h1 className="text-3xl md:text-4xl font-bold capitalize bg-gradient-to-r from-[#541872] to-[#c62aac] bg-clip-text text-transparent text-center">
            {PhoneData.phone_name}
          </h1>
        </div>
      </div>

      <div className="w-4/5 mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <div className="bg-white/70 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src={PhoneData.thumbnail}
                alt={PhoneData.phone_name}
                width={400}
                height={600}
                className="object-contain w-full"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {PhoneData.phone_images.slice(0, 3).map((img, index) => (
                <div
                  key={index}
                  className="bg-white/70 p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${PhoneData.phone_name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="object-contain w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {PhoneData.specifications.slice(0, 3).map((info, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="font-bold text-xl capitalize py-4 px-6 bg-gradient-to-r from-[#541872] to-[#c62aac] text-white">
                  {info.title}
                </h2>
                <div className="divide-y divide-purple-100/30">
                  {info.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-3 sm:flex-row justify-between items-start sm:items-center p-4 hover:bg-white/50 transition-colors duration-200"
                    >
                      <p className="text-base font-medium text-[#541872]">
                        {spec.key}
                      </p>
                      <p className="text-base text-[#c62aac] font-medium mt-1 sm:mt-0">
                        {spec.val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PhoneData.specifications.slice(3).map((info, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="font-bold text-xl capitalize py-4 px-6 bg-gradient-to-r from-[#541872] to-[#c62aac] text-white">
                {info.title}
              </h2>
              <div className="divide-y divide-purple-100/30">
                {info.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-6 sm:flex-row items-start sm:items-center p-4 hover:bg-white/50 transition-colors duration-200"
                  >
                    <p className="text-base font-medium text-[#541872]">
                      {spec.key}
                    </p>
                    <p className="text-base text-[#c62aac] font-medium mt-1 sm:mt-0">
                      {spec.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
