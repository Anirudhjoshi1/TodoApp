import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) =>{
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = (tag) =>{
   if(taskData.tags.some(item => item === tag)){
   const filterTags = taskData.tags.filter(item => item !== tag)
   setTaskData(prev =>{
    return {...prev , tags : filterTags}
   } )
   } else{
    setTaskData(prev => {
      return {...prev , tags: [...prev.tags , tag]}
    })
   }
  }

  console.log(taskData.tags)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubbmit = (e) => {
    e.preventDefault();
    setTasks(prev=>{
      return [...prev , taskData]
    })

    setTaskData({
    task: "",
    status: "todo",
    tags: [],
  });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubbmit}>
        <input
          value={taskData.task}
          name="task"
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Task"
          className="task_input"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag selected={checkTag("HTML")} tagName="HTML" selectTag={selectTag} />
            <Tag selected={checkTag("CSS")} tagName="CSS" selectTag={selectTag} />
            <Tag selected={checkTag("Javascript")} tagName="Javascript" selectTag={selectTag} />
            <Tag selected={checkTag("React")} tagName="React" selectTag={selectTag} />
          </div>
          <div>
            <select
              value={taskData.status}
              name="status"
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">TO DO</option>
              <option value="doing">DOING</option>
              <option value="done">DONE</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
