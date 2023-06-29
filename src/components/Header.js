import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl lg:text-3xl font-semibold text-gradient">MD. AL AMIN</h2>
         <Link to="contact"> <button className="btn text-[14px] px-4 lg:btn-sm">Hire me</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
