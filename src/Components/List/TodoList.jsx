import React from 'react'
import ListItem from './ListItem'
const TodoList = ({todoTitle,setTodoTitle,todoList,setTodoList,isEditMode,setIsEditMode,update,setUpdate}) => {
  return (
    <div>
        <ul className='list-group mt-5'>
            {
                todoList?.map(item=>(
                    <li className='list-group-item d-flex justify-content-center mt-3'><ListItem item={item} todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoList={todoList} setTodoList={setTodoList} isEditMode={isEditMode} setIsEditMode={setIsEditMode} update={update} setUpdate={setUpdate} /></li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList