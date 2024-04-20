import {createSlice} from '@reduxjs/toolkit';

const stepSlice = createSlice({
    name: "step",
    initialState: {step: 0},
    reducers: {
        setStepState : (state, action)=>{
            return action.payload;
        },
        increaseStep : (state, action)=>{
            state.step ++;
        },
        decreaseStep : (state, action)=>{
            state.step --;
        },
    }
});

export const {setStepState, increaseStep, decreaseStep} = stepSlice.actions;
export default stepSlice.reducer;