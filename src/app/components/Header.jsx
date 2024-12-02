"use client";

import React from "react";
import Navbar from "./Navbar";
import ContactButton from "./ContactButton";
// import Link from "next/link";

const navItems = ["Home", "About Us", "Treatments", "Blog"];

function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center px-14 py-3 w-full text-black bg-[#DDF8FE] border border-black border-solid max-md:px-5">
      <div className="font-extrabold text-sm lg:text-xl">Logo</div>
      <Navbar navItems={navItems} />
      <ContactButton text="Contact Us" href="/contact" />
    </header>
  );
}

export default Header;
