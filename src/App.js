import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
      {/* {53:34} */}
    </div>
  );
}

export default App;
