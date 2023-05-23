import './App.css';
import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}
function EventDemo() {
  let [todo, setTodo] = useState("");
  let [list, setList] = useState([]);

  let inputHandler = (e) => {
    console.log(e.target.value);
    let newValue = e.target.value;
    setTodo(newValue);
  };

  let addNewItem = () => {
    let newList = [todo, ...list];
    setList(newList);
    setTodo("");
  };

  let deleteTodo = (index) => {
    list.splice(index, 1);
    console.log(list);
    setList([...list]);
  };

  // UI
  return (
    <div>
      <h1 className="bg-success text-white p-3">Todo App </h1>

      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={inputHandler}
        Style="padding: 10px; background-color: skyblue;"
      />
      <input type="button" value="Add New Item" onClick={addNewItem} />

      <hr />

      {list.map((item, index) => (
        <div key={index} className="d-flex justify-content-between">
          <h1>{item}</h1>
          <input type="button" value="DEL" onClick={() => deleteTodo(index)} />
        </div>
      ))}
    </div>
  );
}

export default App;