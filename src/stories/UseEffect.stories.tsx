import React, {memo, useEffect, useMemo, useState} from "react";

export default {
    title: 'Example/useEffect demo'
}

export const SimpleExample = () => {
    console.log('Example rendering')

    const [counter, setCounter] = useState<number>(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }, [])


    return <>
        <button onClick={() => setFake(fake + 1)}>+</button>
        {fake}
    </>
}

export const SetIntervalExample = () => {
    console.log('SetTimeoutExample rendering')
    const [counter, setCounter] = useState(new Date())
    const [fake, setFake] = useState(0)

    /*useEffect(()=> {
        console.log('useEffect')
        setTimeout(()=>document.title=counter.toString(), 3000)
    },[counter])*/
    useEffect(() => {
        let timer = setInterval(() => {
            console.log(`setInterval tick: ${counter}`)
            setCounter((state) => new Date())
        }, 1000)
        return () => {
            console.log('Reset timer')
            clearInterval(timer)
        }
    }, [])


    return <>
        {/*<button onClick={()=>setFake(fake+1)}>Fake:{fake}</button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}>Counter:{counter}</button>*/}
        {counter.toLocaleTimeString()}
    </>

}

export const ResetUseEffectExample = () => {
    console.log('Example rendering')

    const [counter, setCounter] = useState<number>(1)

    useEffect(() => {
        console.log(`useEffect occured, reason: ${counter}`)
        return () => {
            console.log('Reset effect' + counter)
        }
    }, [counter])


    return <>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('Example rendering with: ' + text)


    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.document.addEventListener('keypress', listener)

        return () => {
            console.log('Remove listener')
            window.document.removeEventListener('keypress', listener)
        }
    }, [])


    return <div>Typed text: {text}</div>

}


export const SetTimeoutExample = () => {
    console.log('SetTimeout example rendering')
    const [text, setText] = useState('Initial text')

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)
        return () => clearTimeout(timeoutID)
    })

    return <div>
        <div>{text}</div>
    </div>
}