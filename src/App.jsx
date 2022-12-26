import Nav from "./Nav";
import ImgSec from "./ImgSec";
import Login from "./Login";
import SideNav from "./SideNav";
import Cards from "./Cards";
import FootSec from "./FootSec";
import NewsLetter from "./NewsLetter";
import { useState } from "react";

const App = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openNews, setOpenNews] = useState(false);

  return (
    <div className="min-h-screen h-[2000px] min-w-full">
      <header className="border border-slate-600">
        {openSideNav && <SideNav setOpenSideNav={setOpenSideNav} />}
        <Nav setOpenSideNav={setOpenSideNav} setOpenLogin={setOpenLogin} />
      </header>
      {openLogin && <Login setOpenLogin={setOpenLogin} />}
      {/* <ImgSec /> */}
      <Cards />
      <FootSec setOpenNews={setOpenNews} />
      {openNews && <NewsLetter setOpenNews={setOpenNews} />}
    </div>
  );
};

export default App;

// https://www.cambounlock.com/?fbclid=IwAR1RHy8_fQn8rlu0HukBQ15GPJmxJsf_MwHViJI2nKmA7bSesorPmP650nk
