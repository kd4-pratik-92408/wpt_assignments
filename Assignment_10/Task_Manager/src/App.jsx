import NotFound from "./components/NotFound";
import Register from "./pages/Register";
import Task from "./pages/Task";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import TaskForm from "./components/TaskForm";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element=<Register /> />
        <Route path="/home" element=<Home /> />
        <Route path="/task" element=<Task /> />
        <Route path="/login" element=<Login /> />
        <Route path="/taskForm" element=<TaskForm /> />
        <Route path="/logout" element=<Logout /> />
        <Route path="/about" element=<About /> />
        <Route path="/register" element=<Register /> />
        <Route path="*" element=<NotFound /> />
      </Routes>
    </div>
  );
}

export default App;
