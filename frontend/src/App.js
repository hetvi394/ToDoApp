import ToDo from './components/ToDo';
import React, { useState, useEffect } from 'react';
import { getAllToDo, addToDo, updateTodo,deleteToDo } from './Utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsupdating] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const UpdateMode = (_id, text) => {
    setIsupdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo app</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add a new task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating ?
              () => updateTodo(toDoId, text, setToDo, setText, setIsupdating)
                : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? 'update' : 'Add'}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) =>
            <ToDo
              key={item._id}
              text={item.text}
              UpdateMode ={() => UpdateMode(item._id, item.text)}
              deleteToDo= {() => deleteToDo(item._id , setToDo)}
              />)}
        </div>
      </div>
    </div>
  );
}

export default App;
