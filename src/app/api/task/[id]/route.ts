import { deleteTasks, getById, updateTasks } from "@/src/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("")[1];
    const Tasks = getById(id);
    if (!Tasks) {
      return NextResponse.json(
        { message: "Error", Tasks },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      { message: "OK", Tasks },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "OK", err },
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (req: Request) => {
  try {
    const id = req.url.split("")[1];
    const { name, email } = await req.json();
    const Tasks = updateTasks(id, name, email);
    return NextResponse.json(
      { message: "OK", Tasks },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "OK", err },
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("task/")[1];
    deleteTasks(id);
    return NextResponse.json(
      { message: "OK" },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "OK", err },
      {
        status: 500,
      }
    );
  }
};
