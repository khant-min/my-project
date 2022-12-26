const SideNav = ({ setOpenSideNav }) => {
  return (
    <nav className="fixed w-[20rem] min-h-full bg-[#7B7B7B] z-10 ">
      <div className="">
        <div className="p-4 bg-[#F3762A] min-w-[100%] ">
          <button onClick={() => setOpenSideNav(false)}>
            <i className="fa-sharp fa-solid fa-arrow-left text-white"></i>
          </button>
          <h2 className="uppercase text-white font-bold mb-4">
            www.cambounlock.com
          </h2>
          <div className="flex">
            <button className="w-[60%] py-2 text-white bg-slate-900 rounded-sm p-2 btn">
              Registration<i className="fa-regular fa-greater-than"></i>
            </button>
            <button className="w-[40%] py-2 bg-white p-2 btn">
              Login<i className="fa-regular fa-greater-than"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start mx-4 text-sm mt-4">
          <button className="uppercase ">reseller pricing</button>
          <button className="btn min-w-full">
            IMEI Service / iCloud / Unlock / Check
            <i className="fa-regular fa-greater-than"></i>
          </button>
          <button className="btn min-w-full">
            Activation | Box Dongle | Credits | Games
            <i className="fa-regular fa-greater-than"></i>
          </button>
          <button className="btn min-w-full">
            Remotely Services<i className="fa-regular fa-greater-than"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
