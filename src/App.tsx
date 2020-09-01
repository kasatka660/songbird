import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div className="App">
        <div className='container'>
            <Header/>
            <PageContent/>
        </div>

    </div>
  );
}

export default App;
