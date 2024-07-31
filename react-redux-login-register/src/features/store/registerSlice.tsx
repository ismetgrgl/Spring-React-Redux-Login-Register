import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRegister } from "../../models/IRegister";

const initialRegisterState={
    isLoadingRegister: false
}

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async(payload: IRegister)=>{
        const response =  await fetch('http://localhost:9090/user/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': payload.username,
                'password': payload.password,
                'rePassword': payload.rePassword,
                'email': payload.email
            })
        }).then(data => data.json())
        return response;
    }
);

const registerSlice = createSlice({
    name: 'register',
    initialState: initialRegisterState,
    reducers:{},
    extraReducers: (build)=>{
        build.addCase(fetchRegister.pending,(state)=>{
            state.isLoadingRegister = true;
        });
        build.addCase(fetchRegister.fulfilled,(state)=>{
            state.isLoadingRegister = false;
        });
    }
});

export default registerSlice.reducer;