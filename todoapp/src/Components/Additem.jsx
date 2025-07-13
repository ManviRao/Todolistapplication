import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
function Additem({ handleaddtask }) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [taskText, setTaskText] = useState('');

    useEffect(() => {
        console.log('Date:', selectedDate);
        console.log('Time:', selectedTime);
    }, [selectedDate, selectedTime]);

    const handleAddTask = () => {
        {
            const date = new Date();
            const currDate = date.toISOString().split('T')[0]; // Get current date
            const currTime = date.toTimeString().split(' ')[0]; // Get current time in HH:MM:SS format
            if (!taskText.trim()) {
                alert('Please enter a task description.');
                return;
            }
            if (!selectedDate) {
                alert('Please select a date.');
                return;
            }
            if (!selectedTime) {
                alert('Please select a time.');
                return;
            }

            let newTask = {
                id:uuidv4(),
                text: taskText,
                date: selectedDate,
                time: selectedTime,
                completed: false,
                completedAt: null,
            };
            if (selectedDate < currDate || (selectedDate === currDate && selectedTime < currTime)) {
                Swal.fire({
                    title: "Are you sure?",
                    text: "This task is in the past. Do you want to proceed?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "black",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, proceed"

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "saved!",
                            icon: "success"
                        });

                        console.log('New Task:', newTask);
                        handleaddtask(newTask);
                        setTaskText('');
                        setSelectedDate('');
                        setSelectedTime('');

                        return;

                    } else {
                        return;
                    }
                });
            } else {
                Swal.fire({
                    title: "saved!",
                    icon: "success",
                    showConfirmButton:false,
                    timer:1500
                });
                // Here you would typically send the newTask to your backend or state management
                console.log('New Task:', newTask);
                handleaddtask(newTask);
                // Reset the input fields
                setTaskText('');
                setSelectedDate('');
                setSelectedTime('');

                return;
            }




        }

    }
    return (
        <div className='flex flex-row items-center bg-yellow-200 shadow-md w-full min-h-[160px] gap-4 px-4 py-4 m-7 rounded-md'>
            <div className=" w-full min-h-[160px] flex flex-col gap-4 ">

                {/* Task Input */}
                <textarea
                    placeholder="Add a new task with full description here..."
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    className="w-full min-h-[100px] p-4 border border-gray-300 rounded-md resize-none text-base placeholder:text-gray-500"
                    onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                />


                {/* Date & Time Inputs */}
                <div className="flex gap-4 flex-wrap">
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md text-base"
                    />
                    <input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md text-base"
                    />
                </div>
            </div>
            {/* Add button at top left */}
            <div >
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md" onClick={() => handleAddTask()}>
                    Add
                </button>
            </div>


        </div>
    );
}

export default Additem;
