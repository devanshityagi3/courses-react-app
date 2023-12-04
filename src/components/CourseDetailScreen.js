import { useParams } from "react-router-dom";
import courseModel from "../db/data";

import { useState } from "react";
import { useSelector } from "react-redux";

const CourseDetailScreen = () => {
  const { id } = useParams();

  const studentId = useSelector((state) => state.students.loggedInStudentId);
  const studentIdVsCourseDetails = useSelector(
    (state) => state.students.studentIdVsCourseData
  );
  //compares with virtual dom

  const [syllabusExpanded, setSyllabusExpanded] = useState(false);

  const course = courseModel.find((course) => course.id === parseInt(id));
  console.log(studentIdVsCourseDetails, "studentId");
  // console.log(studentId, "studentId");
  // console.log(studentIdVsCourseDetails[studentId], "studentId");
  if (
    studentIdVsCourseDetails.get(studentId).find((x) => x.name === course.name)
  ) {
    course.enrollmentStatus = "In Progress";
  }
  if (!course) {
    return <p>Course not found</p>;
  }

  let bgColorClass = "";
  switch (course.enrollmentStatus) {
    case "Closed":
      bgColorClass = "bg-red-500";
      break;
    case "Open":
      bgColorClass = "bg-green-500";
      break;
    case "In Progress":
      bgColorClass = "bg-yellow-500";
      break;
    default:
      bgColorClass = "bg-gray-500"; // Default color for unknown status
  }

  // Function to toggle the syllabus state
  const toggleSyllabus = () => {
    setSyllabusExpanded(!syllabusExpanded);
  };

  return (
    <div className="mt-20 px-4 md:px-0">
      {" "}
      {/* Add padding for small screens, remove for medium and larger screens */}
      <div className="flex flex-col md:flex-row">
        {" "}
        {/* Stack items vertically on small screens, side-by-side on medium and larger screens */}
        <div className="md:w-1/2 flex-none md:ml-4 lg:ml-12 xl:ml-20">
          {" "}
          {/* Set width on small screens, allow to grow on medium and larger screens */}
          <p className="text-4xl">{course.name}</p>
          <p className="text-2xl mt-2">By {course.instructor}</p>
          <p className="text-xl mt-6 md:mt-10">{course.description}</p>
          <div className="flex mt-8">
            <div
              className={`text-white px-4 py-2 rounded w-30 ${bgColorClass}`}
            >
              {course.enrollmentStatus}
            </div>
          </div>
          <div className="text-xl flex mt-2">
            <p className="">{course.duration}</p>
            <p className="ml-4">{course.location}</p>
          </div>
          <p className="mt-2">{course.schedule}</p>
          <div className="flex flex-col font-semibold">
            Pre-requisites {course.prerequisites}
          </div>
          <button
            className="text-white px-4 py-2 mb-2 rounded bg-blue-500 mt-4"
            onClick={toggleSyllabus}
          >
            {syllabusExpanded ? "Collapse Syllabus" : "Expand Syllabus"}
          </button>
      
          {syllabusExpanded && (
            <div>
              <h3 className="mt-4 text-4xl">Syllabus</h3>

              {course.syllabus.map((item) => (
                <div key={item.week}>
                  <p className="font-bold mt-2 text-xl">Week {item.week}</p>
                  <p className="font-semibold text-base">{item.topic}</p>
                  <p className="ml-6">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="md:w-1/2 ml-0 md:ml-4">
          {" "}
          {/* Set width on small screens, allow to grow on medium and larger screens */}
          <img
            className="shadow-md w-full md:w-[520px] h-[420px] object-fit"
            src={course.thumbnail}
            alt="Course Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailScreen;
