import React, { use, useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskCol from "./Components/TaskCol";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to place into ${status} and at the position ${position}`
    );

    if(activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard]
    const updatedTasks = tasks.filter((task , index) => index != activeCard)

    updatedTasks.splice(position , 0 , {
      ...taskToMove,
      status: status
    })

    setTasks(updatedTasks)


  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <main className="app_main">
        <TaskCol
          handleDelete={handleDelete}
          title="Todo"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskCol
          handleDelete={handleDelete}
          title="doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          setActiveCard={setActiveCard}
           onDrop={onDrop}
        />
        <TaskCol
          handleDelete={handleDelete}
          title="done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>


    </div>
  );
};

export default App;
