import React, { FunctionComponent } from "react";
import Icon from "../../core/Icon/Icon";
import Link from "next/link";

interface NavLink {
  id: number;
  name: string;
  link: string;
  icon: string;
}

const Sidebar: FunctionComponent = () => {
  const navLinkData: NavLink[] = [
    { id: 1, name: "Projects Overview", link: "project-overview", icon: "" },
    { id: 2, name: "Task Management", link: "task-management", icon: "" },
    { id: 3, name: "Demo", link: "demo", icon: "" },
  ];

  return (
    <div>
      <div className="border-b shadow-sm">
        <h1 className="text-white my-8 mx-5 text-xl font-bold ">
          Task Management
        </h1>
      </div>
      <div>
        {navLinkData.map((navData) => (
          <Link
            href={navData?.link || "/"}
            key={navData.id}
            className="mt-10 flex items-center text-white mx-4"
          >
            <Icon name="layers" />
            <p className="ms-4">{navData?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
