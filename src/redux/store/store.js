import { configureStore } from "@reduxjs/toolkit";
import sliceweather from '../slices/wslices'

const store = configureStore({
    reducer: sliceweather
});

export default store 