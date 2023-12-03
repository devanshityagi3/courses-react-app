import EnrolledCourses from "./EnrolledCourses";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";


const StudentDashboard = () => {
    const { id } = useParams();
     const {
       data,
       isPending,
       error,
     } = useFetch("http://localhost:3000/student/");
    //  const history = useHistory();

    return (
      <div className="">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        
        <EnrolledCourses />
      </div>
    );
}
 
export default StudentDashboard;