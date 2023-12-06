import './App.css'
//import TaskBoard from './components/TaskBoard/taskBoard'
import NavBar from './components/Navbar/NavBar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="page-container">
        <NavBar/>
        <AppRoutes/>
    </div>
  );
}

export default App
