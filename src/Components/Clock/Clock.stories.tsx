import Clock from "./Clock";
import {useState} from "react";

export default {
    title: "Components/Clock Example",
    component: Clock
}


export const ClockExample = () => {
    console.log('Clock rendering')
    const [isAnalog, setIsAnalog]=useState(false)

    const setAnalog = () => {
        setIsAnalog(!isAnalog)
    }

    return  <Clock isAnalog={isAnalog} setAnalog={setAnalog}/>
}