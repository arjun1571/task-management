"use client";
import Button from "@/src/components/core/Button/Button";
import Icon from "@/src/components/core/Icon/Icon";
import Input from "@/src/components/core/Input/Input";
import OverviewCart from "@/src/components/module/OverviewCart/OverviewCart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = yup.object({
  email: yup
    .string()
    .nullable()
    .required("Email is required")
    .transform((value: string) => (value ? value : null))
    .email("Invalid Email format")
    .max(100, "Work Email must not exceed 100 digits")
    .matches(/^\S*$/, "Spaces are not allowed in the email"),
  name: yup.string(),
});

const ProjectsOverview = () => {
  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/task");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
  });

  console.log("kkkk", data);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const handleView = (id: number) => {
    console.log("View project with id:", id);
  };

  const handleEdit = (id: number) => {
    console.log("Edit project with id:", id);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/task/${id}`);
      console.log("Successfully deleted project with id:", id);
      await ProjectsOverview();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>404</div>;

  const formSubmit = async (data: any) => {
    console.log(data);
    axios.post("http://localhost:3000/api/task/", data);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex relative w-60">
          <Input placeholder="Search" />
          <Icon name="search" className="absolute right-3 top-8" />
        </div>
        <div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="flex mx-auto">
                <div>
                  <h4 className="flex mx-auto">Add Task</h4>
                  <form
                    className="md:w-[400px] w-full"
                    onSubmit={handleSubmit(formSubmit)}
                  >
                    <Input
                      label="Name"
                      placeholder="Enter Name"
                      classNames="md:w-[400px] w-full"
                      registerProperty={register("name")}
                      errorText={errors.name?.message}
                      leftHelpText={"name"}
                      isRequired
                      type="text"
                      noMargin={true}
                    />
                    <Input
                      label="Email"
                      placeholder="Enter Email"
                      classNames="md:w-[400px] w-full my-6"
                      registerProperty={register("email")}
                      errorText={errors.email?.message}
                      leftHelpText={"checkbox"}
                      isRequired
                      type="text"
                      noMargin={true}
                    />

                    <Button
                      type="submit"
                      className="px-6 py-3 mb-4 bg-primary-500 flex justify-center font-medium text-white w-full mt-8"
                    >
                      Confirm
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
          <Button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            type="submit"
            className="px-6 py-3 mb-4 bg-primary-500 flex justify-center font-medium text-white  mt-8"
          >
            + Add New
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {data?.tasks?.map((item: IItem) => (
          <OverviewCart
            key={item.id}
            item={item}
            onView={() => handleView(item.id)}
            onEdit={() => handleEdit(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;
