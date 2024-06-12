import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function toDoReducer(state, action) {
  switch(action.type){
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(toDoReducer, 0);

  return (
    <>
      <h1>To Do List</h1>
    </>
  )
}

export default App
