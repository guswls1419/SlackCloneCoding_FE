import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import axios from "axios";

// 액션타입
const CREATE_POST = "CREATE_POST";
const LODE_POST = "LODE_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

//액션생성 함수
const createPost = createAction(CREATE_POST,(a) => ({a}));
const lodePost = createAction(LODE_POST,(a) => ({a}));
const updatePost = createAction(UPDATE_POST,(a) => ({a}));
const deletePost = createAction(DELETE_POST,(a) => ({a}));

//초기값
const initialState = {
    
}

//미들웨어
