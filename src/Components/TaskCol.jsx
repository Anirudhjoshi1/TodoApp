import React from "react";
import "./TaskCol.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskCol = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop
}) => {
  return (
    <>
      <section className="task_column">
        <h2 className="task-col-heading">
          <img className="task-col-icon" src={icon} alt="todo" />
          {title}
        </h2>

         <DropArea onDrop = {()=> onDrop(status , 0)} />

        {tasks.map((task, index) => {
          if (task.status === status) {
            return (
              <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />
              <DropArea onDrop = {()=> onDrop(status , index + 1)} />
              </React.Fragment>
            );
          }
          return null;
        })}
      </section>
    </>
  );
};

export default TaskCol;
