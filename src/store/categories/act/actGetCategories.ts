import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { TCategory } from "src/Types/TCategory";

type TRes = TCategory[]

const actGetCategories =createAsyncThunk("categories/actGetCategories", async (_, thunkAPI)=>{
          const {rejectWithValue} =thunkAPI;
          try {
                    const response = await axios.get<TRes>("http://localhost:5005/categories");
                    return response.data;
          } catch (error) {
                    if(axios.isAxiosError(error)){
                              return rejectWithValue(error.response?.data.message || error.message)
                    }else{
                              return rejectWithValue("An unexpected error");
                    }
          }

});


export default actGetCategories; 