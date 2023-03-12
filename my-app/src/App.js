import List from "./components/List/List";
import React from 'react';
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 >
          Trello Dupe
        </h1>
        
      </header>
      <body>
        <div> 
          <List />
        </div>
      </body>
    </div>
  );
}

export default App;
