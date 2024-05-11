import { useState } from "react";

export default function ChoosenPage({ changePage }) {
    const [playAniamtion1, setPlayAnimation1] = useState({ animation: "buttonsAnimation 2s forwards infinite" })
    const [playAniamtion2, setPlayAnimation2] = useState({ animation: "buttonsAnimation 2s forwards infinite" })
    const [choosen, setChossen] = useState(false);
    const highOpacity = { animation: "highOpacity 2s" };
    function handleClickBtn(event) {
        if (!choosen) {
            setChossen(true);
            if (event.target.id === "toMain") {
            
                setPlayAnimation1({ animation: "playAnimation 2s forwards infinite" })

                setTimeout(() => {
                    changePage(2)
                    setChossen(false)
                }, 2000);

            }
            else if (event.target.id === "toIntiligence") {
               
                setPlayAnimation2({ animation: "playAnimation 2s forwards infinite" })
                setTimeout(() => {
                    setChossen(false)
                    changePage(4)
                }, 2000);
            }
        }
    }
    return <>

        <div style={highOpacity}>
        <span className="blueFrameBig"></span>
            <span className="orangeDeco"></span>
            <span className="pinkDeco"></span>
            <h2>במה תרצי/ה להתחיל?</h2>
            <div className="chossenbtnsConatiner" onClick={handleClickBtn}>
                <div className="toMain buttonsChoosePage">לשאלון</div>
                <div id="toMain" className="play1" style={playAniamtion1}></div>
                <div className="toIntiligence buttonsChoosePage" >לאינטיליגנציות</div>
                <div id="toIntiligence" className="play2" style={playAniamtion2}></div>

            </div></div>
    </>
}