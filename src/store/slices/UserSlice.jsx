import {createSlice} from '@reduxjs/toolkit'
import { clearAllUsers } from '../Actions';
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){ 
            state.push(action.payload);
        },
        removeUser(state,action){
          state.splice(action.payload, 1)
        },
        // clearAllUsers(state,action){
        //     return [];
        //     // state.length=0;
        //     // state.splice(0,state.length)
        //       },
    },
    extraReducers(builder){
      builder.addCase(clearAllUsers,()=>{
        return [];
      })
    }
})

console.log(userSlice.actions);
// console.log("userSlice.actions");

export default userSlice.reducer;

export const {addUser,removeUser} = userSlice.actions;