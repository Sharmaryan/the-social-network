import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from '../features/authSlice';
import { modalReducer } from "../features/modalSlice";
import {postReducer} from '../features/postSlice';


export const store = configureStore({
    reducer:{
        auth: authReducer,
        modal: modalReducer,
        post: postReducer
    }
})