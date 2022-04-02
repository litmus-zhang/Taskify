import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/taskContainer';

const App: React.FC = () =>
{
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTask = (e: React.FormEvent) =>
  {
    e.preventDefault();
    if (todo)
    {
      setTodos([...todos, {id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
   
  }
  console.log(todos);
  
  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask} />
      <TodoList todos={todos} setTodos={setTodos }/>
   

    </div>
  );
}

export default App;
