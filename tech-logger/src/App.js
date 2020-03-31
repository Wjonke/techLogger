import React, { useEffect } from "react";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";

const App = () => {
  useEffect(() => {
    //initialize Materialize's JS automatically like modals etc
    M.AutoInit();
  });

  return (
    <div>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <Logs />
      </div>
    </div>
  );
};

export default App;
