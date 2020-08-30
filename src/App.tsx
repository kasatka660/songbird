import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";
import CategoryList from "./assets/const/CategoryList";

const App: React.FC = () => {

  return (
    <div className="App">
        <div className='container'>
          <PageContent/>
        </div>

    </div>
  );
}

export default App;
