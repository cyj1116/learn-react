import React, { memo } from "react";
import TodoApp from "@/components/todo-app";
const Home = memo(() => {
  return (
    <div>
      Home
      <TodoApp></TodoApp>
    </div>
  )
});

export default Home;
