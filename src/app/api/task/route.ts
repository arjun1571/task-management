import { NextResponse } from "next/server";
import dbConnect from "../../libs/mongodb";
import Task from "../../models/task";

export const GET = async (req: Request, res: Response) => {
  await dbConnect();
  const task = await Task.find();
  return NextResponse.json({ task });
};

export const POST = async (req: Request, res: Response) => {
  const { name, email } = await req.json();
  await dbConnect();
  await Task.create({ name, email });
  return NextResponse.json({ message: "created" }, { status: 201 });
};

export const DELETE = async (request: any) => {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Delete successful" }, { status: 201 });
};
