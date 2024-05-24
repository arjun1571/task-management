"use client";
import React, { FunctionComponent } from "react";
import Icon from "../../core/Icon/Icon";
import Input from "../../core/Input/Input";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Navbar: FunctionComponent = () => {
  const router = useRouter();
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Log Out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push(`/`, { scroll: false });
        Swal.fire({
          title: "Log Out!",
          icon: "success",
        });
      }
    });
  };
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
        <div
          onClick={handleLogOut}
          className="flex items-center mt-3 cursor-pointer"
        >
          <p className="ms-3">Log Out</p>
          <Icon name={"logout"} variant="outlined" className="ms-3" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
