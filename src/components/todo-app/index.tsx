import { useState, useRef, memo, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import './index.css'
const TodoApp = memo(() => {
  type Todo = typeof todos[0]
  
  const initial = {
    title: '',
    completed: false,
    id: null
  }

  const [editedTodo, setEditedTodo] = useState<{
    title: string
    completed: boolean
    id: number | null
  }>(initial)

  const [newTodo, setNewTodo] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, title: "创建项目", completed: true },
    { id: 2, title: "组件化开发", completed: false },
    { id: 3, title: "掌握JSX", completed: false },
    { id: 4, title: "掌握hooks", completed: false },
  ])

  const changeState = (e: ChangeEvent, currentTodo: Todo) => {
    currentTodo.completed = (e.target as HTMLInputElement).checked
    setTodos([...todos])
  }

  const changeNewTodo = (e: ChangeEvent) => setNewTodo((e.target as HTMLInputElement).value)

  const addTodo = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && newTodo) {
      setTodos([...todos, {
        id: todos.length + 1,
        title: newTodo, 
        completed: false
      }])
      setNewTodo('')
    }
  }

  const removeTodo = (todo: Todo) => setTodos(todos.filter((e) => e.id !== todo.id))

  // 双击触发
  const editTodo = (todo: Todo) => {
    // 克隆一个 todo 用于编辑
    // setBeforeEditCache(todo.title)
    setEditedTodo({ ...todo })
  }

  // 受控组件要求的事件处理
  const onEditing = (e:any) => {
    const title = e.target.value
    if (title) {
      setEditedTodo({ ...editedTodo, title: e.target.value})
    } else {
      // title 为空删除
      removeTodo(editedTodo as Todo)
    }
  }

  const onEdited = (e: any) => {
    // 监听 enter 
    if (e.code === "Enter") {
      if (editedTodo.title) {
        // 获取对应待办并更新
        const todo = todos.find((todo) => todo.id === editedTodo!.id);
        (todo as Todo).title = editedTodo.title;
        setTodos([...todos]);
      }
      setEditedTodo(initial);
    }
  }

  const cancelEdit = (e: any) => {
    setEditedTodo(initial);
  };



  return (
    <div className="App">
      <header>
        <h1>我的待办事项</h1>
      </header>
      <main>
        <section>
          <input 
            className="new-todo"
            autoFocus 
            autoComplete="off" 
            type="text" 
            placeholder="该学啥"
            value = {newTodo}
            onChange = {changeNewTodo}
            onKeyUp = {addTodo}
          />
          <h2>待办项</h2>
          <ul className="todo-list">
            {
              todos.map((todo) => 
              <li className={["todo", todo.completed ? "completed" : "", editedTodo.title && editedTodo.id === todo.id ? "editing" : ""].join(" ")} key={todo.id.toString()}>
                <div>
                  <input className="toggle" type="checkbox" checked={todo.completed} onChange={e => changeState(e, todo)}/>
                  <span onDoubleClick={() => editTodo(todo)}>{todo.title}</span>
                  <button className="destroy bg-gray-300" onClick={() => removeTodo(todo)}>X</button>
                </div>
                <input 
                  className="edit" 
                  type="text" 
                  value={editedTodo.title}
                  onChange={onEditing}
                  onKeyUp={onEdited}
                  onBlur={cancelEdit}
                />
              </li>)
            }
          </ul>
        </section>
      </main>
    </div>
  )
})

export default TodoApp;


