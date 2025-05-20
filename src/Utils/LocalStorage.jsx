const employee =[
  {
    id: 1,
    name: "Alice Johnson",
    email: "employee1@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        task_id: "task-1-0",
        title: "Submit report",
        description: "Prepare and submit the weekly sales report.",
        task_date: "2025-04-10",
        active: true,
        completed: false,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-1-1",
        title: "Team meeting",
        description: "Attend project kickoff meeting with the team.",
        task_date: "2025-04-09",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-1-2",
        title: "Client follow-up",
        description: "Call client for feedback on service.",
        task_date: "2025-04-08",
        active: false,
        completed: false,
        failed: true,
        new_task: false
      }
    ],
    taskSummary: {
      activeCount: 1,
      completedCount: 1,
      failedCount: 1,
      newTaskCount: 0
    }
  },
  {
    id: 2,
    name: "Brian Lee",
    email: "employee2@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        task_id: "task-2-0",
        title: "Update documentation",
        description: "Revise and update technical documents.",
        task_date: "2025-04-07",
        active: true,
        completed: false,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-2-1",
        title: "Bug fixing",
        description: "Fix high-priority bugs in the codebase.",
        task_date: "2025-04-06",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-2-2",
        title: "Code review",
        description: "Review pull requests from teammates.",
        task_date: "2025-04-05",
        active: false,
        completed: false,
        failed: true,
        new_task: false
      },
      {
        task_id: "task-2-3",
        title: "Design discussion",
        description: "Participate in UI/UX design session.",
        task_date: "2025-04-04",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      }
    ],
    taskSummary: {
      activeCount: 1,
      completedCount: 2,
      failedCount: 1,
      newTaskCount: 0
    }
  },
  {
    id: 3,
    name: "Carla Mendes",
    email: "employee3@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        task_id: "task-3-0",
        title: "Market research",
        description: "Research competitors in the market.",
        task_date: "2025-04-03",
        active: true,
        completed: false,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-3-1",
        title: "Presentation prep",
        description: "Create slides for product demo.",
        task_date: "2025-04-02",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-3-2",
        title: "Social media update",
        description: "Schedule LinkedIn posts for the week.",
        task_date: "2025-04-01",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      }
    ],
    taskSummary: {
      activeCount: 1,
      completedCount: 2,
      failedCount: 0,
      newTaskCount: 0
    }
  },
  {
    id: 4,
    name: "David Patel",
    email: "employee4@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        task_id: "task-4-0",
        title: "Inventory check",
        description: "Audit the current inventory levels.",
        task_date: "2025-03-31",
        active: true,
        completed: false,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-4-1",
        title: "Supplier meeting",
        description: "Meet supplier for pricing negotiation.",
        task_date: "2025-03-30",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-4-2",
        title: "Stock reorder",
        description: "Reorder low-stock items.",
        task_date: "2025-03-29",
        active: false,
        completed: false,
        failed: true,
        new_task: false
      },
      {
        task_id: "task-4-3",
        title: "Warehouse visit",
        description: "Inspect warehouse for compliance.",
        task_date: "2025-03-28",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-4-4",
        title: "Budget planning",
        description: "Draft next quarter's budget.",
        task_date: "2025-03-27",
        active: false,
        completed: false,
        failed: true,
        new_task: false
      }
    ],
    taskSummary: {
      activeCount: 1,
      completedCount: 2,
      failedCount: 2,
      newTaskCount: 0
    }
  },
  {
    id: 5,
    name: "Emily Zhang",
    email: "employee5@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        task_id: "task-5-0",
        title: "Security audit",
        description: "Conduct internal system security audit.",
        task_date: "2025-03-26",
        active: true,
        completed: false,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-5-1",
        title: "Access review",
        description: "Verify user access levels.",
        task_date: "2025-03-25",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-5-2",
        title: "Patch deployment",
        description: "Deploy security patches across servers.",
        task_date: "2025-03-24",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      },
      {
        task_id: "task-5-3",
        title: "Incident response drill",
        description: "Simulate security breach scenario.",
        task_date: "2025-03-23",
        active: false,
        completed: false,
        failed: true,
        new_task: false
      },
      {
        task_id: "task-5-4",
        title: "Policy update",
        description: "Update IT security policies.",
        task_date: "2025-03-22",
        active: false,
        completed: false,
        failed: false,
        new_task: true
      },
      {
        task_id: "task-5-5",
        title: "Firewall check",
        description: "Inspect and test firewall rules.",
        task_date: "2025-03-21",
        active: false,
        completed: true,
        failed: false,
        new_task: false
      }
    ],
    taskSummary: {
      activeCount: 1,
      completedCount: 3,
      failedCount: 1,
      newTaskCount: 1
    }
  }
]




const admin=[
    {
      name: "Rishi Mondal",
      id: 100,
      email: "admin@example.com",
      password: "123",
      role:'admin'
    }
]

export const setLocalStorage=()=>{
  localStorage.setItem('employee',JSON.stringify(employee))
  localStorage.setItem('admin',JSON.stringify(admin))
}

// export const getLocalStorage=()=>{
//     const employeeData=JSON.parse(localStorage.getItem('employee'))
//     const adminData=JSON.parse(localStorage.getItem('admin'))
//     return {employeeData,adminData}
// }