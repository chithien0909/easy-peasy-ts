import React, {ChangeEvent, ChangeEventHandler, EventHandler, useState} from "react";

import {useStoreActions, useStoreState} from "easy-peasy";
import {StoreModel} from "./store/models";



function App() {
  const {name, course} = useStoreState<StoreModel>((store) => store);
    const { setName } = useStoreActions<StoreModel>((store) => store)

  const [inputName, setInputName] = useState("");

  const handleChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
      setInputName(e.target.value);
  }

  const handleSubmit = () => {
    setName(inputName);
  }

  return (
    <div className="App">
      <h1>Hello world {name}</h1>
      <p>This is {course}</p>
      <input
        value={inputName}
        onChange={handleChangeInputName}
        placeholder="Change the name"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
