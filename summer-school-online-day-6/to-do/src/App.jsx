import { useEffect, useState } from 'react'

import './App.css'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'

function App() {
  const [todos, setTodos] = useState([])
  const [shownTodos, setShownTodos] = useState([])
  useEffect(() => {
    const todos = localStorage.getItem('todos')
    if (todos) {
      setTodos(JSON.parse(todos))
      setShownTodos(JSON.parse(todos))
    }
  },[])
  return (
    <>
    <div className='flex flex-col gap-10 items-center justify-center pt-10 h-screen'>
     <TodoInput setTodos={setTodos}/>
     <TodoList todos={todos} setTodos={setTodos} shownTodos={shownTodos} setShownTodos={setShownTodos}/>
    </div>
    </>
  )
}

export default App
