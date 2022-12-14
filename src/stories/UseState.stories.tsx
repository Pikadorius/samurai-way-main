import React, {memo, useMemo, useState} from "react";

export default {
    title: 'Example/useState demo'
}


const generateData = () => {
    console.log('Difficult data generating')
    return 1;
}

export const Example1 = () => {
    console.log('Example rendering')

    const [counter, setCounter]=useState<number>(generateData)

    const changer = (counter:number) => {
        return counter+1
    }

    return <>
        <button onClick={()=>setCounter(changer)}>+</button>
        {counter}
    </>
}