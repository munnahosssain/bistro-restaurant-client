import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center lg:w-3/12 my-6">
      <h2>--~ {heading} ~--</h2>
      <p className="text-yellow-600 text-4xl border-y-4 border-[#E8E8E8] p-3 m-2">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
