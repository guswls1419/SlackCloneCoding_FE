import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";
import { setToken, delToken } from "../../shared/token";
import api from "../../api/api";

//1)액션 타입을 만든다
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const LOAD_TOKEN = "LOAD_TOKEN";
const POST_USER = "POST_USER";
// const LOAD_INFO = "user/LOAD_INFO";

//3)initialState 만든다
const initialState = {
  email: "",
  password: "",
  nickname: "",
  is_login: false,
};

//2)액션 생성 함수를 만든다
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const loadToken = createAction(LOAD_TOKEN, (token) => ({ token }));
// const getmyinfo = createAction(LOAD_INFO, (userinfo) => ({ userinfo }));

// const getMyInfo = () => {
//   return async function (dispatch, getState, { history }) {
//     await api
//       .get("http://54.180.105.154/myinfo")
//       .then((res) => {
//         console.log(12345);

//         dispatch(loadPost(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

const signupDB = (email, password, nickname) => {
  return function (dispatch, getState, { history }) {
    console.log(dispatch);
    axios
      .post("http://3.38.104.97:8080/user/signup", {
        email: email,
        password: password,
        nickname: nickname,
      })
      .then((response) => {
        window.alert("회원가입을 축하합니다!");
        history.push("/");
      })
      .catch((error) => {
        alert("중복된 아이디가 존재합니다.");
        console.log("회원가입 DB Error", error);
      });
  };
};

// 토큰로드 액션
const loadTokenDB = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

const loginFB = (email, password) => {
  console.log(email, password);
  return function (dispatch, getState, { history }) {
    api
      .post("/user/login", {
        username: email,
        password: password,
      })
      .then((res) => {
        console.log(res.config.data.split(" :"));
        dispatch(
          logIn({
            is_login: true,
          })
        );
        setCookie("Authorization", res.headers.authorization.split(" ")[1]);
        setCookie("email", email);
        history.push("/chat");
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
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        console.log(state, action.payload, draft.user);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("Authorization");
        deleteCookie("email");
        deleteCookie("is_login");
        draft.is_login = false;
      }),
    [LOAD_TOKEN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  loginFB,
  logOutDB,
  signupDB,
  loadTokenDB,
};

export { actionCreators };
