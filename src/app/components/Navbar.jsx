import React from "react";
import NavItem from "./Navitem";

function Navbar({ navItems }) {
  return (
    <nav className=" hidden md:flex md:gap-8 lg:flex flex-wrap lg:gap-16">
      {navItems.map((item, index) => (
        <NavItem key={index} text={item} />
      ))}
    </nav>
  );
}

export default Navbar;
