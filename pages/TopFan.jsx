"use client";

import { LoadingSpinner, TopCard } from "@/components";
import { TopByFanPhone } from "@/utils";
import { useState, useEffect } from "react";

const TopFan = () => {
  const [phoneData, setPhoneData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getTopFan = async () => {
    try {
      const result = await TopByFanPhone();
      setPhoneData(result.data);
    } catch (error) {
      console.error("Error fetching top fan phones:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopFan();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!phoneData) {
    return (
      <div className="w-4/5 mx-auto my-4 py-8 text-center text-gray-600">
        No data available
      </div>
    );
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <h2 className="text-3xl font-bold my-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        Adored by Enthusiastic Fans
      </h2>

      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {phoneData.phones.map((phone, i) => (
          <div
            key={i}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <TopCard {...phone} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFan;
