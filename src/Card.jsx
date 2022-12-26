import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-between sm:w-[45%] lg:w-[30%] border border-slate-900 py-2 px-4">
      <img src={data.image} />
      <h1>{data.description}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Card;
