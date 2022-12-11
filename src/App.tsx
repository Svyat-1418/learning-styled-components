import React from 'react';
import './App.css';
import {SWrapper} from "./ui/components/SWrapper/SWrapper";
import {STitle} from "./ui/components/STitle/STitle";

function App() {
  return (
    <div className="App">
      <SWrapper>
        <STitle>
          I succeeded in that!
        </STitle>
      </SWrapper>
    </div>
  );
}

export default App;

