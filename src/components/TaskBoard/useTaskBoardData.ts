import { Task } from "../../definitions";
import {
  filterBySearch,
  filteredDataByAssignee,
  filteredDataByPriority,
} from "../../utils/filterFunctions";

interface BoardData {
  tasks: Task[];
  searchFor: string;
  assignee: string;
  priority: string;
}

const useTaskBoardData = ({
  tasks,
  searchFor,
  assignee,
  priority,
}: BoardData) => {
  const filteredSearchData = filterBySearch(tasks, searchFor);
  const filteredByAssignee = filteredDataByAssignee(tasks, assignee);
  const filteredData = filteredDataByPriority(filteredByAssignee, priority);
  const readyTasks = filteredData.filter(task => task.status === "Ready");
  const readyTasksCount = readyTasks.length;
  const inProgressTasks = filteredData.filter(
    task => task.status === "In Progress"
  );
  const inProgressTasksCount = inProgressTasks.length;
  const testingTasks = filteredData.filter(task => task.status === "Testing");
  const testingTasksCount = testingTasks.length;
  const doneTasks = filteredData.filter(task => task.status === "Done");
  const doneTasksCount = doneTasks.length;
  return {
    filteredSearchData,
    readyTasks,
    readyTasksCount,
    inProgressTasks,
    inProgressTasksCount,
    testingTasksCount,
    doneTasks,
    doneTasksCount,
    testingTasks
  };
};

export default useTaskBoardData;
