import React, { useState, useEffect } from "react";
import "./TaskBoard.css";
import TaskCard from "../TaskCard/TaskCard";
import { Task } from "../../definitions";
import { useDataContext } from "../../context/dataContext";
import Filters from '../Filter/FilterList';
import useTaskBoardData from "./useTaskBoardData";

const TaskBoard: React.FC = () => {
  const {
    state: { data, isLoading,searchFor,assignee,priority },
  } = useDataContext();
  const [tasks, setTasks] = useState<Task[]>(data);

  useEffect(() => {
    setTasks(data); 
  }, [data]);
 
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("id", id.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    const id = e.dataTransfer.getData("id");
    const updatedTasks = tasks.map(task => {
      if (task.id === Number(id)) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

const {
  filteredSearchData,
  readyTasks,
  readyTasksCount,
  inProgressTasks,
  inProgressTasksCount,
  testingTasksCount,
  doneTasks,
  doneTasksCount,
  testingTasks
} = useTaskBoardData({ tasks, searchFor, assignee, priority });

  return (
    <>
      <Filters />
      <div>
        {searchFor !== "" ? (
          <>
            <p>Your search</p>
            <div className="search-container">
              {filteredSearchData.map(task => (
                <TaskCard taskDetails={task} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="task-board">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <div
              className="column"
              onDrop={e => handleDrop(e, "Ready")}
              onDragOver={e => handleDragOver(e)}
            >
              <h3>Ready ({readyTasksCount})</h3>
              {readyTasks
                .map(task => (
                  <TaskCard
                    taskDetails={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
            </div>
            <div
              className="column"
              onDrop={e => handleDrop(e, "In Progress")}
              onDragOver={e => handleDragOver(e)}
            >
              <h3>In Progress ({inProgressTasksCount})</h3>
              {inProgressTasks
                .map(task => (
                  <TaskCard
                    taskDetails={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
            </div>
            <div
              className="column"
              onDrop={e => handleDrop(e, "Testing")}
              onDragOver={e => handleDragOver(e)}
            >
              <h3>Testing ({testingTasksCount})</h3>
              {testingTasks
                .map(task => (
                  <TaskCard
                    taskDetails={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
            </div>
            <div
              className="column"
              onDrop={e => handleDrop(e, "Done")}
              onDragOver={e => handleDragOver(e)}
            >
              <h3>Done ({doneTasksCount})</h3>
              {doneTasks
                .map(task => (
                  <TaskCard
                    taskDetails={task}
                    handleDragStart={handleDragStart}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TaskBoard;
