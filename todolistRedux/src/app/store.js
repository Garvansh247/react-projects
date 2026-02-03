import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import workPlanReducer from "../features/work/workSlice";

export const store= configureStore(
    {
        reducer: { // or simply reducer: workPlanReducer, when there is only one slice
            work: workPlanReducer
        }
    }
);