import React, {memo, useEffect, useMemo, useState} from "react";

export default {
    title: 'Example/useEffect demo'
}

export const SimpleExample = () => {
    console.log('Example rendering')

    const [counter, setCounter]=useState<number>(0)
    const [fake, setFake]=useState(0)

    useEffect(()=>{
        debugger
        console.log('useEffect')
        document.title=counter.toString();
    })


    return <>
        <button onClick={()=>setFake(fake+1)}>+</button>
        {fake}
    </>
}