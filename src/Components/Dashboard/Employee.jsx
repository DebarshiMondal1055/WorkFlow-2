import React, { useEffect, useState } from "react";
import Header from "../others/Header";
import TaskUpdates from "../others/TaskUpdates";
import TaskList from "../TaskList/TaskList";
import { useAuthContext } from "../../Context/AuthenticationContext";
import { TaskContextProvider } from "../../Context/TaskContext";

export default function Employee() {
  return (

      <div>
      <Header />
      <TaskUpdates />
      <TaskList />
      </div>
  );
}
