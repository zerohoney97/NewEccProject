import { createSlice } from '@reduxjs/toolkit'



// usestate 같은 역할
export const studentReducer=createSlice({
name:'studentInformation',
initialState:{name:'이름',attrClass:'반'},
reducers:{
setStudentInformation(state,newState){

  return newState.payload;

},

}

})


export const {setStudentInformation}=studentReducer.actions;



export default studentReducer.reducer;