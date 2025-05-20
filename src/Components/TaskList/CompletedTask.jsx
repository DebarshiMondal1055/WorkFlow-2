import React from "react";
import { useAuthContext } from "../../Context/AuthenticationContext";


export default function CompletedTask({props}){
    const {data,loggedInUserData,setUserData}=useAuthContext()
    const removeTask=(id)=>{
        const newTaskList=loggedInUserData.tasks.filter((task)=>task.task_id!==id)
        const updatedUserData={...loggedInUserData,tasks:newTaskList};
        const empData=data.employeeData;
        const updatedEmpData=empData.map((emp)=>emp.id===loggedInUserData.id?{...updatedUserData}:emp)
        localStorage.setItem("loggedInUser", JSON.stringify({
            role: "employee",
            logData: updatedUserData
        }));
        setUserData({...data,employeeData:updatedEmpData})
        localStorage.setItem('employee',JSON.stringify(updatedEmpData))
    }
    
    return(
        <div className="flex-shrink-0 border-2 w-[350px] h-100 bg-yellow-600 rounded-xl px-4 py-2 flex flex-col gap-5 items-start">
            <div className="w-full flex justify-between">
                <h2 className="text-xl ">{props.task_date}</h2>
                <button 
                onClick={()=>removeTask(props.task_id)}
                className="bg-gray-500 px-2.5 py-0.8 rounded-[50%]">X</button>
                </div>
            <h1 className="text-4xl font-medium">{props.title}</h1>
            <p>{props.description}</p>
            <div className="m-auto">Completed</div>
        </div>
    )
}