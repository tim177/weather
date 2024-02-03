/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Sun from "./public/Sun";

function Navbar() {
  return (
    <div>
      <header className="bg-green-400 text-white shadow-lg hidden md:block">
        <div className="container mx-auto flex items-center h-24">
          <NavLink to="/" className="flex items-center justify-center">
            <Sun />
            <span className="ml-4 uppercase font-black">
              Weather <br /> forecast
            </span>
          </NavLink>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center"></ul>
          </nav>

          <NavLink
            to="/location"
            className="border border-white rounded-full font-bold px-8 py-2"
          >
            Your Location
          </NavLink>
          <a href="https://github.com/tim177" className="m-10 ">
            <BsGithub />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
