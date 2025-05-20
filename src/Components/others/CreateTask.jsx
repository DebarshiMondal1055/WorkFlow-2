import React, { useState } from "react";
import { setLocalStorage } from "../../Utils/LocalStorage";
import { nanoid } from 'nanoid';
import { useAuthContext } from "../../Context/AuthenticationContext";

export default function CreateTask(){

    const [title,setTitle]=useState('');
    const [date,setDate]=useState('')
    const [description,setDescription]=useState('')
    const [assign,setAssign]=useState()
    const {data,setUserData}=useAuthContext();
    const submitHandler=(e)=>{
        e.preventDefault();
        const newTask={task_id:nanoid(),title,description,task_date:date,active:false,completed:false,failed:false,new_task:true}
        const empData=data.employeeData;
        console.log(empData)
        empData.forEach(function(emp){
            if(emp.name.trim()===assign.trim()){
                emp.tasks.push(newTask)
                emp.taskSummary.newTaskCount+=1
                console.log(emp)
            }
        })
        setUserData({...data,employeeData:empData})
        localStorage.setItem('employee',JSON.stringify(empData))
        setTitle("");
        setDate("");
        setDescription("")
        setAssign("")
    }
    return(
        <div className=" px-5 py-2.5"> 
        <form action="" className="flex "
            onSubmit={submitHandler}
            >
            <div className="w-1/2 flex flex-col gap-10">
            <div>
                <h3>Task Title :</h3>
                <input type="text" 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                className=" bg-gray-500 rounded w-3/5 mt-2 px-2 py-1"/>
            </div>
            <div>
                <h3>Date</h3>
                <input type="date" name="" id="" 
                value={date}
                onChange={(e)=>{setDate(e.target.value)}}
                className="bg-gray-500 rounded w-3/5 mt-2 px-2 py-1"/> 
            </div>
            <div>
                <h3>Assign To :</h3>
                <input type="text" name="" id="" 
                value={assign}
                onChange={(e)=>{setAssign(e.target.value)}}
                className="bg-gray-500 rounded w-3/5 mt-2 px-2 py-1"/>
            </div>
            </div>
            
            <div className="w-1/2">
            <div>
                <h3>Description</h3>
                <textarea name="" id="" 
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                className="bg-gray-500 rounded-lg mt-2 px-2 py-1.5" rows="10" cols="50"></textarea>
            </div>
  
            <button type="submit" className="rounded-2xl border-white bg-red-400 w-2/5 mt-2 px-2 py-1">Create Task</button>
            </div>
        </form>
        </div>
    )
}