const Login = ({ setOpenLogin }) => {
  return (
    <div>
      {/* className="absolute z-10 w-full h-full bg-[#0e0e0edd] " */}
      <div className="border border-slate-900 my-10 max-w-sm m-auto rounded-md ">
        <form className="flex flex-col justify-between gap-4 relative">
          <nav className="bg-[#1C2533] text-white flex justify-between p-4 items-center">
            <h2>Login to Your Account</h2>
            <button onClick={() => setOpenLogin(false)}>
              <i className="fa-sharp fa-solid fa-xmark text-lg"></i>
            </button>
          </nav>

          <div className="mx-auto relative">
            <i className="fa-sharp fa-solid fa-user absolute top-3 left-4"></i>
            <input
              className="border border-[lightgray] pl-12 px-20 py-2 focus:outline-none"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="mx-auto relative">
            <i className="fa-sharp fa-solid fa-lock mr-[-6px] absolute top-3 left-4"></i>
            <input
              className="border border-[lightgray] pl-12 px-20 py-2 focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <a href="" className="absolute right-8 top-44 text-sm">
            Forgot Password?
          </a>
          <button className="bg-[#F3762A] text-white p-2.5 m-4 rounded-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
