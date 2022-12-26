import React from "react";

const NewsLetter = ({ setOpenNews }) => {
  return (
    <div className="relative  h-screen w-screen bg-[#7B7B7B] flex items-center justify-center box-border">
      <form className="absolute border-2 border-sky-500 w-1/3 h-[16rem] bg-[lightgray] flex flex-col justify-between">
        <div className="flex items-center justify-between bg-slate-800 text-white p-4">
          <h1>Newsletter</h1>
          <button onClick={() => setOpenNews(false)}>
            <i className="fa-sharp fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="p-2 focus:outline-none mx-6"
        />

        <label htmlFor="v-code" className="absolute top-32 left-6">
          <img
            className="h-10 w-24"
            src="data:image/jpg;base64,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"
          />
        </label>
        <input
          type="text"
          id="v-code"
          placeholder="Verification Code"
          className="focus:outline-none p-2 mr-6 ml-32"
        />
        <button className="bg-[#E66F1E] p-2 m-4">Submit</button>
      </form>
    </div>
  );
};

export default NewsLetter;
// blur-sm backdrop-blur-lg