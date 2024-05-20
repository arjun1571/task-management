"use client";
import OverviewCart from "@/src/components/module/OverviewCart/OverviewCart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IItem {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const ProjectsOverview = () => {
  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
  });

  const handleView = (id: number) => {
    console.log("View project with id:", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit project with id:", id);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log("Successfully deleted project with id:", id);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>404</div>;

  return (
    <div className="grid grid-cols-2 gap-5">
      {data?.map((item: IItem) => (
        <OverviewCart
          key={item.id}
          item={item}
          onView={() => handleView(item.id)}
          onEdit={() => handleEdit(item.id)}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default ProjectsOverview;
