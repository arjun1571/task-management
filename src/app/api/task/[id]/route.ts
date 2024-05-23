import { deleteTasks, getById, updateTasks } from "@/src/app/lib/data";
import dbConnect from "@/src/app/libs/mongodb";
import Task from "@/src/app/models/task";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: any) => {
  const { id } = params;
  await dbConnect();
  const task = await Task.findOne({ _id: id });
  return NextResponse.json({ task }, { status: 200 });
};

export const PUT = async (request: any, { params }: any) => {
  const { id } = params;
  const { name, email } = await request.json();
  await dbConnect();
  await Task.findByIdAndUpdate(id, { name, email });
  return NextResponse.json(
    { message: "Task update successful" },
    { status: 200 }
  );
};
