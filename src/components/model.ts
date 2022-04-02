import { stat } from "fs";
import { useReducer } from "react";

export interface Todo
{
    id: number;
    todo: string;
    isDone : boolean;
}

type Actions = 
    |{type: 'add', payload: string}
    |{type: 'remove', payload: number}
    |{type: 'done', payload: number}

// const TodoReducer = (state : Todo[], action: Actions) =>
// {
//     switch (action.type)
//     {
//         case 'add':
//             return [
//                 ...state,
//                 { id: Date.now(), todo: action.payload, isDone: false}
//             ]
//         case 'remove':
//             return  state.filter(()=> todo.id !== action.payload)
//         case 'add':
//             return state.map((todo) => todo.id !== action.payload ? { ...todo, isDone: !todo.isDone });
//     }
// }

// const ReducerExample = () =>
// {
//     const [state, dispatch] = useReducer(TodoReducer,[])
//   return (

//   )
// }

// export default ReducerExample