import Counter from "@/components/counter";
import { TodoApp } from "@/components/todo-app";

import React, { memo } from "react";
import { useRoutes } from "react-router";
import routes from "@/router";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">
        {useRoutes(routes)}
        <Counter></Counter>
        <TodoApp></TodoApp>
      </div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
