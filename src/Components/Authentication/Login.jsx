import React, { useState } from "react";
import { nanoid } from 'nanoid';


export default function Login({loginHandler}){

    const [email,setEmail]=useState('');
    const [action,setAction]=useState("Log In");
    const [password,setPassword]=useState('');
    const [name,setName]=useState("");
    const [role,setRole]=useState("");
    const submitHandler=(e)=>{
        if(action==='Log In'){
            e.preventDefault();
            loginHandler(email,password)
            console.log("Form Submitted")
        }
        else if(action==='Sign Up'){
            const newUser={id:nanoid(),name:name,email:email,password:password,role:role,tasks:[{}],taskSummary:{activeCount: 0,
                completedCount: 0,
                failedCount: 0,
                newTaskCount: 0}};
            const existing=JSON.parse(localStorage.getItem(role));
            const updated=[...existing,newUser];
            localStorage.setItem(role,JSON.stringify(updated))
            setName("")
            setRole("")
            setEmail("")
            setPassword("")
            window.location.reload();

        }
    }
    return(
        <div className="w-screen h-screen bg-[#212121] flex justify-center items-center">
            <div className="border-zinc-400 border-2 rounded-2xl  min-w-md  text-white flex flex-col p-8 gap-10 backdrop-blur-sm bg-white/10">
                    <div className="w-full flex justify-evenly px-4" >
                        <button className={action==='Sign Up'?"border-2 rounded-lg px-3 py-1.5 bg-emerald-700":"border-2 rounded-lg px-3 py-1.5"}
                            onClick={()=>{setAction("Sign Up")}}
                        >Sign Up</button>
                        <button className={action==='Log In'?"border-2 rounded-lg px-3 py-1.5 bg-emerald-700":"border-2 rounded-lg px-3 py-1.5"}
                        onClick={()=>{setAction("Log In")}}
                        >Log In</button>
                    </div>
                    <form action="" className="flex flex-col gap-8 "
                        onSubmit={(e)=>{submitHandler(e)}}
                    >
                        
                        {action==='Sign Up'?<div><input type="text" placeholder="name"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        className=" border-2 border-amber-50 px-3 py-2.5 rounded-4xl w-full"/></div>:''}
                        
                        
                        <input required type="email" placeholder="email" 
                        className=" border-2 border-amber-50 px-3 py-2.5 rounded-4xl"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        
                        {action==='Sign Up'?<div><input type="text" placeholder="role"
                        value={role}
                        onChange={(e)=>{setRole(e.target.value)}} 
                        className=" border-2 border-amber-50 px-3 py-2.5 rounded-4xl w-full" /></div>:''}
                        
                        <input required type="password" name="" id="" placeholder="password" 
                        className="border-2 border-amber-50 px-3 py-2.5 rounded-4xl"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />

                        <button  className=" border-2 border-green-400 px-3 py-2.5 rounded-4xl min-w-1/3 mx-auto"
                            
                        >{action==='Sign Up'?"Sign Up":"Sign In"}</button>
                    </form>

            </div>

        </div>
    )
}
