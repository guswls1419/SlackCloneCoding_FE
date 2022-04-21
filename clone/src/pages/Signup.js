import React from "react";
import styled from "styled-components";
import { Input, Grid, Button, Text } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordcheck, setPasswordCheck] = React.useState("");
  const [nickname, setNickName] = React.useState("");
  const [email_check, setEmailCheck] = React.useState(false);

  const signup = () => {
    if (
      email === "" ||
      password === "" ||
      passwordcheck === "" ||
      nickname === ""
    ) {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    if (password !== passwordcheck) {
      window.alert("비밀번호가 같지 않습니다!");
      return;
    }
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    dispatch(userActions.signupDB(email, password, nickname));
  };

  return (
    <React.Fragment>
      <Grid>
        <MainLogin>
          <LoginMain>
            <BlankScreen />
            <Logo src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" />

            <BlankScreen />
          </LoginMain>

          <MainContents>
            <MainContentsBox>먼저 이메일부터 입력해 보세요</MainContentsBox>
          </MainContents>
          <SubContents>
            <SubContentsBox>
              직장에서 사용하는 이메일 주소로 로그인하는 걸 추천드려요.
            </SubContentsBox>
          </SubContents>

          <div>
            <Grid padding="20px" margin="-5px 0px 0px 0px">
              <Grid>
                <NameFont
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="이메일을 입력해주세요"
                ></NameFont>
              </Grid>

              <Grid>
                <PwdFont
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="비밀번호를 입력해주세요"
                ></PwdFont>
              </Grid>

              <Grid>
                <PwdFont
                  type="password"
                  onChange={(e) => {
                    setPasswordCheck(e.target.value);
                  }}
                  placeholder="비밀번호를 재확인 해주세요"
                ></PwdFont>
              </Grid>

              <Grid>
                <NameFont
                  onChange={(e) => {
                    setNickName(e.target.value);
                  }}
                  placeholder="닉네임을 입력해주세요"
                ></NameFont>
              </Grid>
            </Grid>
            <LoginFont onClick={signup}>계속</LoginFont>
          </div>
        </MainLogin>
      </Grid>
    </React.Fragment>
  );
};

const MainLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
`;
const BlankScreen = styled.div`
  width: 10%;
`;

const Logo = styled.img`
  height: 15%;
  width: 15%;
`;
const IdCheck = styled.p`
  font-size: 12px;
  color: #fa8072;
`;
const IdCheck2 = styled.p`
  font-size: 12px;
  color: #03ac13;
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
  margin: 0 0 20px 0;
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
  margin: 0 0 12px 0;
  min-height: auto;
  max-width: 700px;
  min-width: auto;
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
  margin: 0 0 10px 20px;
  padding: 10px 10px 10px 10px;
`;
export default Signup;
