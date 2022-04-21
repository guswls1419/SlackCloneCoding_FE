// import { createAction, handleActions } from "redux-actions";
// import {produce} from "immer";
// import axios from "axios";

// // 액션타입
// const GET_DM = "GET_DM";

// //액션생성 함수
// const getDm = createAction(GET_DM,(roomId,roomName) => ({roomId,roomName}));

// //초기값
// const initialState = {
//     list:[
//         { roomName:""}
//     ]
// }

// // *** 리듀서
// export default handleActions(
//     {
//         [GET_DM]: (state, action) =>
//         produce(state, (draft) => {
//           draft.dmsList = [...draft.dmsList, action.payload.dm];
//         }),
//         },initialState
//   )
  
//     const actionCreators = {
//         getDm
  
//   }
  
//   export {actionCreators}
