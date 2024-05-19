import React, { FunctionComponent } from "react";
import Icon from "../../core/Icon/Icon";
import Link from "next/link";
import Input from "../../core/Input/Input";

const Navbar: FunctionComponent = () => {
  return (
    <div className="flex justify-between w-full items-center px-10  py-2  shadow-sm bg-gray-100">
      <div className="flex relative w-60">
        <Input placeholder="Search" />
        <Icon name="search" className="absolute right-3 top-8" />
      </div>
      <div>
        <div className="flex items-center">
          <Icon name={"account_circle"} variant="outlined" />
          <p className="ms-3 text-xl font-semibold">Arjun Das</p>
        </div>
        <Link href={"/"} className="flex items-center mt-3">
          <p className="ms-3">Log Out</p>
          <Icon name={"logout"} variant="outlined" className="ms-3" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
