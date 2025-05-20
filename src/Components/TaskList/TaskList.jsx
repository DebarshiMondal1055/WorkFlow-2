import React from "react";
import Accepted from "./Accpepted";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import { useAuthContext } from "../../Context/AuthenticationContext";

export default function TaskList(){
    const {loggedInUserData}=useAuthContext();
    return(
        <div  id="Tasklist" className=" w-full  px-6 mt-10 flex gap-10 flex-nowrap justify-start items-center overflow-x-auto">
            {loggedInUserData?.tasks?.map((task)=>{
                if(task.active) return <Accepted key={task.task_id} props={task}/>
                else if(task.new_task && new Date(task.task_date).valueOf()>=Date.now()) return <NewTask key={task.task_id} props={task}/>
                else if(task.completed) return <CompletedTask key={task.task_id} props={task}/>
                else if(task.failed) return <FailedTask key={task.task_id} props={task}/>
            })}
        </div>
    )
}