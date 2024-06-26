## Hook
#### 클래스형 컴포넌트의 단점
1. 코드의 구성이 어렵고 Component의 재사용성이 떨어진다.
2. 컴파일 단계에서 코드 최적화를 어렵게 한다.
3. 최신 기술의 적용이 효과적이지 않다.
- 이러한 클래스형 컴포넌트의 단점을 보완하여, 함수형 컴포넌트를 사용 할 수 있도록 등장한 것이 바로 React Hook이다.
#### Hook 장점
- 상태 로직 단순화: Hooks를 사용하면 함수형 컴포넌트에 상태를 추가하여 전반적인 로직을 단순화하고 코드를 이해하기 쉽게 만들 수 있다.
- 코드 재사용성과 관심사 분리: Hooks를 사용하면 컴포넌트 계층 구조를 변경하지 않고도 여러 컴포넌트 간에 상태 로직을 재사용할 수 있다.
- 사이드 이펙트 감소: Hooks는 함수형 컴포넌트에 생명주기 메서드와 유사한 기능을 제공하여 사이드 이펙트를 더 효율적으로 처리할 수 있습
니다.
#### Hook의 규칙
1. 최상위에서만 Hook을 호출해야 한다.
    - 반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안됨. 대신 early return이 실행되기 전에 항상 React 함수의 최상위에서 Hook을 호출해야 한다. 이 규칙을 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장된다. 이러한 점은 React가 useState 와 useEffect 가 여러 번 호출되는 중에도 Hook의 상태를 올바르게 유지할 수 있도록 해준다.
2. 오직 React 함수 내에서 Hook을 호출해야 한다.
    - Hook을 일반적인 JavaScript 함수에서 호출면 안되고 React 함수 컴포넌트에서 Hook을 호출, Custom Hook에서 Hook을 호출을 해야한다. 이 규칙을 지키면 컴포넌트의 모든 상태 관련 로직을 소스코드에서 명확하게 보이도록 할 수 있습니다.
#### useState
- 상태 변수를 선언하려면 구성 요소의 최상위 수준에서 useState를 호출한다.
    - import { useState } from 'react';
-  컴포넌트에 state variable를 추가할 수 있다.
    - const [state, setState] = useState(초기값)
    - setState로 값 변경
    - state 사용
## 실습
#### Counter
```
export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
    setCount(count + 1);
    }
    return (
    <button onClick={handleClick}>
    You pressed me {count} times
    </button>
    );
}
```

![alt text](images/Counter.png)

#### Checkbox
```
export default function MyCheckbox() {
    const [liked, setLiked] = useState(true);
    function handleChange(e) {
        setLiked(e.target.checked);
    }
    return (
        <>
        <label>
            <input type="checkbox" checked={liked} onChange={handleChange} />I liked
            this
        </label>
        <p>You {liked ? "liked" : "did not like"} this.</p>
        </>
    );
}
```
![alt text](<images/not check.png>)|![alt text](images/check.png)
---|---

#### Form
```
export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
    setCount(count + 1);
    }
    return (
    <button onClick={handleClick}>
    You pressed me {count} times
    </button>
    );
}
```

![alt text](images/Form.png)

#### Counter2
```
export default function Counter() {
    const [age, setAge] = useState(42);
    function increment() {
        setAge((a) => a + 1);
    }
    return (
        <>
        <h1>Your age: {age}</h1>
        <button
            onClick={() => {
            increment();
            increment();
            increment();
            }}
        >
            +3
        </button>
        <button
            onClick={() => {
            increment();
            }}
        >
            +1
        </button>
        </>
    );
}
```

![alt text](images/Counter2.png)