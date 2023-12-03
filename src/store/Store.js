import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../slice/StudentSlice";


// ** This is tied to the NumberSlice.js slice we created because we gave that in the reducer object.
const store = configureStore({
  reducer: {
    students: StudentSlice,
  },
});

export default store;
