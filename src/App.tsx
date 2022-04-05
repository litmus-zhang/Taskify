import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/taskContainer';


const App: React.FC = () =>
{
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTask = (e: React.FormEvent) =>
  {
    e.preventDefault();
    if (todo)
    {
      setTodos([...todos, {id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
   
  }
  const onDragEnd = (result: DropResult) =>
  {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    let add, active = todos, complete = completedTodo;
    if (source.droppableId === 'TodoList')
    {
      add = active[source.index];
      active.splice(source.index, 1);
    } else
    {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === 'TodoList')
    {
      active.splice(destination.index, 0, add);
    } else
    {complete.splice(destination.index, 0, add);
    }
    
    setCompletedTodos(complete)
    setTodos(active)
}
  
  return (
    <DragDropContext onDragEnd={onDragEnd}
    >
      <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask} />
      <TodoList todos={todos} setTodos={setTodos}
      completedTodo={completedTodo}  setCompletedTodos={setCompletedTodos} />
   

    </div>
    </DragDropContext>
   
  );
}

export default App;
