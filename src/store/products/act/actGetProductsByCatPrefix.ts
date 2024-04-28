import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { TProduct } from "src/Types/TProduct";

type TRes = TProduct[]

const  actGetProductsByCatPrefix =createAsyncThunk("products/actGetProductsByCatPrefix", async (prefix:string, thunkAPI)=>{
          const {rejectWithValue} =thunkAPI;
          try {
                    const response = await axios.get<TRes>(`http://localhost:5005/products?cat_prefix=${prefix}`);
                    return response.data;
          } catch (error) {
                    if(axios.isAxiosError(error)){
                              return rejectWithValue(error.response?.data.message || error.message)
                    }else{
                              return rejectWithValue("An unexpected error");
                    }
          }

});


export default actGetProductsByCatPrefix; 