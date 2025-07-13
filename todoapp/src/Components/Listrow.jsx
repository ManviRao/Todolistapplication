import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Listrow({ Task, deletetask, updateTask }) {
  const [check, setcheck] = useState(false);
  const [date2, setdate2] = useState("-");
  const [today, setToday] = useState(null);
  
  const handleChange2 = (e) => {
    const updatedTask = {
      ...Task,
      completed: e.target.checked,
      completedAt: e.target.checked ? new Date() : null,
    };

    updateTask(updatedTask);
  }
  useEffect(() => {
    setToday(new Date());
  }, [])
  useEffect(() => {
    console.log(check)
    console.log(date2)
  }, [check])
  return (

    <tr className=" bg-black shadow-md  width-full border-yellow-600 border-4">

      <td className="p-1 w-[10px] text-center">
        <input type="checkbox" checked={Task.completed} onChange={handleChange2} className="w-5 h-5 accent-yellow-500" />
      </td>
      <td className="p-8 whitespace-pre-wrap  text-left text-white text-[16px]">{Task.text}</td>
      <td className="p-4 w-1/2 text-white text-[16px] text-right">
        {today == null ? ("") : (
          <div className="flex flex-col items-end text-left">
            <span className='text-left'>
              {today.toLocaleDateString()}
            </span>
            <span>{today.toLocaleTimeString()}</span>

          </div>

        )}

      </td>
      <td className="p-4 w-1/2 text-white text-[16px] text-right">
         <div className="flex flex-col items-end text-left ">
    {Task.completedAt ? (
      <>
        <span className="text-left">
          {new Date(Task.completedAt).toLocaleDateString()}
        </span>
        <span className="text-left">
          {new Date(Task.completedAt).toLocaleTimeString()}
        </span>
      </>
    ) : (
      <>
        <span className="text-left">-</span>
        <span className="text-left"></span>
      </>
    )}
  </div>

      </td>
      <td className="p-4 text-right text-white text-[16px] text-right">{check ? "Completed" : "Pending"}</td>
      <td className="p-4 text-right text-white text-[16px] cursor-pointer" onClick={() => deletetask(Task)}>❌</td>
    </tr>
  )
}

export default Listrow