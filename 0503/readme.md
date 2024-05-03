## Hook
#### useReducer
```
import React, { useState } from "react";
const Counter = ({ initialCount }) => {
    const initial = initialCount ? initialCount : 0;
    const [count, setCount] = useState(initial);
    const onIncrease = () => {
        setCount((count) => count + 1);
    };
    const onDecrease = () => {
        setCount((count) => count - 1);
    };
    return (
        <>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(initial)}>초기화</button>
        <button onClick={onIncrease}>증가</button>
        <button onClick={onDecrease}>감소</button>
        </>
    );
};
export default Counter;
```

![alt text](images/Reducer.png)

#### useContext
Header.js
```
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Header = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <header
        className="header"
        style={{
            backgroundColor: isDark ? "black" : "lightgray",
            color: isDark ? "white" : "black",
        }}
        >
        <h1>Welcome 홍길동!</h1>
        </header>
    );
};
export default Header;

```
content.js
```
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Content = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div
        className="content"
        style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black",
        }}
        >
        <p>홍길동님, 좋은 하루 되세요 </p>
        </div>
    );
};
export default Content;
```
Footer.js
```
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Footer = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <footer
        className="footer"
        style={{ backgroundColor: isDark ? "black" : "lightgray" }}
        >
        <button className="button" onClick={toggleTheme}>
            Dark Mode
        </button>
        </footer>
    );
};
export default Footer;

```
page.js
```
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
const Page = () => {
    return (
        <div className="page">
        <Header />
        <Content />
        <Footer />
        </div>
    );
};
export default Page;
```
ThemeContext.js
```
import { createContext } from "react";
export const ThemeContext = createContext(null);
```
App.js
```
import { useState } from "react";
import "./App.css";
import Page from "./Page";
import { ThemeContext } from "./ThemeContext";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}
export default App;

```

![alt text](images/context1.png)|![alt text](images/context2.png)
---|---

#### useRef
```
import React, { useState, useRef } from "react";
const InputSample = () => {
    const [inputs, setInputs] = useState({
        이름: "",
        nickname: "",
    });
    const nameFocus = useRef();
    const { 이름, nickname } = inputs;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
        ...inputs,
        [name]: value,
        });
    };
    const onReset = () => {
        setInputs({
        이름: "",
        nickname: "",
        });
        nameFocus.current.focus();
    };
    return (
        <div>
        <input
            name="이름"
            placeholder="이름쓰세요"
            onChange={onChange}
            value={이름}
            ref={nameFocus}
        />
        <input
            name="nickname"
            placeholder="닉네임쓰세요"
            onChange={onChange}
            value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값:</b>
            {이름}({nickname})
        </div>
        </div>
    );
};
export default InputSample;
```

![alt text](images/ref.png)

#### forwardRef
```
import { useRef } from "react";
import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
    const { label, ...otherProps } = props;
    return (
        <label>
        {label}
        <input {...otherProps} ref={ref} />
        </label>
    );
});

function Form() {
    const ref = useRef(null);
    function handleClick() {
        ref.current.focus();
    }
    return (
        <form>
        <MyInput label="Enter your name:" ref={ref} />
        <button type="button" onClick={handleClick}>
            Edit
        </button>
        </form>
    );
}

export default Form;
```

![alt text](images/forwardref.png)

#### useImperativeHandle
MyInput.js
```
import { useRef, useImperativeHandle } from 'react';
function MyInput(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(
        ref,
        () => {
        return {
            focus() {
            inputRef.current.focus();
            },
        };
        },
        []
    );
    return <input type="text" ref={inputRef} />;
}
export default MyInput;
```
Form.js
```
import { useRef,forwardRef } from 'react';
import MyInput from './MyInput';
const ForwardedMyInput = forwardRef(MyInput);
function Form() {
    const ref = useRef(null);
    function handleClick() {
        ref.current.focus();
    }
    return (
        <form>
        <ForwardedMyInput ref={ref} />
        <button type="button" onClick={handleClick}>
            Edit
        </button>
        </form>
    );
}
export default Form;
```

