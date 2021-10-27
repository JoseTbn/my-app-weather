import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchweather = createAsyncThunk(
    'weather/fetch',
    async(payload,{rejecWithValue, getState,dispatch})=>{
try {
 const {data} = await axios.get(  `https://api.openweathermap.org/data/2.5/weather?q={payload}&appid=8d5d3534bbc5b615335b3faefc74024d`

       
     
 );
 return data ;
} catch (error) {
    if(!error?.response){
        throw error
    }
    return rejecWithValue(error?.response?.data)
}
         
    }
)






const sliceweather = createSlice({
    name: 'Weather',
    inialState:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchweather.pending, (state, action) =>{
            state.loading = true;
        });
        builder.addCase(fetchweather.fulfilled, (state, action) =>{
            state.weather = action?.payload
            state.loading = false;
            state.error = undefined
            });
        builder.addCase(fetchweather.rejected, (state, action) =>{
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
           } );
    }
})

export default sliceweather.reducer