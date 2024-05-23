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
    <div>
      <h1>{data?.task?.name}</h1>
    </div>
  );
};

export default SinglePost;
