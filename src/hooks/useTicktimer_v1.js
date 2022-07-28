import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export const useTicktimer = (initialValue = 0) => {

    const [count, setCount] = useState(initialValue)
    const [running, setRunning] = useState(false)
    const [id, setId] = useState(0)
    const [stamps, setStamps] = useState([])

    const start = (t = 100) => {
        setId(setInterval(() => setCount((c) => c + 1), 100));
        setRunning(true)
        console.log("init", id)
    }

    const pause = () => {
        clearInterval(id);
        setRunning(false)
        console.log("clear", id)
    }

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

    return [running, count, stamps, { start, pause, reset, stamp }, time]

}