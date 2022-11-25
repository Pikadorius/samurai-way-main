import {useState} from "react";

export default {
    title: 'Example/useMemo demo'
}

export const Example1 = () => {
    const [a, setA]=useState(0)
    const [b, setB]=useState(0)

    const getFact=(num:number):number=>{
        if(num===0) return 1;
        else return getFact(num-1)*num;
    }

    return <>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {getFact(a)}
        </div>
        <div>
            Result for b: {getFact(b)}
        </div>
    </>
}