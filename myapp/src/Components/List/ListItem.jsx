import React from 'react'

const ListItem = ({item,todoTitle,setTodoTitle,todoList,setTodoList ,isEditMode,setIsEditMode,update,setUpdate}) => {
    //deleteHandler
    const deleteHandler=(id)=>{
        const deletetodo = todoList.filter(item=>item.id!==id)
        setTodoList(deletetodo)

    }
    //edit
    const editHandler=(id)=>{
        const edit = todoList.find(item=>item.id===id)
        setIsEditMode(true)
        setUpdate(edit)
        setTodoTitle(edit.title)
    }
  return (
    <>
      <div class="ms-2 me-auto">
      <div class="fw-bold">{item.title}</div>
      
    </div>
    <span class="badge bg-primary rounded-pill btn m-1" onClick={()=>editHandler(item.id)}>Edit</span>
    <span class="badge bg-primary rounded-pill btn m-1" onClick={()=>deleteHandler(item.id)}>Delete</span>
    </>
  )
}

export default ListItem