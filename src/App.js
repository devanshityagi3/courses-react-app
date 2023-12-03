import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseListPage from "./components/CourseListPage";
import CourseDetailScreen from "./components/CourseDetailScreen";
import StudentDashboard from "./components/StudentDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<CourseListPage />}></Route>
          <Route path="/coursedetailscreen/:id" element={<CourseDetailScreen />}></Route>
          <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