![alt text](images/ImperativeHandle.png)

#### useEffect
```
import { useEffect, useState } from "react";
export default function UseEffectTest() {
    const [count, setCount] = useState(1000);
    useEffect(() => {
        console.log("useEffect");
        const interval = setInterval(() => console.log(count), count);
        return () => {
        clearInterval(interval);
        console.log("clearInterval");
        };
    }, [count]);
    const countHandler = (e) => {
        setCount((c) => c + 1000);
    };
    return (
        <div className="App">
        <h1>{count}</h1>
        <button onClick={countHandler}>카운트 증가</button>
        </div>
    );
}
```

![alt text](images/useEffect.png)

#### useMemo
```
import { useEffect, useState, useMemo } from "react";

export default function Practice() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return { country: isKorea ? "한국" : "외국" };
    }, [isKorea]);

    useEffect(() => {
        console.log("useEffect 호출");
    }, [location]);
    
    return (
        <div>
        <h2>하루에 몇끼 먹어요?</h2>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
        <hr />
        <h2>어느 나라에 있어요?</h2>
        {}
        <p>나라:{location.country}</p>
        <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        <p></p>
        </div>
    );
}
```

![alt text](images/memo.png)

#### useCallback
Light.js
```
import React, { useState } from "react";
import Light from "./Light";

function SmartHome() {
    const [masterOn, setMasterOn] = useState(false);
    const [kitchenOn, setKitchenOn] = useState(false);
    const [bathOn, setBathOn] = useState(false);
    const toggleMaster = () => {
        setMasterOn(!masterOn);
    };
    const toggleKitchen = () => {
        setKitchenOn(!kitchenOn);
    };
    const toggleBath = () => {
        setBathOn(!bathOn);
    };
    return (
        <div>
        <Light room="침실" on={masterOn} toggle={toggleMaster}></Light>
        <Light room="주방" on={kitchenOn} toggle={toggleKitchen}></Light>
        <Light room="욕실" on={bathOn} toggle={toggleBath}></Light>
        </div>
    );
}
export default SmartHome;
```
SmartHome.js
```
import React, { useState } from "react";
import Light from "./Light";

function SmartHome() {
    const [masterOn, setMasterOn] = useState(false);
    const [kitchenOn, setKitchenOn] = useState(false);
    const [bathOn, setBathOn] = useState(false);
    const toggleMaster = () => {
        setMasterOn(!masterOn);
    };
    const toggleKitchen = () => {
        setKitchenOn(!kitchenOn);
    };
    const toggleBath = () => {
        setBathOn(!bathOn);
    };
    return (
        <div>
        <Light room="침실" on={masterOn} toggle={toggleMaster}></Light>
        <Light room="주방" on={kitchenOn} toggle={toggleKitchen}></Light>
        <Light room="욕실" on={bathOn} toggle={toggleBath}></Light>
        </div>
    );
}
export default SmartHome;
```

![alt text](images/collback.png)

#### useTransition
```
import { useDeferredValue, useState } from "react";

export default function Home() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const deferredValue = useDeferredValue(count2);
    const onIncrease = () => {
        setCount1(count1 + 1);
        setCount2(count2 + 1);
        setCount3(count3 + 1);
        setCount4(count4 + 1);
    };
    console.log({ count1 });
    console.log({ count2 });
    console.log({ count3 });
    console.log({ count4 });
    console.log({ deferredValue });
    
    return <button onClick={onIncrease}>클릭</button>;
    }
```

![alt text](images/Transition.png)

#### UseId
```
import { useId } from "react";

function PasswordField() {
    const passwordHintId = useId();
    return (
        <>
        <label>
            Password:
            <input type="password" aria-describedby={passwordHintId} />
        </label>
        <p id={passwordHintId}>
            The password should contain at least 18 characters
        </p>
        </>
    );
}
export default PasswordField;
```

![alt text](images/Id.png)
