import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseListPage from "./components/CourseListPage";
import CourseDetailScreen from "./components/CourseDetailScreen";
import StudentDashboard from "./components/StudentDashboard";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<CourseListPage />}></Route>
          <Route path="/coursedetailscreen/:id" element={<CourseDetailScreen />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
