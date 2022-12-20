import React, {memo, useEffect, useMemo, useState} from "react";

export default {
    title: 'Example/useEffect demo'
}

export const SimpleExample = () => {
    console.log('Example rendering')

    const [counter, setCounter]=useState<number>(0)
    const [fake, setFake]=useState(0)

    useEffect(()=> {
        console.log('useEffect')
        document.title = counter.toString();
    },[])


    return <>
        <button onClick={()=>setFake(fake+1)}>+</button>
        {fake}
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample rendering')
    const [counter, setCounter]=useState(new Date())
    const [fake, setFake]=useState(0)

    /*useEffect(()=> {
        console.log('useEffect')
        setTimeout(()=>document.title=counter.toString(), 3000)
    },[counter])*/
    useEffect(()=>{
        let timer=setInterval(()=>{
            console.log(`setInterval tick: ${counter}`)
            setCounter((state)=>new Date())
        },1000)
        return ()=>clearInterval(timer)
    },[])


    return <>
        {/*<button onClick={()=>setFake(fake+1)}>Fake:{fake}</button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}>Counter:{counter}</button>*/}
        {counter.toLocaleTimeString()}
    </>

}