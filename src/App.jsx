import React, { useEffect, useState } from "react"
import Login from "./Components/Authentication/Login"
import Employee from "./Components/Dashboard/Employee"
import Admin from "./Components/Dashboard/Admin"
import { setLocalStorage } from "./Utils/LocalStorage"
import { AuthenticationContextProvider } from "./Context/AuthenticationContext"


function App() {
 
  const [user,setUser]=useState('')
  const [data,setData]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  
  useEffect(() => {
    if (!localStorage.getItem("employee")) {
      localStorage.setItem("employee", JSON.stringify([]));
    }
    if (!localStorage.getItem("admin")) {
      localStorage.setItem("admin", JSON.stringify([]));
    }
  }, []);
  
  useEffect(()=>{
    const employeeData=JSON.parse(localStorage.getItem('employee'));
    const adminData=JSON.parse(localStorage.getItem('admin'))
    setData({employeeData,adminData});
  },[])
  const setUserData=(data)=>{
    setData(data);
  }
  console.log(data)
  const setLogInData=(data)=>{
    setLoggedInUserData(data)
  }
  useEffect(()=>{
    if(data){
      const loggedInUser=JSON.parse(localStorage.getItem('loggedInUser'))
      if(loggedInUser){
        console.log(loggedInUser);
        setUser(loggedInUser.role)
        setLoggedInUserData(loggedInUser.logData)
      }
    }
  },[data])

  const  logoutUser=()=>{
    setUser('');
    localStorage.setItem('loggedInUser',null)
  }
  
  const loginHandler = (email, password) => {
    if (data) {
      const admin = data?.adminData.find((e) => email === e.email && password === e.password);
      if (admin) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin",logData:admin }));
        setUser("admin");
        setLoggedInUserData(admin);
        return;
      }
  
      const employee = data?.employeeData.find((e) => email === e.email && password === e.password);
      if (employee) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee",logData:employee }));
        setUser("employee");
        setLoggedInUserData(employee);
        return;
      }
  
      alert("Wrong email or password");
    }
  };
  


  return (
    <AuthenticationContextProvider value={{data,setUserData,loggedInUserData,logoutUser,setLogInData}}>
        {!user?<Login loginHandler={loginHandler}/> :null} 
        {user=='admin'?<Admin/>:(user=='employee'?<Employee/>:'')}
    </AuthenticationContextProvider>
    
  )
}

export default App;
