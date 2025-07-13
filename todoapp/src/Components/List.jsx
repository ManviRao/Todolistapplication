import React, { useEffect } from 'react'
import { useState } from 'react'
import Listrow from './Listrow';

function List({Task,deletetask,updateTask}) {

  return (
    <>
   <div className='bg-yellow-100 shadow-md border-b-5  border-black border-2  w-full h-12 flex items-center justify-between py-4 m-7 my-4'>
  <h2 className='text-lg font-bold ml-4'>Todo List</h2>
</div>

<div className="bg-yellow-200 p-6 rounded-md m-7 overflow-x-auto">
  <table className=" table-fixed w-full text-sm text-gray-700 border-collapse border-4 ">
    <thead className="bg-yellow-400 text-left">
      <tr>
        <th className="p-4 w-[60px]">Done</th>
        <th className="p-4 w-[180px]">Task</th>
        <th className="p-4 w-[120px] text-right">Date</th>
        <th className="p-4 w-[120px] text-right">Date2</th>
        <th className="p-4 w-[120px] text-right">Status</th>
         <th className="p-4 w-[90px]"></th>
      </tr>
    </thead>
    <tbody>
      {
      Task.length === 0? (
  <tr className='p-4 text-center w-full text-lg'>
    <td colSpan="6" className='text-white text-sm p-4 bg-black'>
      No tasks available</td></tr>
         
        
      )
    :(

      Task.map((task, index) => (
        <Listrow key={index} Task={task} deletetask={deletetask} updateTask={updateTask} />
      ))
    )
  }
    
   
      
    </tbody>
  </table>
</div>

  
    </>
  )
}

export default List