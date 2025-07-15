import React from 'react'

export default function TodoInput({setTodos}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.target[0].value) {
          return
          
        }
        setTodos((prev) =>{
          const newTodos = [...prev, {id:crypto.randomUUID(), data:e.target[0].value, isDone:false}]
          localStorage.setItem('todos', JSON.stringify(newTodos))
          return newTodos
        }) 
    }
  return (
    <div className='flex items-center justify-center flex-col space-y-3.5 w-screen'>
        <h1 className='text-3xl md:text-4xl font-extrabold'>Your To Dos</h1>
    <form onSubmit={handleSubmit} action="submit">
        <div className='flex items-center justify-center gap-2'>
      <input className='border border-black rounded-lg px-3 h-10 text-lg sm:w-md md:w-xl' type="text" placeholder='Enter your todo' />
     <button type='submit' className='bg-black hover:bg-zinc-900 border hover:border-zinc-800 text-white rounded-xl px-3 py-2  font-semibold'>Add Todo</button>
        </div>
    </form>
    </div>
  )
}
