import { createSlice } from "@reduxjs/toolkit";

// ** reducers has the set of actions that we can perform on the elements present inside a slice.
const studentSlice = createSlice({
  name: "students",
  initialState: {
    studentIdVsCourseData: new Map(),
    studentIdVsStudentData: new Map()
  },
  reducers: {
    // ** Here , state means the state present in the context of this Slice.
    setStudentData(state, action) {
      console.log(action.payload,"action.payload");
      action.payload.forEach((course) => {
        course.students.forEach((student) => {
          if(!state.studentIdVsCourseData.has(student.id)){
             state.studentIdVsCourseData.set(student.id,[])
          }
          if(!state.studentIdVsStudentData.has(student.id)){
            state.studentIdVsStudentData.set(student.id,student)
          }
          state.studentIdVsCourseData.get(student.id).push({
            name: course.name,
            instructor: course.instructor,
            thumbnail: course.thumbnail,
            dueDate: student.dueDate,
            progress: student.progress,
          });
        })
      })
       
      
    },
  },
});

export default studentSlice.reducer;
export const { setStudentData } = studentSlice.actions;