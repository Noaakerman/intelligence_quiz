import React from 'react';
import { useState } from 'react';
import MainScreen from './MainScreen.jsx';
// import './OpenScreenAnimation.css';

export default function OpenScreenAnimation({changeScreen}) {
    const  [next,setNext]=useState(false);
    const buttonAnimation1 = { animation: "upAndDown 1s infinite alternate" };
    const buttonAnimation2 = { animation: "up 2s" };
    const blueFrameAnimation= {animation:"blueFrameAnimtion 2s"}
    const noAnimation ={animation:undefined}
    const lowOpacity = {animation:"lowOpacity 2s"};


    function handleClick(){
        setNext(true);
        setTimeout(()=>{
            changeScreen()
        },2000);
    }
    return (
        <>
            <h1 style={next?  lowOpacity : noAnimation}>שאלון <br /> סוגי אינטליגנציות</h1>
            <span className="blueFrame" style={next?  blueFrameAnimation : noAnimation}></span>
            <span className="blueDecoFirst" style={next?  lowOpacity : noAnimation}></span>
            <span className="pinkDecoFirst" style={next?  lowOpacity : noAnimation}></span>
            <span className="OrangeDecoFirst" style={next?  lowOpacity : noAnimation}></span>
            <div id="startProject"  style={next? buttonAnimation2 : buttonAnimation1} onClick={()=>  
                handleClick()} />
        </>
    )
}