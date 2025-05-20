import React from "react";
import { useAuthContext } from "../../Context/AuthenticationContext";

export default function AllTask(){
    const {data}=useAuthContext();
    return(
        <div id="AllTask" className="flex flex-col p-5 mt-5 gap-4 h-50">
            <div className="flex justify-between bg-emerald-400 px-4 py-2 rounded-lg">
                <h2 className="w-1/5">Name</h2>
                <h2 className="w-1/5">New Tasks</h2>
                <h2 className="w-1/5">Active</h2>
                <h2 className="w-1/5">Completed</h2>
                <h2 className="w-1/5">Failed</h2>
            </div>

            {data.employeeData.map((emp)=>{
                return  <div className="flex justify-between border-green-600 border-4 px-4 py-2 rounded-lg" key={emp.id}>
                        <h2 className="w-1/5">{emp.name}</h2>
                        <h2 className="w-1/5">{emp.taskSummary.newTaskCount}</h2>
                        <h2 className="w-1/5">{emp.taskSummary.activeCount}</h2>
                        <h2 className="w-1/5">{emp.taskSummary.completedCount}</h2>
                        <h2 className="w-1/5">{emp.taskSummary.failedCount}</h2>

            </div>
            })}

            
      
        </div>
    )
}