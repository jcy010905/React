import React from 'react';
import Navbar from './Navbar';
import Name from './Name';
import Title from './Title';
import Introduce from './Introduce';
import Information from './Information';

export default function App() {
    return (
        <>
        <Navbar />
        <Name title="이름" />
        <Title title="나이" name="22살" holder="Age"/>
        <Title title="국적" name="대한민국" holder="Country"/>
        <Title title="거주지" name="부산 남구 용소로21번길 101" holder="Adress"/>
        <Introduce title="학력" name="저는 현재 경성대학교 3학년입니다."/>
        <Introduce title="전공" name="저의 전공은 소프트웨어학과입니다."/>
        <Introduce title="목표" name="저의 이번 학기 목표는 지각, 결석하지 않기와 꾸준히 책을 읽고 운동하며 성실성을 기르는 것입니다."/>
        <Information email="jcy010905@naver.com" number="010-6557-5366"/>
        </>
    )
}



