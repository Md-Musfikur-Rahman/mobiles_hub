import React from "react";

const ExtraPage = ({ params }) => {
  const pageName = params.extras;

  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-2xl font-bold capitalize">{pageName} Page</h1>
    </div>
  );
};

export default ExtraPage;
