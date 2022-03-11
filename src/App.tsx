import React from "react";

import { useStoreState } from "easy-peasy";



function App() {
  const {name, course} = useStoreState<{name: string, course:string}>((store) => store);
  return (
    <div className="App">
        <h1>Hello world {name}</h1>
        <h1>This is {course}</h1>
    </div>
  );
}

export default App;
