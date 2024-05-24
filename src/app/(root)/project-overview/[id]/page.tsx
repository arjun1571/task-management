"use client";
import { fetchSinglePost } from "@/src/app/libs/task";
import Loading from "@/src/components/module/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const SinglePost: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["task", id],
    queryFn: () => fetchSinglePost(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>404</div>;
  return (
    <div className="flex mx-auto justify-center mt-5">
      <div className="border rounded-lg p-20 bg-red-950 text-white">
        <h4 className="text-2xl font-bold my-4">{data?.task?.name}</h4>
        <h4 className="text-2xl font-bold">{data?.task?.email}</h4>
      </div>
    </div>
  );
};

export default SinglePost;
