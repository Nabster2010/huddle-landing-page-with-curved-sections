import React from "react";

const Header = () => {
  return (
    <header className=" flex justify-between items-center">
      <div className="w-36 md:w-auto">
        <img className="" src="/images/logo.svg" alt="" />
      </div>
      <button className="whitespace-nowrap hover:opacity-50 shadow-md transition bg-transparent rounded-full px-8 py-2 border border-Pink text-Pink">
        Try It Free
      </button>
    </header>
  );
};

export default Header;
