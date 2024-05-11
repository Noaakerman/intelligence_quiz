import { QUESTIONSDATA } from "./dataQustion";
import { useState } from "react";
import MathScreen from "./mathScreen";
import VisualScreen from "./VisualScreen";
import MoveScreen from "./MoveScreen";
import BetweenPersonScreen from "./BetweenPersonScreen";
import InsidePersonScreen from "./InsidePersonScreen";
import LanguetScreen from "./LanguetScreen";

export default function Intiligence({ chosenIntilligence, backToScreen }) {

    const [ifBack, setIfBack] = useState(false)
    var twoPlacesList = [1, 2];
    var myIntilligance = [];
    for (let i = 0; i < QUESTIONSDATA.length; i++) {
        if (QUESTIONSDATA[i].kind === chosenIntilligence) {
            myIntilligance = QUESTIONSDATA[i];
            console.log(myIntilligance.text[1])
        }
    }
    var circleStyle = {
        backgroundColor: myIntilligance.color,
        boxShadow: `0px 0px 20px ${myIntilligance.color}, 0px 0px 5px #614ad3`,
        animation: "circleAnimation 2s"
    }

    function handleBackButton() {
        setIfBack(true);
        backToScreen();
    }

    return <>
        {/* <span style={ifBack ? { animation: "blueFrameSmaller 2s  alternate" } : { animation: "blueFrameBiger 2s  alternate" }} class="blueFrameBigFront"></span>
        <img className="intiliiganceBackground"
        style={ifBack ? { animation: "lowOpacity 1.5s forwards" } : {  animation: "highOpacity 1.5s forwards"}}
        src={require(`../assets/screens/${myIntilligance.number}.png`)} />  */}
        {/* {/* <div className="intiliiganceBackground" style={{backgroundImage : `url("./assets/screens/${myIntilligance.number}.png")`}}></div> */}
        {myIntilligance.number === 0 ?
            <MathScreen myIntilligance={myIntilligance} handleBackButton={handleBackButton} /> :
            myIntilligance.number === 1 ?
                <VisualScreen myIntilligance={myIntilligance} handleBackButton={handleBackButton} />
                : myIntilligance.number === 2 ?
                    <MoveScreen myIntilligance={myIntilligance} handleBackButton={handleBackButton} />
                    : myIntilligance.number === 3 ?
                        <BetweenPersonScreen myIntilligance={myIntilligance} handleBackButton={handleBackButton} />
                        : myIntilligance.number === 4 ?
                            <InsidePersonScreen myIntilligance={myIntilligance} handleBackButton={handleBackButton} /> :
                            <LanguetScreen myIntilligance={myIntilligance} handleBackButton={handleBackButton} />}
        <button id="btntoIntiligence" onClick={() => handleBackButton()}>חזור</button>



    </>
}