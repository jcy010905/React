## JSX
JavaScript XML
#### JSX란?
  - XML 과 유사한 구문을 사용하여 DOM( 문서 개체 모델 ) 트리를 생성할 수 있는 JavaScript 확장
  - 구문상의 편의를 위해 JSX는 일반적으로 원래 JSX와 구조적으로 유사한 중첩된 JavaScript 함수 호출로 변환
  - 브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
  - JSX는 하나의 파일에 자바스크립트와 HTML을 동시에 작성하여 편리하다.
  - 자바스크립트에서 HTML을 작성하듯이 하기 때문에 가독성이 높고 작성하기 쉽다.
***
#### 1. 반드시 부모 요소 하나가 감싸는 형태여야 한다.
  - Virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문
  - 태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아주어야 한다.
  - JSX 태그는 자식을 포함할 수 있다.
  
  ![alt text](<images/JSX1.png>)

#### 2. 자바스크립트 표현식
  - JSX 안에서도 자바스크립트 표현식을 사용할 수 있다.
  - 자바스크립트 표현식을 작성하려면 JSX내부에서 코드를 { }로 감싸주면 된다.
  - 유효한 모든 JavaScript 표현식을 넣을 수 있다.

  ![alt text](images/JSX2.png)

#### 3. JSX도 표현식이다.
  - 컴파일이 끝나면, JSX 표현식이 JavaScript 객체로 인식된다.
  - 즉, JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있다.
  - JSX는 자바스크립트 문법을 확장시킨 것, 따라서 모든 자바 스크립트 문법을 지원한다.
  - 자바스크립트에 추가로 XML과 HTML 섞어서 사용하면 된다
  - xml, html 코드를 사용 시 중간에 자바스크립트 코드를 사용하고 싶으면 중괄호 {}를 사용하여 묶어주면 된다.

  ![alt text](images/JSX3.png)

#### 4. if문(for문) 대신 삼항 연산자(조건부 연산자) 사용
  ![alt text](images/JSX4.png)

#### 5. JSX 속성 정의
  - 속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.
  - 속성에 중괄호를 이용해 자바스크립트 표현식을 포함시킬 수 있다.

#### 6. React DOM은 HTML 어트리뷰트 이름 대신 camelCase을 사용한다.
  - JSX에서 자바스크립트 문법을 쓰려면 {}를 써야 하기 때문에, 스타일을 적용할 때에도 객체 형태로 넣어 주어야 한다.
  - 카멜 표기법으로 작성해야 한다. (font-size => fontSize)

#### 7. 주석
  - JSX 내에서 {/*…*/} 와 같은 형식을 사용 한다.
  - 시작태그를 여러줄 작성시에는, 내부에서 // 의 형식을 사용할 수 있다.