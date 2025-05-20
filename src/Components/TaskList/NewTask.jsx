import React from "react";
import { useAuthContext } from "../../Context/AuthenticationContext";

export default function NewTask({props}){
      const {data, loggedInUserData,setUserData} = useAuthContext();
      const empData=data.employeeData;
      const toggleAccepted = (id) => {
        const updatedTasks = loggedInUserData.tasks.map((task) => {
          if (task.task_id === id) {
            return {
              ...task,
              active: true,
              completed: false,
              failed: false,
              new_task: false
            };
          }
          return task;
        });
    
        const newSummary = {
          activeCount: loggedInUserData.taskSummary.activeCount+1,
          completedCount: loggedInUserData.taskSummary.completedCount,
          failedCount: loggedInUserData.taskSummary.failedCount,
          newTaskCount: loggedInUserData.taskSummary.newTaskCount-1
        }
    
    
    
        const updatedUserData = {
          ...loggedInUserData,
          tasks: updatedTasks,
          taskSummary: newSummary,
        };
        const updatedEmpData=empData.map((emp)=>emp.id===loggedInUserData.id?{...updatedUserData}:emp)
        
        localStorage.setItem("loggedInUser", JSON.stringify({
          role: "employee",
          logData: updatedUserData
        }));
        setUserData({...data,employeeData:updatedEmpData})
        localStorage.setItem('employee',JSON.stringify(updatedEmpData))
      };
    
    return(
        <div className="flex-shrink-0 border-2 w-[350px] h-100 bg-red-500 rounded-xl px-4 py-2 flex flex-col gap-5 items-start">
                <div className="w-full flex justify-between">
                <h2 className="text-xl ">{props.task_date}</h2>
                {/* <button className="bg-gray-500 px-2.5 py-0.8 rounded-[50%]">X</button> */}
                </div>
                <h1 className="text-4xl font-medium">{props.title}</h1>
                <p>{props.description}</p>
                <button  
                onClick={()=>toggleAccepted(props.task_id)}
                className="border-2 border-black bg-green-500 rounded-2xl text-black py-2 px-2.5 mt-20" >Accept Task</button>
        </div>
    )
}