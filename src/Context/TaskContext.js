import { createContext, useContext} from "react";


export const TaskContext=createContext({
    task:[{
        task_id:"1",
        title:"task-1",
        description:"",
        task_date:Date.now().toString(),
        active: false,
        completed: false,
        failed: false,
        new_task: false

    }],
    removeTask:(id)=>{},
    toggleComplete:(id)=>{},
    toggleFailed:(id)=>{}
})

export const TaskContextProvider=TaskContext.Provider;


export const useTaskContext=()=>{
    return useContext(TaskContext)
}