import TaskBoard from "../components/TaskBoard/TaskBoard";
import '../App.css'

const HomePage = () => {
  return (
    <>
      <div className="page-body">
        <TaskBoard />
      </div>
    </>
  );
}

export default HomePage