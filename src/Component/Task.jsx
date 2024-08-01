import React, { useState } from 'react'
import { MdOutlineDone } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Task = ({ task, currTime, allTask, updateTask, key }) => {
    const [doneTask, setdoneTask] = useState(false)

    const handelDoneBtn = () => {
        setdoneTask(!doneTask)
    }

    const deleteHandler = (i) => {
        let copyTask = [...allTask]
        copyTask.splice(i, 1)
        updateTask(copyTask)
    }


    return (
        <>
            <div className="task flex flex-col gap-4 items-center" >
                <div className='flex justify-between h-10 bg-white items-center p-5 rounded-3xl text-black w-64'>
                    <p className={`text-black font-bold ${doneTask ? 'line-through' : ''}`}>{task}</p>
                    <div className="icon flex gap-4 text-white" >
                        <button className='border rounded-full bg-green-400' onClick={handelDoneBtn}><MdOutlineDone className='text-xl font-bold' /></button>
                        <button className='border rounded-full bg-red-500' onClick={() => deleteHandler(key)}><MdDeleteForever className='text-xl font-bold' /></button>
                    </div>
                </div>
                <p>{currTime}</p>
            </div>
        </>
    )
}

export default Task