import { useParams } from "react-router-dom";
import courseModel from "../db/data";
import { useState } from "react";

const CourseDetailScreen = () => {
  const { id } = useParams();

  const [syllabusExpanded, setSyllabusExpanded] = useState(false);

  const course = courseModel.find((course) => course.id === parseInt(id));

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
    <div className="mt-20">
      <div className="flex ">
        <div className="flex:none ml-60">
          <p className="text-4xl">{course.name}</p>
          <p className="text-2xl mt-2">By {course.instructor}</p>
          <p className="text-xl mt-10">{course.description}</p>
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
            className="text-white px-4 py-2 rounded bg-blue-500"
            onClick={toggleSyllabus}
          >
            {syllabusExpanded ? "Collapse Syllabus" : "Expand Syllabus"}
          </button>
          <button onClick={console.log(courseModel)}>click</button>
          {syllabusExpanded && (
            <div>
              <h3>Syllabus</h3>

              {course.syllabus.map((item) => (
                <div key={item.week}>
                  <p>{item.topic}</p>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="ml-10">
          <img
            className="shadow-md w-[520px] h-[420px] object-fit "
            src={course.thumbnail}
            alt="Course Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailScreen;
