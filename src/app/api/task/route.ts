import { NextResponse } from "next/server";
import { addTasks, getTasks } from "../../lib/data";

export const GET = async (req: Request, res: Response) =>{
    try{
        const tasks = getTasks()
        return NextResponse.json({message: 'OK', tasks},{
            status:200
        })
    }catch(err){
        return NextResponse.json({message: 'Error', err},{
            status: 500
        })
    }
   }
   
   export const POST = async (req: Request, res: Response) =>{
    const {name,email} = await req.json()
    try{
        const tasks = {name,email,date:new Date(),id:Date.now().toString()}
        addTasks(tasks)
        return NextResponse.json({message: 'OK', tasks},{
            status:201
        })
    }catch(err){
        return NextResponse.json({message: 'Error', err},{
            status: 500
        })
    }
       
      }