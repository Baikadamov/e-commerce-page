import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Cart } from "../cart/Cart";
const links = [
  {
    name: "Collections",
    to: "#",
  },
  {
    name: "Men",
    to: "/#",
  },
  {
    name: "Women",
    to: "/#",
  },
  {
    name: "About",
    to: "/#",
  },
  {
    name: "Contact",
    to: "/#",
  },
];

export const AppBar = ({ itemCount }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 px-64 sm:px-64 py-2.5 rounded ">
        <div className="container flex flex-wrap  items-center mx-auto">
          <Link to={"/"}>
            <div className="py-4 ">
              <h1 className="  text-3xl font-bold whitespace-nowrap dark:text-dark ">
                sneakers
              </h1>
            </div>
          </Link>
          <div className="w-full pl-8 pr-6 md:block md:w-auto mt-2">
            <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    className="block text-sm pr-4 pl-3 text-gray-700 rounded hover:bg-red-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-red dark:hover:bg-gray-700 dark:hover:text-red md:dark:hover:bg-transparent"
                    to={link.to}
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-auto pl-72 md:block md:w-auto mt-2   ">
            <ul className="flex flex-col  justify-end  p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="hover:bg-orange-300 rounded-2xl p-2"
                >
                  {itemCount > 0 && (
                    <p className="absolute -top-1 left-7 bg-orange-500 text-white rounded-xl w-6">
                      {itemCount}
                    </p>
                  )}
                  <img src="/img/icon-cart.svg" alt="" />{" "}
                </button>
                {open && <Cart itemCount={itemCount} />}
              </div>
              <button>
                <img
                  className="hover:border-orange-800 border-2 border-orange-500 rounded-3xl"
                  src="/img/image-avatar.png"
                  alt=""
                  width={40}
                />{" "}
              </button>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
      </nav>
    </>
  );
};
