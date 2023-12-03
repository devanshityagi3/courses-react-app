import { useDispatch, useSelector } from "react-redux";
import SearchCourseList from "./SearchCourseList";
import { useEffect, useState } from "react";
import courseModel from "../db/data";
import { setStudentData } from "../slice/StudentSlice";


const CourseListPage = () => {
  const dispatch = useDispatch();
  //  const d = useSelector((state) => state.students); //global state mien se koi prop use karni h toh mera use karo
  //  console.log(d, "students");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(courseModel);
      setIsPending(false);
      dispatch(setStudentData(courseModel));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <div>{isPending ? <div>Loading...</div> : <div><SearchCourseList courses={data}/></div>}</div>;
};

export default CourseListPage;
