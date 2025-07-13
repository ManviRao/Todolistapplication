import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Todo from './Components/Todo'

function App() {
 const [tasks, setTasks] = useState([]);
  let handleaddtask = (obj) => {
    let newTasks = [...tasks, obj]
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    console.log(newTasks)
  }
  let handledeletetask=(task)=>{
    let filteredTasks = tasks.filter((t) => t.id !== task.id); 
    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }
  let handledeleteAllTasks = () => {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  }
  const updateTask = (updatedTask) => {
  const updatedTasks = tasks.map((t) =>
    t.id === updatedTask.id ? updatedTask : t
  );
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

  useEffect(() => {
    let tasklist = localStorage.getItem('tasks');
    if (!tasklist) {
      return;
    } setTasks(JSON.parse(tasklist));
  }, tasks)

  return (
    <>
     <Navbar/>
     <div className="flex flex-row-2 ">
    
        
              <div className="flex p-4 mt-6 min-h-screen bg-blue-900 ">
        <div className="w-[200px] h-[200px] bg-pink-100 p-4 border border-black  rounded-xl flex items-center justify-center">
          <div className='transform scale-25 cursor-pointer'><Todo tasks={tasks} handleaddtask={handleaddtask} handledeleteAllTasks={handledeleteAllTasks} handledeletetask={handledeletetask} updateTask={updateTask}/></div>
          
        </div>
      

      </div>
        <Todo tasks={tasks} handleaddtask={handleaddtask} handledeleteAllTasks={handledeleteAllTasks} handledeletetask={handledeletetask} updateTask={updateTask}/>
     </div>
    
    </>
  )
}

export default App
