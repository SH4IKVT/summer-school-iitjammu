import React from 'react'
import { MdOutlineDoneAll, MdOutlineRemoveDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function TodoItem({ todo, todos, setTodos }) {
    const handleDelete = () => {
        setTodos(e=>{
            const newTodos = todos.filter((item) => item.id !== todo.id)
            localStorage.setItem('todos', JSON.stringify(newTodos))
            return newTodos
        }
        )
    }
    const handleCheck = ()=>{
        console.log("checked");
        
        setTodos(e=>{
            const newTodos = todos.map(item=>{
                if (item.id === todo.id) {
                    return {id:item.id, data:item.data, isDone:!item.isDone}
                }
                return item
            })
            localStorage.setItem('todos', JSON.stringify(newTodos))
            return newTodos
        })
    }
    return (
        <div className={`flex items-center justify-between px-5 m-1  rounded-lg h-10 hover:border  font-semibold  ${todo.isDone? 'bg-green-500 hover:border-green-600 hover:bg-green-500/90':'bg-zinc-200 hover:border-zinc-300 hover:bg-zinc-300/70'}`}>
            <h1>{todo.data}</h1>
            <div className='flex items-center gap-2'>

            <button onClick={handleCheck} className={`cursor-pointer p-1.5 rounded-lg  ${todo.isDone? 'hover:bg-green-600/90':'hover:bg-zinc-300'}`}>
                {
                    !todo.isDone? <MdOutlineDoneAll /> : <MdOutlineRemoveDone />
                }
            </button>
            <button 
            onClick={handleDelete} 
            className={`cursor-pointer p-1.5 rounded-lg  ${todo.isDone? 'hover:bg-green-600/90':'hover:bg-zinc-300'}`}
            >
               <RxCross2 />

            </button>
                        </div>
        </div>
    )
}
