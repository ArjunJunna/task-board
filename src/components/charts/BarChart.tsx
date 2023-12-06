import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Task } from "../../definitions";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { useDataContext } from "../../context/dataContext";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

interface TaskMetrics {
  totalTasks: number;
  peopleInvolved: number;
  totalEffortSpent: number;
}

const BarChart: FC = () => {
  const {
    state: { data: tasks },
  } = useDataContext();

  const taskMetrics: Record<string, Record<string, number>> = {};

  const calculateTaskMetrics = (tasks: Task[]): TaskMetrics => {
    let totalTasks = 0;
    const uniqueAssignees = new Set<string>();
    let totalEffortSpent = 0;

    tasks.forEach(task => {
      totalTasks++;

      const assignees = task.assignee
        .split(",")
        .map(assignee => assignee.trim());
      assignees.forEach(assignee => uniqueAssignees.add(assignee));

      totalEffortSpent += parseFloat(task.effortSpent) || 0;
    });

    return {
      totalTasks,
      peopleInvolved: uniqueAssignees.size,
      totalEffortSpent,
    };
  };

  const taskMetricsData: TaskMetrics = calculateTaskMetrics(tasks);

  tasks.forEach(task => {
    const { status, priority } = task;
    if (!taskMetrics[status]) {
      taskMetrics[status] = {
        Urgent: 0,
        High: 0,
        Medium: 0,
        Low: 0,
      };
    }
    taskMetrics[status][priority]++;
  });

  const labels: string[] = Object.keys(taskMetrics);
  const datasets = Object.keys(labels).map((_, index) => {
    const priorities = Object.keys(taskMetrics[labels[index]]);

    return {
      label: labels[index],
      data: priorities.map(priority => taskMetrics[labels[index]][priority]),
      backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },0.5)`,
    };
  });

  const data = {
    labels: Object.keys(taskMetrics),
    datasets,
  };

  return (
    <div
      
    >
      <p>Total Tasks: {taskMetricsData.totalTasks}</p>
      <p>People Involved: {taskMetricsData.peopleInvolved}</p>
      <p>Total Effort Spent: {taskMetricsData.totalEffortSpent} hours</p>
      <div style={{ width: "40rem", height: "50rem" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
