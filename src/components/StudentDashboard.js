import { useDispatch, useSelector } from "react-redux";
import { markCourseCompleted } from "../slice/StudentSlice"; 

const StudentDashboard = () => {
  
  const dispatch = useDispatch();
  const studentId = useSelector((state) => state.students.loggedInStudentId);
  const studentIdVsCourseDetails = useSelector(
    (state) => state.students.studentIdVsCourseData
  ); //kuch change hota h toh rerender hota h
  //compares with virtual dom

const enrolledCourses = studentIdVsCourseDetails.get(studentId) || [];
  
const handleMarkCompleted = (courseId) => {
   dispatch(markCourseCompleted({ studentId: studentId, courseId }));
 };
  return (
    <div className="mx-auto mt-8">
      <h3 className="text-3xl mt-4 md:mt-40 ml-4 md:ml-20">
        Enrolled Courses:
      </h3>
      <div className="mt-4 rounded ml-4 md:ml-20">
        {enrolledCourses.map((item, index) => (
          <div
            className="border shadow-md mb-6 md:mb-10 p-4 md:h-[200px] md:w-[700px] lg:w-auto"
            key={index}
          >
            <div className=" items-center">
              <img
                className="w-16 h-16 md:w-40 md:h-40 object-cover float-right md:mr-4"
                src={item.thumbnail}
                alt="courseimage"
              />
              <div className="md:ml-2">
                <p className="text-xl">{item.name}</p>
                <p>By {item.instructor}</p>
                <div className="flex mt-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                      {item.progress}% Completed
                    </span>
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="flex-grow bg-gray-300 h-2 rounded overflow-hidden">
                    <div
                      style={{ width: `${item.progress}%` }}
                      className="bg-teal-500 h-2 transition-all duration-300"
                    ></div>
                  </div>
                </div>
                {item.completed ? (
                  <p className="ml-2 bg-green-600 font-semibold text-white rounded-sm mt-2 w-36 md:w-40 flex justify-center items-center">
                    Completed!
                  </p>
                ) : (
                  <button
                    className="bg-yellow-500 text-white font-semibold rounded-sm mt-2 w-36 md:w-40 ml-2 hover:bg-green-600 flex justify-center items-center "
                    onClick={() => handleMarkCompleted(item.id)}
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
