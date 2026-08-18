 import { useState,useEffect } from "react";
export default function usesate(){
        // save    //update
    const [count , setCount] = useState(0)
    const [count2 , setCount2] = useState(0)
    const [theme , settheme] = useState(false)

    useEffect(()=>{
        console.log("color chnaged ")
    },[theme])


    function increase(){
        setCount(count +1)
    }
    function increase2(){
        setCount2(count2 +1)
    }


    return(
        <>
            <h1>count: {count}</h1>
            <button onClick={increase}>+</button>
            <br /><br />
            <h1>count2: {count2}</h1>
            <button onClick={increase2}>+</button>

            <div>
        <button onClick={()=>{settheme(theme === "dark" ? "light" : "dark")
            document.body.className = theme === "light" ? "bg-black text-white" : "bg-white text-black"
        }}>Toogle</button>
      </div>
            

        </>
    )
}