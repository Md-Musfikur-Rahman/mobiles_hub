import { MobileCard } from "@/components";
import { AppleData } from "@/public/apple";
import { MobileBrandData } from "@/public/constants";
import React from "react";

const SearchOption = () => {
  return (
    <div className="w-4/5 mx-auto my-11">
      <h2 className="text-xl font-bold">Filters</h2>
      <div className="flex justify-between my-4">
        <select name="brand" id="brand">
          {MobileBrandData.map((brand) => (
            <option key={brand.brand_id} value={brand.brand_slug}>
              {brand.brand_name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {AppleData.map((apple, i) => (
          <div key={i}>
            <MobileCard {...apple} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchOption;
