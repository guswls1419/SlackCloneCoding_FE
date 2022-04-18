import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import axios from "axios";

// 액션타입
const CREATE_DM = "CREATE_DM";
const LODE_DM = "LODE_DM";
const UPDATE_DM = "UPDATE_DM";
const DELETE_DM = "DELETE_DM";

//액션생성 함수
const createDm = createAction(CREATE_DM,(a) => ({a}));
const lodeDm = createAction(LODE_DM,(a) => ({a}));
const updateDm = createAction(UPDATE_DM,(a) => ({a}));
const deleteDm = createAction(DELETE_DM,(a) => ({a}));

//초기값
const initialState = {
    
}

//미들웨어
