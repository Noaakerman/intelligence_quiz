import "../index.css";
import React, { useState } from "react";
import Question from "./Question.jsx";
import { QUESTIONSDATA } from "./dataQustion.js";


export default function MainScreen({changeScreen,changeToScreenPage}) {
    console.log(QUESTIONSDATA);
    const highOpacity = {animation:"highOpacity 2s"};
   function handleChange(updateList)
   {
    changeScreen(updateList);
    console.log(updateList);
   }
   function goToChooseScreen(){
    changeToScreenPage()
   }
    return (
        <>
            <span className="blueFrameBig"></span>
            <span className="orangeDeco" style ={highOpacity}  ></span>
            <span className="pinkDeco" style ={highOpacity}></span>
            <h2>שאלון סגנונות למידה</h2>
            <Question QUESTIONSDATA={QUESTIONSDATA} changeScreen={handleChange} toChooseScreen={goToChooseScreen}></Question>
        </>

    )
}