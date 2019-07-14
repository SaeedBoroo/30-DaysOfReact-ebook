import React from "react";
import "./App.scss";
import Header from "./components/header";
import Content from "./components/content";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            <Header />
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
