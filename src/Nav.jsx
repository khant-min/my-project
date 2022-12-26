// import { useState } from "react";
import SideNav from "./SideNav";

const Nav = ({ setOpenSideNav, setOpenLogin }) => {
  const sideNav = () => {
    setOpenSideNav(true);
    console.log("hello world");
  };

  return (
    <nav className="flex justify-between items-center relative text-white h-20 lg:h-fit bg-[#1C2533]">
      <img
        className="max-w-[10rem] h-fit ml-20 lg:ml-0"
        src="https://www.cambounlock.com/images/gallery/watermarks/WebLogo.png"
      />
      <ul className="hidden lg:flex lg:items-center">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Reseller Pricing</a>
        </li>
        <li>
          <a href="">Registration</a>
        </li>
        <li>
          <button
            className="bg-[#F3762A] px-6 py-2 rounded-sm hover:bg-[gray]"
            onClick={() => setOpenLogin(true)}
          >
            <i className="fa-sharp fa-solid fa-lock mr-3"></i>Login
          </button>
        </li>
      </ul>
      <div
        className="absolute text-2xl lg:hidden left-10 hover:cursor-pointer"
        onClick={sideNav}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
