import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'Checking',
        uid:null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:null,
    },
    reducers: {
        login: (state, {payload} ) => {
            state.status='Authenticated'
            state.uid=payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.photoURL=payload.photoURL;
            state.errorMessage=null;
        },
        logout: (state, {payload} ) => {
            state.status='Not Authenticated';
            state.uid=null;
            state.email=null;
            state.displayName=null;
            state.photoURL=null;
            state.errorMessage=payload?.errorMessage;
        },
        checkingCredencials:(state) =>{
            state.status='Checking';
        }
    }
});


export const { login, logout, checkingCredencials } = authSlice.actions;