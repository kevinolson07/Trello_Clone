import List from "./components/List";
import Card from "./components/Card";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

//Pages and componets


function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route 
          path="/"
          element={<List />}
          />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;


// import React from "react";
 
// // We use Route in order to define the different routes of our application
// import { Route, Routes } from "react-router-dom";
 
// // We import all the components we need in our app
// import Navbar from "./components/navbar";
// import RecordList from "./components/recordList";
// import Edit from "./components/edit";
// import Create from "./components/create";
 
// const App = () => {
//  return (
//    <div>
//      <Navbar />
//      <Routes>
//        <Route exact path="/" element={<RecordList />} />
//        <Route path="/edit/:id" element={<Edit />} />
//        <Route path="/create" element={<Create />} />
//      </Routes>
//    </div>
//  );
// };
 
// export default App;