import EnrolledCourses from "./EnrolledCourses";
import LeftNav from "./LeftNav";

const StudentDashboard = () => {
    return ( 
        <div style={{
            display:"grid",
            gridTemplateColumns:"30% 70%"
        }}>
                <LeftNav/>
           <EnrolledCourses/>
        </div>
     );
}
 
export default StudentDashboard;