import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseListPage from "./components/course_list_page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
