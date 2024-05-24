/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import Button from "@/src/components/core/Button/Button";
import Icon from "@/src/components/core/Icon/Icon";
import Input from "@/src/components/core/Input/Input";
import OverviewCart from "@/src/components/module/OverviewCart/OverviewCart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPost, deletePost } from "../../libs/task";
import { useRouter } from "next/navigation";
import Loading from "@/src/components/module/Loading/Loading";
import Swal from "sweetalert2";
import { ToastService } from "@/src/@service/utils/toastr.service";

export interface IItem {
  _id: string;
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

interface IFormInput {
  email: string;
  name: string;
}

const schema = yup.object({
  email: yup
    .string()
    .nullable()
    .required("Email is required")
    .transform((value: string) => (value ? value : null))
    .email("Invalid Email format")
    .max(100, "Email must not exceed 100 characters")
    .matches(/^\S*$/, "Spaces are not allowed in the email"),
  name: yup.string().required("Name is required"),
});

const ProjectsOverview = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["task"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/task");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["task"]);
    },
  });

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePostMutation.mutate(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["task"]);
    },
  });

  const formSubmit = async (data: IFormInput) => {
    if (data) {
      createPostMutation.mutate({ id: 3, ...data });
      ToastService.success("Task created successful");
    }

    reset();
    setIsModalOpen(false);
  };

  const handleView = (id: string) => {
    router.push(`project-overview/${id}`, { scroll: false });
  };

  const handleEdit = (id: string) => {
    console.log("Edit project with id:", id);
    if (id) {
      setIsModalOpen(true);
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>404</div>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex relative w-60">
          <Input placeholder="Search" />
          <Icon name="search" className="absolute right-3 top-8" />
        </div>
        <div>
          {isModalOpen && (
            <dialog className="modal bg-black bg-opacity-40 w-full" open>
              <div className="modal-box">
                <form>
                  <button
                    type="button"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ✕
                  </button>
                </form>
                <div className="flex mx-auto">
                  <div className="w-full">
                    <h4 className="flex mx-auto">Add Task</h4>
                    <form className="my-10" onSubmit={handleSubmit(formSubmit)}>
                      <Input
                        label="Name"
                        placeholder="Enter Name"
                        classNames=" w-full"
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
                        classNames=" w-full my-6"
                        registerProperty={register("email")}
                        errorText={errors.email?.message}
                        leftHelpText={"email"}
                        isRequired
                        type="email"
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
          )}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 mb-4 bg-primary-500 flex justify-center font-medium text-white mt-8"
          >
            + Add New
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {data?.task?.map((item: IItem) => (
          <OverviewCart
            key={item._id}
            item={item}
            onView={() => handleView(item._id)}
            onEdit={() => handleEdit(item._id)}
            onDelete={() => handleDelete(item._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;
