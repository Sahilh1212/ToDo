import React, { useEffect, useState } from 'react'
import Task from './Component/Task'

const App = () => {
  const date = new Date().toLocaleDateString()
  const [currTime, setcurrTime] = useState(new Date())

  const [inputVal, setinputVal] = useState('')
  const [tasks, settasks] = useState(() => {
    const rawTodo = localStorage.getItem('Todo')
    if (!rawTodo) return []
    return JSON.parse(rawTodo)
  })

  const tick = () => {
    setcurrTime(new Date())
  }
  useEffect(() => {
    setInterval(() => tick(), 1000)
  }, [])

  const handelInput = (e) => {
    setinputVal(e.target.value)
  }

  const handelAddTask = () => {
    if (!inputVal || tasks.includes(inputVal)) {
      setinputVal('')
      return
    }
    settasks([...tasks, inputVal])
    setinputVal('')
  }
  localStorage.setItem('Todo', JSON.stringify(tasks))

  const handelDelete = () => {
    settasks([])
  }


  return (
    <div className='max-w-[500px] text-center p-3 mt-16'  >
      <h1 className='text-4xl font-bold'>Todo List</h1>
      <p className='my-4 font-semibold'>{date} - {currTime.toLocaleTimeString()}</p>
      <div className='flex h-9 mb-9 mt-7' >
        <input type="text" className='border rounded-s-xl text-black px-4 py-2 outline-none' onChange={handelInput} value={inputVal} />
        <button className='bg-sky-400 rounded-e-xl text-sm px-4' onClick={handelAddTask}>Add task</button>
      </div>
      <div id="task" className='flex flex-col gap-5'>
        {tasks.map((task, i) => {
          return (
            <ul keyI={i}>
              <Task task={task} time={currTime} allTask={tasks} updateTask={settasks} key={i} />
            </ul>
          )
        })}
      </div>
      <div className={`${tasks.length > 0 ? 'flex' : 'hidden'} items-center justify-center`}><button className={`bg-red-500 px-4 py-2 rounded-lg mt-6 `} onClick={handelDelete}>Clear All</button></div>
    </div>
  )
}

export default App