import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model';
import { AiOutlineEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai'
import './styles.css'


type Props ={
    todo: Todo;
    todos: Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) =>
{
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)




    const handleDelete = (id: number) =>
    {
        setTodos(todos.filter((todo)=> todo.id !== id ))
    }
    const handleDone = (id: number) =>
    {
        setTodos(todos.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ))
    }

    const handleEdit = (e: React.FormEvent, id: number) =>
    {
        e.preventDefault()
        setTodos(todos.map(() =>
        
            todo.id === id ? { ...todo, todo: editTodo } : todo
        ))
        setEdit(false)

    }
    const editRef = useRef<HTMLInputElement>(null)

useEffect(() => {
  editRef.current?.focus()
}, [edit])


  return (
      <form className='todos_single' onSubmit={(e)=>handleEdit(e, todo.id)}>
          {edit ? (
              <input value={editTodo}
                  ref={editRef}
                  className= 'todos_single-text'
                  onChange={ 
                  e => setEditTodo(e.target.value)
              }/>
          ) :
              todo.isDone ? (
                  <s className="todos_single-text"> {todo.todo}  </s>)
                  :
                  (<span className="todos_single-text">{todo.todo}</span>)
                
          }

          <div>
              <span className='icons' onClick={() =>
              {
                  if (!edit && !todo.isDone)
                  {
                      setEdit(!edit)
                  }
              }
              }
              ><AiOutlineEdit /></span>
              <span className='icons' onClick={()=> handleDelete(todo.id)}><AiFillDelete/></span>
              <span className='icons' onClick={()=> handleDone(todo.id)}><AiOutlineCheck/></span>
          </div>
    </form>
  )
}

export default SingleTodo