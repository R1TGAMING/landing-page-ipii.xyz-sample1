import { useState } from "react";
import Logo from "../../public/Logo.png";

const Navbar = (props) => {
  const [Navbar, SetNavBar] = useState(false);

  return (
    <div className="navbar bg-slate-100 items-center  w-full shadow-lg shadow-gray-200">
      <div className="navbar-box flex flex-wrap p-5">
        <div className="logo flex items-center">
          <img src={Logo} className="w-10 h-10 mr-2 opacity-65" />
          <h1 className="font-bold text-3xl mr-6 text-gray-500 hover:text-gray-600">Ipii.xyz</h1>
        </div>
        {/* Menu for pc */}
        <ul className="hidden md:flex flex-wrap items-center  text-gray-400">
          <li>
            <a href="#" className="mr-6 hover:text-gray-500">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="mr-6 hover:text-gray-500">
              Harga
            </a>
          </li>
          <li>
            <a href="#" className="mr-6 hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Menu for mobile */}
        {/* Button */}
        <div className="md:hidden items-center ml-auto ">
          <button id="menu-toggle" class="text-gray-800 focus:outline-none" onClick={() => SetNavBar(!Navbar)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Menu */}
      {Navbar && (
        <div className="md:hidden">
          <div className="px-5 pt-2 pb-3 space-y-1 text-gray-400 text-bold">
            <a href="#" className="block  hover:text-gray-500">
              Beranda
            </a>
            <a href="#" className="block  hover:text-gray-500">
              Harga
            </a>
            <a href="#" className="block  hover:text-gray-500">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
