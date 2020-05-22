import React, {useState} from 'react';
import './App.css';
import Display from "./Display/Display";

export type DisplayType = {
    redButton: object
    count: number
    setDisabled: boolean
    setDisabledReset: boolean
    OnClickInc: () => void
    OnClickRes: () => void
}

function App() {
    // Устанавливаем минимальное и максимальное значение счетчика
    const maxValue: number = 5;
    const minValue: number = 0;

    let [count, setCount] = useState(minValue);

    let OnClickInc = () => setCount(count + 1);
    let OnClickRes = () => setCount(count = minValue);

    let setDisabled = false;
    let setDisabledReset = true;


    count === maxValue ? setDisabled = true : setDisabled = false;
    count === minValue ? setDisabledReset = true : setDisabledReset = false;

    let redButton = {
        color: "black"
    }
    count === maxValue ? redButton.color = "red" : redButton.color = "black";

    return (
        <div className="App">
            <Display redButton={redButton}
                     count={count}
                     setDisabled={setDisabled}
                     setDisabledReset={setDisabledReset}
                     OnClickInc={OnClickInc}
                     OnClickRes={OnClickRes}/>
        </div>
    );
}

export default App;
