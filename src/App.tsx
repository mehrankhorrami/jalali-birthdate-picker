import React from 'react';
import JalaliBirthdatePicker from "./JalaiBirthdatePicker";

function App() {
  return (
    <div className="App">
      <JalaliBirthdatePicker onChange={(data:string)=>console.log(data)} value="2024-09-08" />
    </div>
  );
}

export default App;
