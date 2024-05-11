import React, { useState, useRef } from "react";
import EndScreen from "./EndScreen.jsx";

export default function Question({ QUESTIONSDATA, changeScreen ,toChooseScreen}) {
    const [checked, setChecked] = useState([]);
    const [numQuestion, setnumQuestion] = useState(0);
    const listRef = useRef(null);
    const scrollToPosition = (position) => {
        if (listRef.current) {
            listRef.current.scrollTo({
                top: position,
                behavior: 'smooth' // Optional: Adds smooth scrolling effect
            });
        }
    };

    const handleCheck = (event) => {
        var updatedList = [...checked];
        var firstLetter = event.target.value[4];

        if (firstLetter === "f") {
            QUESTIONSDATA[event.target.value[0]].data[event.target.value[2]].check = true;
            QUESTIONSDATA[event.target.value[0]].checked = QUESTIONSDATA[event.target.value[0]].checked + 1;

            updatedList = [...checked, event.target.value[0]];
        } else {
            QUESTIONSDATA[event.target.value[0]].data[event.target.value[2]].check = false;
            QUESTIONSDATA[event.target.value[0]].checked = QUESTIONSDATA[event.target.value[0]].checked - 1;

            updatedList.splice(checked.indexOf(event.target.value[0]), 1);
        }
        setChecked(updatedList);
        console.log(checked);

    };


    function handleNextBtn() {

        scrollToPosition(-1000);
        setnumQuestion(numQuestion + 1);
    }
    function handleBackBtn() {
        scrollToPosition(-1000);
        setnumQuestion(numQuestion - 1);
    }
    function handleEndBtn() {
        changeScreen(checked);
    }
    function backToChoosePage(){
        toChooseScreen();
    }
    return <>

        <ul id="questionsArrayContainer" ref={listRef}>
            {QUESTIONSDATA.map((questions) =>

                <li >
                    <ul>
                        {numQuestion === questions.number ?
                            (questions.data).map((question, j) =>
                                <li >
                                    <div id="questionContainer">
                                        <input value={[questions.number, j, question.check]} onChange={handleCheck} checked={question.check} type="checkbox" />
                                        <span>{question.question}</span>
                                    </div>
                                </li>
                            ) : null}
                    </ul>
                </li>
            )}
        </ul>
        {numQuestion === 5 ?
            <div id="btnEnd" onClick={handleEndBtn} /> :
            <div id="btnNext" onClick={handleNextBtn} />
        }
        {numQuestion > 0 ? <div id="btnBack" onClick={handleBackBtn} /> : 
        <div id="btnBack" onClick={backToChoosePage} />
        }
    </>

}
