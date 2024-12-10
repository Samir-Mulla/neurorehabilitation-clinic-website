"use client";

import React from "react";
import Link from "next/link";

function NavItem({ text }) {
  const path = text === "Home" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`;
  
  return (
    <Link href={path}>
      <span className="text-sm lg:text-lg">{text}</span>
    </Link>
  );
}

export default NavItem;
