import React from 'react'
import { useState } from 'react'
import TodoForm from '../Components/Form/TodoForm'
import TodoList from '../Components/List/TodoList'


const Main = () => {
    const[todoTitle,setTodoTitle]=useState('')
    const[todoList,setTodoList]=useState([])
    const[isEditMode,setIsEditMode]=useState(false)
    const[update,setUpdate]=useState(null)
  return (
    <div className='container'>
        <TodoForm todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoList={todoList} setTodoList={setTodoList} isEditMode={isEditMode} setIsEditMode={setIsEditMode} update={update} setUpdate={setUpdate}/>
        <TodoList todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoList={todoList} setTodoList={setTodoList} isEditMode={isEditMode} setIsEditMode={setIsEditMode} update={update} setUpdate={setUpdate}/>
    </div>
  )
}

export default Main