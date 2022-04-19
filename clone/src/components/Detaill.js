import React from "react";
import styled from "styled-components";

function Detaill() {
  return (
    <DetaillWrap>
      <div
        style={{
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <Div1>
          <Img
            src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-large/1f331.png"
            class="c-empty_state__image"
            alt=""
          />
        </Div1>
        <Div2>스레드 관리하기</Div2>
        <Div3>고객님이 속한 스레드는 바로 여기에 수집됩니다.</Div3>
        <Atag
          target="_blank"
          href="https://slack.com/help/articles/115000769927?utm_source=slack&amp;utm_medium=prod&amp;utm_campaign=hc"
        >
          스레드에 관해 자세히 알아보기
        </Atag>
      </div>
    </DetaillWrap>
  );
}

const DetaillWrap = styled.div`
  float: left;
  overflow: hidden;
  height: 100vh;
  min-width: 79%;
  max-width: 89%;
`;

const Img = styled.img`
  display: block;
  max-height: 140px;
  max-width: 290px;
  margin: 0 auto;
  margin-top: 18vw;
`;

const Div1 = styled.div`
  margin-bottom: 24px;
`;

const Div2 = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33334;
  font-weight: 900;
  color: white;
`;

const Div3 = styled.div`
  margin-bottom: 8px;
  word-break: break-word;
  color: white;
`;

const Atag = styled.a`
  color: rgba(var(--sk_highlight, 18, 100, 163), 1);
  text-decoration: none;
`;

export default Detaill;
