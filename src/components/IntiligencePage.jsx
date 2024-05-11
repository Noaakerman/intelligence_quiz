import { QUESTIONSDATA } from "./dataQustion";
import { useState } from "react";
import Intiligence from './Intiligence.jsx';
import Menu from "./Menu.jsx";
export default function IntiligencePage({changeScreen}) {

    const [chosenIntilligence, setChosenIntilligence] = useState('');
    const [ifChosen, setIfChosen] = useState(false);
    
    var circleStyleAnimation={};

    function handleClick(event) {
        console.log(event.target.id);
        for (let i = 0; i < QUESTIONSDATA.length; i++) {
            if (event.target.id === QUESTIONSDATA[i].kind) {
                setChosenIntilligence(QUESTIONSDATA[i].kind);
                setIfChosen(true);
                circleStyleAnimation= {
                    animation : "circleAnimation 2s infinite",
                    backgroundColor: QUESTIONSDATA[i].color
                };
            }
        }

    }

    function backToScreen(){
        setIfChosen(false);
    }

    return <>
    {/* <Menu></Menu> */}
     <span class="blueFrameBig"></span>
        {!ifChosen ?
            <div class="listIntiligence">
                <h2>איזו אינטלגנציה מעניינת אותך?</h2>
                <ul id="intiligenceListContainer" >
                    {QUESTIONSDATA.map((questions, j) =>
                        <li key={j} onClick={handleClick}>
                            <span id={questions.kind} className="circleIntiligence" style={{ backgroundColor: questions.color }}></span>
                            <h4 id={questions.kind}>{questions.kind}</h4>
                        </li>
                    )}
                </ul>
                {/* <button onClick={changeScreen}>לדף הראשי</button> */}
            </div>
            :
            <Intiligence chosenIntilligence={chosenIntilligence} backToScreen={backToScreen} />}
    </>
}