import React, { useState } from 'react'
import List from './List'
import Additem from './Additem'
import { useEffect } from 'react'
function Todo({tasks,handleaddtask,handledeleteAllTasks,handledeletetask,updateTask}) {
  
  
  return ( 

    <div>
      <div className='bg-pink-100 shadow-md w-55 h-12 flex items-center justify-between px-4 m-7'>
        <div className='text-sm font-bold flex items-center justify-between px-14'>Add Item</div>

      </div>
      <Additem tasks={tasks} handleaddtask={handleaddtask} />
      <List Task={tasks} deletetask={handledeletetask} updateTask={updateTask}/>

          <div>

            <button className='bg-pink-100  rounded-xl shadow-md w-55 h-12  ml-6 text-sm font-bold flex items-center justify-between px-14 cursor-pointer text-red-500' onClick={handledeleteAllTasks}>
              Delete All Tasks
            </button> 
       
        </div>
     
      {/* Remove invalid for loop from JSX
      {tasks.map((task, index) => (
handledeletetask(task)
      ))} */}
      {/* here i have created delete task but not implement onclick button may if u want to complete the task  adding task to local storage is
       implemented,even i have written manual deleting of localstorage items but have commented for now
       */}
    </div>
  )
}

export default Todo