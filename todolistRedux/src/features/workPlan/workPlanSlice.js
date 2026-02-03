import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    workPlanItems: []
};

export const workPlanSlice= createSlice({
    name: 'workPlan',
    initialState,
    reducers: {
        addWorkPlan : (state,action)=>{
            state.workPlanItems.push({
                id : nanoid(),
                text : action.payload,
                completed : false,
                duplicateError: false // added this because i will not have each todo as a separate component and i will not be able to manage local state for each todo item using useState
            });
        },
        removeWorkPlan : (state,action) =>{
            state.workPlanItems= state.workPlanItems.filter((item)=> item.id !== action.payload);
        },
        updateWorkPlan : (state,action)=>{
            state.workPlanItems= state.workPlanItems.map((item)=>item.id === action.payload.id ? {...item, ...action.payload}: item)
        },
        toggleWorkCompletion : (state,action)=>{
            state.workPlanItems= state.workPlanItems.map((item)=>item.id===action.payload.id ? {...item,completed : !item.completed}: item);
        },
        setDuplicateErrorTo : (state,action)=>{ // requires either true or false as payload and id of the item for which we want to set duplicateError
            state.workPlanItems= state.workPlanItems.map((item)=>item.id===action.payload.id ? {...item, duplicateError: action.payload.duplicateError}: item);
        } //duplicate error while adding a todo in the form can be handled in the component where form is present but duplicate error while editing a todo item can only be handled here in the slice because we will not have separate component for each todo item and we will not be able to manage local state for each todo item using useState so we will have to manage duplicateError for each todo item in the global state itself and for that we need this reducer to set duplicateError to true or false for a particular todo item based on the id of that item which is also present in the payload of this action creator.
    }
});

export const { addWorkPlan, removeWorkPlan, updateWorkPlan, toggleWorkCompletion, setDuplicateErrorTo } = workPlanSlice.actions;

export default workPlanSlice.reducer;
