import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";
import { setToken, delToken } from "../../shared/token";
import api from "../../api/api";

//1)액션 타입을 만든다
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const LOAD_TOKEN = "LOAD_TOKEN";
const POST_USER = "POST_USER";
//2)액션 생성 함수를 만든다
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const loadToken = createAction(LOAD_TOKEN, (token) => ({ token }));

//3)initialState 만든다
const initialState = {
  file: {
    imageUrl: "",
    imageFilename: "",
  },
  information: {
    email: "",
    password: "",
    nickname: "",
  },
};

const signupDB = (imageurl, imagefilename, email, password, nickname) => {
  console.log(imageurl, imagefilename, email, password, nickname);

  return function (dispatch, getState, { history }) {
    api
      .post("/posts", {
        file: { imageurl, imagefilename },
        information: {
          email,
          password,
          nickname,
        },
      })
      .then((res) => {
        console.log(res);
        // window.alert("회원가입이 완료되었습니다!");
        // history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
        // window.alert(err.response.data.errorMessage);
      });
  };
};

// 토큰로드 액션
const loadTokenFB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

const loginFB = (email, password) => {
  return function (dispatch, getState, { history }) {
    api
      .post("/posts", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.config.data.split(":"));
        dispatch();
        setCookie(
          "Authorization",
          response.headers.authorization.split(" ")[1]
        );
        history.replace("/todoList");
      })
      .catch((error) => {
        window.alert("아이디 또는 비밀번호를 확인해주세요.");
        console.log("Login Error", error);
      });
  };
};
const logOutDB = (dispatch, getState, { history }) => {
  console.log("로그아웃");
  dispatch(logOut());
  const token = sessionStorage.getItem("token");
  delToken(token);
  history.replace("/");
  window.location.reload();
};

//4)리듀서 만든다(feat.immer)
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.userInfo = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.userInfo = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  loginFB,
  logOutDB,
  signupDB,
  setUser,
};

export { actionCreators };
