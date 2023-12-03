import { createSlice } from "@reduxjs/toolkit";

// ** reducers has the set of actions that we can perform on the elements present inside a slice.
const studentSlice = createSlice({
  name: "students", //accessible to all 
  //anybody who wants to modify this data will dispatch this
  initialState: { //object
    studentIdVsCourseData: new Map(),
    loggedInStudentId: 105
    },
  reducers: {
    // ** Here , state means the state present in the context of this Slice.
    setStudentData(state, action) {
      console.log(action.payload,"action.payload");
      action.payload.forEach((course) => { //transformation 
        course.students.forEach((student) => { //har course k ander student ki list h
          if(!state.studentIdVsCourseData.has(student.id)){ //student id exist nhi karti toh
             state.studentIdVsCourseData.set(student.id,[]) //empty array daaldo
          }
          state.studentIdVsCourseData.get(student.id).push({ //array leke aao 
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