import React, { useState } from "react";
export default function ToDoApp() {
  const [inputData, setInputData] = useState();
  const [submitData, setSubmitData] = useState([]);

  const handelInputData = (e) => {
    setInputData(e.target.value);
    console.log(e.target.value);
  };
  const handelSubmitData = () => {
    setSubmitData((oldItems) => {
      return [...oldItems, inputData];
    });
    setInputData("");
  };

  const deleteItem = (id) => {
    console.log("clicked");
    setSubmitData((oldItems) => {
      return oldItems.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="todo-container">
      <h1 className="app-title">ToDo App</h1>
      <div className="input-container">
        <input
          type="text"
          className="add-item-input"
          onChange={handelInputData}
          placeholder="Add Your ToDo items... "
          value={inputData}
        />
        <button onClick={handelSubmitData} className="add-button">
          +
        </button>
      </div>
      <ol className="item-list">
        {submitData.map((value, index) => {
          return (
            <>
              <div className="flexBox">
                <button
                  className="deleteButton"
                  onClick={() => deleteItem(index)}
                >
                  X
                </button>
                <li
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  className="todo-item"
                >
                  {value}
                </li>
              </div>
            </>
          );
        })}
      </ol>
    </div>
  );
}
