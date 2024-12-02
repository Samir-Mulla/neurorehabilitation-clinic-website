// ContactButton.js
import React from "react";
import Link from "next/link";

const ContactButton = ({ text, href, onClick, type = "button" }) => {
  // If `href` is provided, render a link
  if (href) {
    return (
      <Link
        href={href}
        className="text-sm lg:text-lg px-8 transition-all duration-300 ease-in-out py-2 bg-white border-r-2 hover:bg-[#81E5FB] font-medium border-black border-l-[5px] border-y-2 rounded-[36px] max-md:px-5"
      >
        {text}
      </Link>
    );
  }

  // Otherwise, render a button (for form)
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-sm lg:text-lg px-8 transition-all duration-300 ease-in-out py-2 bg-white border-r-2 hover:bg-[#81E5FB] font-medium border-black border-l-[5px] border-y-2 rounded-[36px] max-md:px-5"
    >
      {text}
    </button>
  );
};

export default ContactButton;
