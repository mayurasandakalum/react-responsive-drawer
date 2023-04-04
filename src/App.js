import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./screen/Main";

const App = () => {
  return (
    <div>
      <Router>
        <Main />
      </Router>
    </div>
  );
};

export default App;
