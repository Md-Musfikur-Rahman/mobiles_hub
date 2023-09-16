import React from "react";
import { menuItemList } from "@/public/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto flex justify-between items-center my-3 py-3">
      <Link href="/">
        <h1 className="text-4xl font-bold text-blue-600">Site Logo</h1>
      </Link>

      <div className="flex gap-3">
        {menuItemList.map((item, index) => (
          <Link
            key={index}
            href={item.itemURL}
            className="bg-blue-200 rounded-full px-4 py-2 hover:bg-transparent hover:text-blue-900 border border-blue-200 duration-700"
          >
            {item.itemName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
