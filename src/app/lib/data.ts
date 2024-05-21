type ITask ={
    id:string;
    name:string;
    email:string
}

let tasks: ITask[] =[];


export const getTasks =()=> tasks

export const addTasks =(task:ITask)=>{
    tasks.push(task)
}
export const deleteTasks =(id:string)=>{
    tasks= tasks.filter((post)=> post.id !== id)
}
export const updateTasks =(id:string,name:string, email:string)=>{
    const task= tasks.find((post)=> post.id === id)

    if(task){
        task.name = name;
        task.email = email
    }
    else{
        throw new Error ("No Task Found")
    }
}

export const getById =(id:string)=>{
    return tasks.find((task)=>task.id === id)
}