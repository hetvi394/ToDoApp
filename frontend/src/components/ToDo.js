import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
function ToDo({ text, UpdateMode, deleteToDo }) {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit onClick={UpdateMode} className="icon" />
        <AiFillDelete onClick={deleteToDo} className="icon" />
      </div>
    </div>
  );
}

export default ToDo;
