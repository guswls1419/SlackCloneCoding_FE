import React from "react";
import styled from "styled-components";
import { Grid, Input, Button } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    if (email === "" || password === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(userActions.loginFB(email, password));
  };

  return (
    <Grid>
      <MainLogin>
        <LoginMain>
          <Logo src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" />

          <LoginMenu>
            <LoginContents>Slack을 처음 사용하시나요?</LoginContents>
            <SignupBtn>
              <SignupBtnClick>계정 생성</SignupBtnClick>
            </SignupBtn>
          </LoginMenu>
        </LoginMain>

        <MainContents>
          <MainContentsBox>이메일로 로그인 해보세요</MainContentsBox>
        </MainContents>
        <SubContents>
          <SubContentsBox>
            직장에서 사용하는 이메일 주소로 로그인하는 걸 추천드려요.
          </SubContentsBox>
        </SubContents>
        <GoogleBoxBtn>
          <GoogleBox>
            <Icons>
              <FcGoogle />
            </Icons>
            Google 계정으로 로그인
          </GoogleBox>
        </GoogleBoxBtn>
        <AppleBoxBtn>
          <AppleBox>
            <Icons>
              <BsApple />
            </Icons>
            Apple 계정으로 로그인
          </AppleBox>
        </AppleBoxBtn>
        <CenterLineBox>
          <CenterLine />
          또는
          <CenterLine />
        </CenterLineBox>
        <NameFont
          type="text"
          value={email}
          placeholder="name@work-email.com"
          onChange={(e) => {
            setEmail(e.target.value);
            // console.log(e.target.value);
          }}
        ></NameFont>

        <PwdFont
          type="password"
          value={password}
          placeholder="비밀번호를 입력하세요."
          onChange={(e) => {
            setPassword(e.target.value);
            // console.log(e.target.value);
          }}
        ></PwdFont>
        <LoginFont onClick={login}>이메일로 로그인</LoginFont>
      </MainLogin>
    </Grid>
  );
};

const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.img`
  height: 15%;
  width: 15%;
  margin-top: 60px;
  display: block;
  margin-right: 500px;
  margin-bottom: 30px;
`;

const LoginMenu = styled.div`
  margin-top: 60px;
`;

const LoginContents = styled.div`
  font-size: 13px;
`;
const LoginBtn = styled.button`
  /* border: 0;
  outline: 0;
  background-color: transparent;
  color: #094c8b; */
  width: 30px;
  height: 30px;
`;

const MainContents = styled.div`
  margin-top: 20px;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.75px;
  line-height: 46px;
  text-decoration: none solid rgb(29, 28, 29);
  text-align: center;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #1d1c1d;
  font-variant: common-ligatures;
`;

const MainContentsBox = styled.div`
  height: 46px;
  margin: 0 0 10px 0;
  min-height: auto;
  max-width: 700px;
  min-width: auto;
`;

const SubContents = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  text-decoration: none solid rgb(29, 28, 29);
  text-align: center;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #454245;
  font-variant: common-ligatures;
`;

const SubContentsBox = styled.div`
  height: 27px;
  width: 445.203px;
  margin: 0 0 32px 0;
  min-height: auto;
  max-width: 700px;
  min-width: auto;
`;
const SignupBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SignupBtnClick = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  color: #094c8b;
  font-size: 13px;
  font-weight: 700;
  background-color: #ffffff;
`;

const GoogleBoxBtn = styled.button`
  width: 400px;
  height: 44px;
  border: 2px solid #4285f4;
  max-width: 100%;
  min-width: 96px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #4285f4;
  margin-top: 30px;
`;
const GoogleBox = styled.div`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  text-decoration: none solid rgb(66, 133, 244);
  text-align: center;
  white-space: nowrap;
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppleBoxBtn = styled.button`
  width: 400px;
  height: 44px;
  border: 2px solid #1d1c1d;
  max-width: 100%;
  min-width: 96px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #1d1c1d;
  margin-top: 15px;
`;
const AppleBox = styled.div`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  text-decoration: none solid rgb(28, 29, 29);
  text-align: center;
  white-space: nowrap;
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #1d1c1d;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icons = styled.div`
  margin-right: 10px;
`;

const CenterLineBox = styled.div`
  font-size: 15px;
  font-variant: common-ligatures;
  line-height: 22.0002px;
  text-decoration: none solid rgb(29, 28, 29);
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #1d1c1d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;
const CenterLine = styled.div`
  font-size: 15px;
  font-variant: common-ligatures;
  line-height: 22.0002px;
  text-decoration: none solid rgb(29, 28, 29);
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #1d1c1d;
  height: 1px;
  width: 166.203px;
  border-top: 1px solid #dddddd;
  min-height: auto;
  min-width: auto;
  margin: 0px 20px;
`;

const NameFont = styled.input`
  width: 380px;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none solid rgb(29, 28, 29);
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #1d1c1d;
  border: 1px solid #1d1c1d;
  margin: 0 0 20px 0;
  padding: 10px 10px 10px 10px;
`;
const PwdFont = styled.input`
  width: 380px;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none solid rgb(29, 28, 29);
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #1d1c1d;
  border: 1px solid #1d1c1d;
  margin: 0 0 20px 0;
  padding: 10px 10px 10px 10px;
`;
const LoginFont = styled.button`
  width: 400px;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none solid rgb(29, 28, 29);
  word-spacing: 0px;
  background-color: rgb(74, 21, 75);
  background-position: 0% 0%;
  color: #ffffff;
  font-weight: 900;
  border: 1px solid #1d1c1d;
  margin: 0 0 20px 0;
  padding: 10px 10px 10px 10px;
`;
export default Login;