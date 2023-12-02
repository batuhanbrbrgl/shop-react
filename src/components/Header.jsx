import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag, BsList, BsHeart } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Logo from "../img/logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount,favoriteAmount } = useContext(CartContext);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    });
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      window.addEventListener("click", closeMenu);
    }

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);


  return (
    <header
      className={`${
        isActive ? "bg-none bg-white bg-opacity-30 py-6" : "bg-white  py-2 shadow-md"
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex container mx-auto flex-row items-center justify-between">
        <Link to={"/"}>
          <div>
            <img className="w-[110px] h-[80px]" src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="md:flex hidden flex-row gap-6 ">
          <Link to={"/woman"}>
            <div
              className={`text-black text-lg hover:text-opacity-60 duration-300 ${
                location.pathname === "/woman" ? "text-opacity-60 " : ""
              }`}
            >
              Woman
            </div>
          </Link>
          <Link to={"/man"}>
            <div
              className={`text-black text-lg hover:text-opacity-60 duration-300 ${
                location.pathname === "/man" ? "text-opacity-60 " : ""
              }`}
            >
              Man
            </div>
          </Link>
          <Link to={"/accessory"}>
            <div
              className={`text-black text-lg hover:text-opacity-60 duration-300 ${
                location.pathname === "/accessory" ? "text-opacity-60 " : ""
              }`}
            >
              Accessory
            </div>
          </Link>
          <Link to={"/electronics"}>
            <div
              className={`text-black text-lg hover:text-opacity-60 duration-300 ${
                location.pathname === "/electronics" ? "text-opacity-60 " : ""
              }`}
            >
              Electronics
            </div>
          </Link>
         
        </div>
        <div className="flex flex-row gap-6">
        <div className="md:hidden">
          <BsList className="h-6 w-6" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
              <Link
                to="/woman"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white ${
                  location.pathname === "/woman" ? "text-gray-500" : ""
                }`}
              >
                Woman
              </Link>
              <Link
                to="/man"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white ${
                  location.pathname === "/man" ? "text-gray-500" : ""
                }`}
              >
                Man
              </Link>
              <Link
                to="/accessory"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white ${
                  location.pathname === "/accessory" ? "text-gray-500" : ""
                }`}
              >
                Accessory
              </Link>
              <Link
                to="/electronics"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white ${
                  location.pathname === "/electronics" ? "text-gray-500" : ""
                }`}
              >
                Electronics
              </Link>
            </div>
          )}
          </div>
         
        <Link to={"/favorites"}>
        <div
          className="cursor-pointer items-center flex relative "
        
        >
          <BsHeart className="h-6 w-7" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
          {favoriteAmount}
          </div>
        </div>
        </Link>
        <div
          className="cursor-pointer items-center flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="h-6 w-7" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
           
            {itemAmount}
          </div>
        </div>
        
       
        
        </div>
       
       
      </div>
    </header>
  );
};

export default Header;
