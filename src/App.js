import React, { useState, useEffect } from 'react';
import './App.css';
import close_icon from './Img/close_icon.png'
import edit_icon from './Img/edit_icon.png'
import check_icon from './Img/check_icon.png'
import checked_icon from './Img/checked_icon.png'


function App() {

  const [taskChange, setTaskChange] = useState('')
  const [taskAdd, setTaskAdd] = useState([])
  const [taskGet, setTaskGet] = useState([])

  function Add_task(task) {
    taskAdd.push({ id: new Date(), value: task });
    setTaskAdd(taskAdd);
    localStorage.setItem("ToDoTasks", JSON.stringify(taskAdd));
    setTaskAdd(JSON.parse(localStorage.getItem("ToDoTasks")));
    document.getElementById("input_task").value = "";
  }

  useEffect(() => {
      if (JSON.parse(localStorage.getItem("ToDoTasks")) == null) {
        localStorage.setItem("ToDoTasks", JSON.stringify([]));
      }
      if (taskAdd.length === 0) {
        setTaskAdd(JSON.parse(localStorage.getItem("ToDoTasks")));
      }
  }, [taskAdd.length]);

  return (
    <div className="main">
      <div className="mainbox">
        <h1>My tasks:</h1>
        <div className="container">

          <input id="input_task" type="text" placeholder="task..."
            onChange={(e) => { setTaskChange(e.target.value) }}
          /* onFocus={(e) => e.placeholder ="kjhkjh"}
          onBlur={(e) => e.target.placeholder = 'task...'}  */
          >
          </input>
          <button id="btn_add_task" onClick={() => { Add_task(taskChange) }}>Add task</button>
          <ul>
            {taskAdd?.map((el) =>
              <li className="li_task">
                <div className="div_li">
                  <img id="check_icon" src={check_icon} alt="check_icon"></img>
                  <div className="div_p_task">
                    <p className="p_task">{el.value}</p>
                  </div>
                  <img id="edit_icon" src={edit_icon} alt="edit_icon"></img>
                  <img id="close_icon" src={close_icon} alt="close_icon"></img>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
