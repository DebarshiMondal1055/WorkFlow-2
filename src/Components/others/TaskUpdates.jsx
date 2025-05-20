import React from "react";
import { useAuthContext } from "../../Context/AuthenticationContext";
export default function TaskUpdates(){
    const {loggedInUserData}=useAuthContext();
    return(
        <div className="flex  px-5 py-4 gap-5 justify-between">
            <div className="px-4 py-2 bg-red-500 w-[40%] h-25 rounded-2xl">
                <h1 className="text-2xl">{loggedInUserData?.taskSummary?.newTaskCount}</h1>
                <h2 className="text-xl">New Tasks</h2>
            </div>
            <div className="px-4 py-2 bg-yellow-600 w-[40%] h-25 rounded-2xl">
                <h1 className="text-2xl">{loggedInUserData?.taskSummary?.completedCount}</h1>
                <h2 className="text-xl">Completed Tasks</h2>
            </div>
            <div className="px-4 py-2 bg-blue-700 w-[40%] h-25 rounded-2xl">
                <h1 className="text-2xl">{loggedInUserData?.taskSummary?.activeCount}</h1>
                <h2 className="text-xl">Pending</h2>
            </div>
            <div className="px-4 py-2 bg-emerald-700 w-[40%] h-25 rounded-2xl">
                <h1 className="text-2xl">{loggedInUserData?.taskSummary?.failedCount}</h1>
                <h2 className="text-xl">Failed Tasks</h2>
            </div>
        </div>

    )
}