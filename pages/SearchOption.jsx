"use client";

import { MobileCard } from "@/components";
import { MobileBrandData } from "@/public/constants";
import { PhonesListFetch } from "@/utils";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const SearchOption = () => {
  const [selectedBrand, setSelectedBrand] = useState("apple-phones-48");
  const [showPhone, setShowPhone] = useState([]);

  const handleBrandChange = (option) => {
    setSelectedBrand(option.value);
  };

  // const getPhone = async () => {};

  useEffect(() => {
    const getBrandPhone = async () => {
      if (selectedBrand) {
        try {
          const response = await PhonesListFetch(selectedBrand);
          const result = response.data.phones;
          setShowPhone(result);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getBrandPhone();
  });

  return (
    <div className="w-4/5 mx-auto my-11">
      <h2 className="text-3xl font-bold my-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        Seeking Something Different?
      </h2>

      <form className="w-full my-6">
        <Select
          name="brand"
          placeholder="Search by Brand names"
          options={MobileBrandData.map((brand) => ({
            value: brand.brand_slug,
            label: brand.brand_name,
          }))}
          value={selectedBrand}
          onChange={handleBrandChange}
          className="text-xl"
        />
      </form>

      <div className="grid sm:grid-cols-4 lg:grid-cols-6 gap-5">
        {showPhone.map((apple, i) => (
          <div key={i}>
            <MobileCard {...apple} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchOption;

{
  /* <select
          name="brand"
          id="brand"
          onChange={handleBrandChange}
          className=" bg-blue-100 px-4 py-2"
        >
          <option value="">Select a brand</option>
          {MobileBrandData.map((brand) => (
            <option key={brand.brand_id} value={brand.brand_slug}>
              {brand.brand_name}
            </option>
          ))}
        </select> */
}
