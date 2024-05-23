// OverviewCart component
import React from "react";
import { IItem } from "@/src/app/(root)/project-overview/page";

interface Props {
  item: IItem;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const OverviewCart: React.FC<Props> = ({ item, onView, onEdit, onDelete }) => {
  return (
    <div className="border p-5 rounded-md flex justify-between bg-lime-300">
      <div>
        <h2 className="font-semibold text-lg">Name: {item.name}</h2>
        <p className="font-semibold text-lg">Email: {item.email}</p>
      </div>
      <div className="flex items-center gap-3 font-semibold">
        <button
          className="cursor-pointer hover:text-slate-600"
          onClick={onView}
        >
          View
        </button>
        <button
          className="cursor-pointer hover:text-slate-600"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="cursor-pointer hover:text-slate-600"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OverviewCart;
