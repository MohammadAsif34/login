import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const logout = () => {
    alert("logout");
  };
  useEffect(() => {
    const currUser = localStorage.getItem("user");
    setIsLogin(currUser);
  }, [isLogin]);

  return (
    <section className="w-full h-20 bg-teal-600 select-none">
      <nav className="container h-full m-auto flex items-center text-white ">
        <div className="w-24 h-full border border-black sm:flex-1  md:flex-grow-0 flex justify-center items-center">
          logo
        </div>
        <div className="flex-1 sm:hidden lg:block">
          <ul className="mx-5 flex ">
            <li className=" px-6 py-2 hover:bg-white hover:text-teal-500 font-semibold capitalize rounded-md">
              item1
            </li>
            <li className=" px-6 py-2 hover:bg-white hover:text-teal-500 font-semibold capitalize rounded-md">
              item2
            </li>
            <li className=" px-6 py-2 hover:bg-white hover:text-teal-500 font-semibold capitalize rounded-md">
              item3
            </li>
            <li className=" px-6 py-2 hover:bg-white hover:text-teal-500 font-semibold capitalize rounded-md">
              item4
            </li>
            <li className=" px-6 py-2 hover:bg-white hover:text-teal-500 font-semibold capitalize rounded-md">
              item5
            </li>
          </ul>
        </div>

        {isLogin ? (
          <div className="flex  items-center relative">
            <div className="mx-4 text-xl">
              <span>mohamad asif</span>
            </div>
            <div
              className=""
              onClick={() => {
                if (isDropdown) setIsDropdown(false);
                else setIsDropdown(true);
              }}
            >
              <img
                src={
                  false
                    ? " "
                    : "https://images.pexels.com/photos/27219297/pexels-photo-27219297.jpeg"
                }
                alt=""
                className="w-12 h-12 rounded-full float-end cursor-pointer"
              />
              {isDropdown && (
                <div className="border border-teal-500 rounded-lg bg-white text-teal-600 absolute right-0 top-full">
                  <ul className="text-md py-2">
                    <li className="px-5 py-0 hover:bg-gray-300 cursor-pointer">
                      Profile
                    </li>
                    <li className="px-5 py-0 hover:bg-gray-300 cursor-pointer">
                      Dashboard
                    </li>
                    <li className="px-5 py-0 hover:bg-gray-300 cursor-pointer">
                      Setting
                    </li>
                    <li
                      className="px-5 py-0 hover:bg-gray-300 cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="login">
            <span className="ml-5 px-6 py-2 border rounded-full hover:bg-white hover:text-teal-500 ">
              Register
            </span>
            <span className="ml-5 px-6 py-2 border rounded-full hover:bg-white hover:text-teal-500 ">
              Sign up
            </span>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
