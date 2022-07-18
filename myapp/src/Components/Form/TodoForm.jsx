import React from 'react'


const TodoForm = ({todoTitle,setTodoTitle,todoList,setTodoList,isEditMode,setIsEditMode,update,setUpdate}) => {
    //create handler
    const createHandler=(e)=>{
        e.preventDefault()
        if(todoTitle!==''){
            const newTodo={
                id:Date.now(),
                title:todoTitle
            }
            setTodoList([...todoList,newTodo])
            setTodoTitle('')

        }else{
            alert('Please Provide Todo Title')
        }
    }
    //create handler


    const updateHandler=(e)=>{
        e.preventDefault()
        update.title=todoTitle
        setIsEditMode(false)
        setTodoTitle('')
        setUpdate(null)
    }
  return (
    <div>
      <form className='form-group d-flex   mt-5 justify-content-center'>
        <input value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} type="text" className='form-control w-50' />
        <button onClick={(e)=>isEditMode===true?updateHandler(e):createHandler(e)} className='btn btn-success'>{isEditMode===true?'Update Todo':'Add Todo'}</button>
      </form>
    </div>
  )
}

export default TodoForm
