import React from "react";

const Time = ({ data }) => {
  return (
    <div>
      <p className="text-base font-sans text-black">{data.id}</p>
      <p className="text-base font-sans text-black">{data.name}</p>
      <p className="text-base font-sans text-black">{data.email}</p>
    </div>
  );
};

export default Time;
