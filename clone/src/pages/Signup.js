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
  const [imageurl, setImageUrl] = React.useState("");
  const [imagefilename, setImageFilenName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nickname, setNickName] = React.useState("");
  const [email_check, setEmailCheck] = React.useState(false);

  const signup = () => {
    if (password == "") {
      window.alert("비밀번호를 입력해주세요");
      return;
    }

    dispatch(
      userActions.signupDB(imageurl, imagefilename, email, nickname, password)
    );
  };

  return (
    <React.Fragment>
      <div>
        <Grid padding="20px" margin="-5px 0px 0px 0px">
          <Grid>
            <Input
              _onChange={(e) => {
                setImageUrl(e.target.value);
              }}
              placeholder="이미지 URL을 입력해주세요"
            ></Input>
          </Grid>
          <Grid>
            <Input
              _onChange={(e) => {
                setImageFilenName(e.target.value);
              }}
              placeholder="이미지 URL의 이름을 입력해주세요"
            ></Input>
          </Grid>
          <Grid>
            <Input
              _onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="이메일을 입력해주세요"
            ></Input>
          </Grid>
          <Grid>
            <Input
              type="password"
              _onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="비밀번호를 입력해주세요"
            ></Input>
          </Grid>
          <Grid>
            <Input
              _onChange={(e) => {
                setNickName(e.target.value);
              }}
              placeholder="닉네임을  입력해주세요"
            ></Input>
          </Grid>
        </Grid>
        <Button backgroundColor="#F5C820" color="black" _onClick={signup}>
          회원가입하기
        </Button>
      </div>
      ;
    </React.Fragment>
  );
};

const IdCheck = styled.p`
  font-size: 12px;
  color: #fa8072;
`;
const IdCheck2 = styled.p`
  font-size: 12px;
  color: #03ac13;
`;

export default Signup;
