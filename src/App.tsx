import Counter from "@/components/counter";

import React, { memo } from "react";
import { useRoutes } from "react-router";
import routes from "@/router";

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">
        {useRoutes(routes)}
        {/* <Counter></Counter> */}
      </div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
