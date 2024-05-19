import React from "react";

interface OverviewCartProps {
  data: {
    name: string;
    title: string;
    description: string;
  };
}

const OverviewCart: React.FC<OverviewCartProps> = ({ data }) => {
  return (
    <div className="border p-5 rounded-md flex justify-between bg-lime-300">
      <div>
        <h2 className="font-semibold text-lg">Name: {data.name}</h2>
        <p className="font-semibold text-lg">Title: {data.title}</p>
        {/* <p className="font-semibold text-lg">Description: {data.description}</p> */}
      </div>
      <div className="flex items-center gap-3 font-semibold">
        <p className="cursor-pointer hover:text-slate-600">View</p>
        <p className="cursor-pointer hover:text-slate-600">Edit</p>
        <p className="cursor-pointer hover:text-slate-600">Delete</p>
      </div>
    </div>
  );
};

export default OverviewCart;
