import React from "react";
import { useAuthContext } from "../../Context/AuthenticationContext";

export default function(){
    const {loggedInUserData,logoutUser}=useAuthContext();
    return(
        <div className="px-5 py-5 flex justify-between items-end bg-[#1C1C1C]">
            <h1 className="text-2xl">Welcome to Office,<br/> <span className="text-4xl">{loggedInUserData.name}</span></h1>
            <div className="flex justify-end gap-5">
                {loggedInUserData.role==='employee'?<div className="border-2 bg-gray-600 min-w-10 py-2 px-2.5 rounded-2xl">Points: {loggedInUserData.taskSummary.completedCount*5}</div>:''}
                <button 
                    onClick={logoutUser}
                className="border-2 bg-red-600 rounded-2xl py-2 px-2.5">Log out</button>
            </div>
        </div>

    )
}