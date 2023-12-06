import "./taskCard.css";
import { Task } from "../../definitions";

interface Props {
  taskDetails: Task;
  handleDragStart?: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
}

const TaskCard = ({ taskDetails, handleDragStart }: Props) => {
  return (
    <div
      key={taskDetails.id}
      draggable
      onDragStart={e => handleDragStart?.(e, taskDetails.id)}
      className="task"
    >
      <div className="task-header">
        <p className="task-title">{taskDetails.name}</p>
        <div className="task-header-details">
          <p className="task-type">{taskDetails.type}</p> &#183;
          <p className="task-type">{taskDetails.effortSpent} mins</p>
        </div>
      </div>
      <div className="task-body">{taskDetails.summary}</div>
      <div className="task-footer">
        <p>Assignee : {taskDetails.assignee}</p>
        <div className="duration">
          <p>{taskDetails.startDate}</p> &#183;
          <p>{taskDetails.endDate}</p>
        </div>
      </div>
      <div className={`priority ${taskDetails.priority.toLowerCase()}`}></div>
    </div>
  );
};

export default TaskCard;
