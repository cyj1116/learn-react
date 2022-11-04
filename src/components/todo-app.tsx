import { useState, useRef } from "react";

interface ITodos {
  id: number;
  content: string;
}
interface TodoListProp {
  todos: ITodos[];
  deleteClick: (I: number) => void;
}

export function TodoApp() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [index, setIndex] = useState(1);

  const handleClick = () => {
    let k = { id: index, content: inputEl!.current!.value };
    setTodos([...todos, k]);
    setIndex(index + 1);
    inputEl!.current!.value = "";
  };

  const handleDelete = (index: number) => {
    const arr = todos.slice(0);
    const res = arr.filter((e) => e.id !== index);
    setTodos(res);
  };

  return (
    <div>
      <div>
        <input
          className="border-solid border-black border-[1px]"
          type="text"
          ref={inputEl}
        />
        <button
          className="border-solid border-black border-[1px]"
          onClick={() => handleClick()}
        >
          submit
        </button>
      </div>
      <div>
        <TodoList todos={todos} deleteClick={handleDelete}></TodoList>
      </div>
    </div>
  );
}

export function TodoList({ todos, deleteClick }: TodoListProp) {
  return (
    <div>
      {todos.map((e) => (
        <div key={e.id}>
          <span>{e.id}</span>
          <span>{e.content}</span>
          <button
            className="border-solid border-black border-[1px]"
            onClick={() => deleteClick(e.id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
