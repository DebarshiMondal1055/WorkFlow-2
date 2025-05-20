import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";



function Admin(){
    return(
        <>
            <Header/>
            <CreateTask/>
            <AllTask/>
        </> 
    )
}

export default Admin;