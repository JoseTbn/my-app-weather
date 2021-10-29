import { configureStore } from "@reduxjs/toolkit";
import sliceweather from '../slices/wslices'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({
    reducer: sliceweather
},devtools);

export default store 