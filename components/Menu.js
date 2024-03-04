import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Menu = () => {
  return (
    <div className=" w-[14%] min-h-[100vh] h-max flex flex-col justify-center items-center text-white">
      <Link
        to="/fakebill"
        className="p-4 bg-[#161D31] w-[96%] m-1 rounded-md hover:bg-[#1d2743]"
      >
        Bill Chuyển khoản
      </Link>
    </div>
  );
};

export default Menu;
