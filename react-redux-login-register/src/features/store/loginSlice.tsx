import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../../models/ILogin";
import { IResponse } from "../../models/IResponse";
import Swal from 'sweetalert2';

const initialLoginState={
    username: String
}

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async(payload: ILogin)=>{
        const response =  await fetch('http://localhost:9090/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': payload.username,
                'password': payload.password,
               
            })
        }).then(data => data.json())
        return response;
    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers:{},
    extraReducers: (build)=>{
        
        build.addCase(fetchLogin.fulfilled,(state , action: PayloadAction<IResponse>)=>{
            
            
        });
    }
});

export default loginSlice.reducer;

