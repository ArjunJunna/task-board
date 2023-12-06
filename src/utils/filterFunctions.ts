import { Task } from "../definitions";

const filterBySearch = (data:Task[], searchFor:string) => {
  if (searchFor === "") {
    return data;
  } else {
    return data.filter(task =>
      task.name.toLowerCase().includes(searchFor.toLowerCase())
    );
  }
};

const filteredDataByAssignee = (data:Task[], selectedAssignee:string) => {
  if (selectedAssignee === "All Assignee") {
    return data;
  } else {
    return data.filter(task => selectedAssignee === task.assignee);
  }
};

const filteredDataByPriority = (data: Task[], selectedPriority: string) => {
  if (selectedPriority === "") {
    return data;
  }

  return data.filter(task => selectedPriority === task.priority);
};


export { filterBySearch, filteredDataByAssignee, filteredDataByPriority };
