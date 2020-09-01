import React from "react";
import "./App.css";
import PageContent from "./components/PageContent/PageContent";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <PageContent />
      </div>
    </div>
  );
};

export default App;
