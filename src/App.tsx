import {useEffect, useRef, useState} from 'react';
import './styles/style.scss';

function App() {
    let [active, setActive] = useState<boolean>(false);
    let [time, setTime] = useState<number>(0);

    useEffect(() => {
        console.log('componentDidMount')
        if (active){
            const timerId = setInterval(()=>{
                setTime((prevTime)=> prevTime + 1)
                console.log('componentDidUpdate ')
            }, 1000)
            return ()=>{
                clearInterval(timerId)
                console.log('componentWillUnmount')
            };
        }
    }, [active]);


    const startTimer = () => {
        setActive(true)
        console.log("Start")
    }

    const stopTimer = () => {
        setActive(false)
        console.log("Stop")

    }

    const resetTimer = () => {
        setActive(false)
        setTime(0)
        console.log("Reset")
    }

    return (
        <div className="min-h-full flex flex-col items-center justify-center overflow-clip h-screen">
            <div className="flex flex-col items-center gap-[20px]">
                <div>{time}</div>

                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default App;
