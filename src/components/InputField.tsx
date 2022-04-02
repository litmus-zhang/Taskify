import React, { useRef } from 'react'
import './styles.css'

interface Props
{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e: React.FormEvent) => void;
}
    const InputField: React.FC<Props> = ({ todo, setTodo , handleAddTask}) =>
    {
const inputRef = useRef<HTMLInputElement>(null)
        return (
            <form action="" className="input" onSubmit={(e) =>
            {
                handleAddTask(e);
                inputRef.current?.blur();
            }}>
                <input
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="input" placeholder="Add a Task" className='input_box' />
                <button className='input_submit' type='submit'>Go</button>
            </form>
        )
    }

    export default InputField;