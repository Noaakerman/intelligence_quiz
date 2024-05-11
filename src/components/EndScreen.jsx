
import { QUESTIONSDATA } from "./dataQustion"
import { useState } from "react"
import BasicPie from "./PieChart.jsx";
import Question from "./Question.jsx";
import PieChart from "./PieChart.jsx";
export default function EndScreen({ updateList , toIntiligencePage}) {

    // cosnt [higgest, setHiggest]=useState([]);
    var updateMost = [0, 0];

    for (let i = 0; i < updateList.length; i++) {
        QUESTIONSDATA[updateList[i]].checked = QUESTIONSDATA[updateList[i]].checked + 1;
        console.log(QUESTIONSDATA[updateList[i]].checked);
    }
    console.log(QUESTIONSDATA.length);

    for (let j = 0; j < QUESTIONSDATA.length; j++) {

        if (QUESTIONSDATA[j].checked > updateMost[0]) {
            updateMost[0] = QUESTIONSDATA[j].number;
        }
        else if (QUESTIONSDATA[j].checked > updateMost[1]) {
            updateMost[1] = QUESTIONSDATA[j].number;

        }
    }
    console.log(updateMost);

    var textShadow1 = { "color": `${QUESTIONSDATA[updateMost[0]].color}` };
    var textShadow2 = { "color": `${QUESTIONSDATA[updateMost[1]].color}` };
    var opacity = { "opacity": "20%" };

    function intiligancePage() {
        toIntiligencePage();
    }

    return (<>
        <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
        </div>
        <span style={opacity} className="orangeDeco"></span>
        <span style={opacity} className="pinkDeco"></span>
        <h2 className="endTitle">תוצאות השאלון:</h2>
        <PieChart></PieChart>
       <p className="textIntiligence">רוצים לדעת יותר על האיטליגנציות?</p>
       <p className="whiteBackGround" onClick={intiligancePage}>לחץ כאן</p>
        {/* <button id="toIntiligancePage" onClick={intiligancePage}>לעמוד אינטלגנציות</button> */}
    </>
    )
}