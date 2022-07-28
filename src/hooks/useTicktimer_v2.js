import { useState, useEffect } from "react";

export function useTicktimer(initialValue = 0) {

    const [count, setCount] = useState(initialValue);
    const [running, setRunning] = useState(false);
    const [stamps, setStamps] = useState([])

    useEffect(() => {
        let id = 0
        if (running) {
            id = (setInterval(() => setCount((c) => c + 1), 100))
            console.log("init", id)
        }
        return () => {
            clearInterval(id);
            console.log("clear", id)
        };
    }, [running]);

    const start = () => setRunning(true)

    const pause = () => setRunning(false)

    const reset = (c = 0) => setCount(c)

    const stamp = () => {
        if (running) setStamps([...stamps, time()])
    }   

    const hours = (t) => Math.floor(t / 36000)
    const minutes = (t) => {
        const m = Math.floor(t / 600)
        return m < 60 ? m : m % 60
    }
    const seconds = (t) => {
        const s = Math.floor(t / 10)
        return s < 60 ? s : s % 60
    }
    const mseconds = (t) => t < 10 ? t : t % 10

    const time = () => {
        return {
            hours: hours(count), min: minutes(count), sec: seconds(count), msec: mseconds(count)
        }
    }

    return [running, stamps, { start, pause, reset, stamp }, time]

}