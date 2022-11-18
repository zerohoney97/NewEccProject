import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

// usestate 같은 역할
export const userReducer = createSlice({
  name: "teacherUid",
  initialState: { uid: "고유 번호",name:'' },
  reducers: {
    setTeacherUidAndName(state, uid) {
      
      return uid.payload;
    },
   
  },
});

export let { setTeacherUidAndName } = userReducer.actions;





export default userReducer.reducer;