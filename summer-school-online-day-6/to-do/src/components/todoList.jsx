import React, { useEffect } from 'react'
import TodoItem from './todoItem'

export default function TodoList({ shownTodos, setShownTodos, todos, setTodos }) {
    const handleFilter = (e) => {
        const filter = e.target.value
        if (filter === 'all') {
            setShownTodos(todos)
        } else if (filter === 'active') {
            setShownTodos(todos.filter((todo) => !todo.isDone))
        } else if (filter === 'completed') {
            setShownTodos(todos.filter((todo) => todo.isDone))
        }
    }
    useEffect(() => {
        if (todos) {
            setShownTodos(todos)
        }
        
    },[todos])
    return (
        <div>
            <div className="flex flex-wrap items-center justify-center mb-6 gap-4 md:gap-10">
                {/* <h1 className="text-xl md:text-2xl font-extrabold text-zinc-900">To Dos</h1> */}

                <div className="flex items-center gap-1">
                    <label
                        htmlFor="filter"
                        className="font-medium text-zinc-700"
                    >
                        Filter:
                    </label>
                    <select
                        onChange={handleFilter}
                        className="focus:outline-none text-center p-1 border border-zinc-900 rounded-lg"
                        name="filter"
                        id="filter"
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
            <div className='bg-zinc-100 rounded-xl px-2 py-6 w-[90vw] md:w-[60vw] h-[55vh] overflow-y-auto'>
                {
                    shownTodos.length===0?
                    <div className='flex items-center justify-center h-full'>
                    <h1 className='text-center text-base md:text-lg font-bold text-zinc-500'>No to do's found try changing the filter or add a new one </h1>
                    </div>
                    :
                    shownTodos.map((todo, index) => {
                        return (
                            <TodoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
                        )
                })
                }
            </div>
        </div>
    )
}
