import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Name from './Name';
import Title from './Title';
import Introduce from './Introduce';
import Information from './Information';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Name title="이름" name="정찬용" />
    <Title title="나이" name="22살" />
    <Title title="국적" name="대한민국" />
    <Title title="거주지" name="부산 남구 용소로21번길 101" />
    <Introduce title="학력" name="저는 현재 경성대학교 3학년입니다."/>
    <Introduce title="전공" name="저의 전공은 소프트웨어학과입니다."/>
    <Introduce title="목표" name="저의 이번 학기 목표는 지각, 결석하지 않기와 꾸준히 운동하며 성실성을 기르는 것입니다."/>
    <Information email="jcy010905@naver.com" number="010-6557-5366"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
