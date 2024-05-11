export default function VisualScreen({ myIntilligance, handleBackButton }) {
    var twoPlacesList = [1, 2];
    const tieAnimation = "tieAnimation 2s infinite";
    const handAnimation= "handAnimation 2s infinite";
    return <>

        <p className="intiligenceKind" style={{ color: `${myIntilligance.color}` }}>{myIntilligance.text[0]}</p>
        <div className="visualIntiligence">
            <ul className="visualContainer">
                {twoPlacesList.map((place, j) =>
                    <ul>
                        {myIntilligance.text[place].map((line, i) =>
                            <li>
                                <div>
                                    {i === 0 ? <p className="title">{line}</p> :
                                        <div className="visualTextContainer">
                                            <p className={
                                                i === 1 && j === 0 ? "shadow" : i === 3 && j === 0 ? "orange" : "bold"}
                                            >{line}</p>
                                            {j === 0 && i === 2 || j === 0 && i === 3 ?
                                                <img className="imgStyle" src={i === 2 ? require(`../assets/screens/tie.png`) : require(`../assets/screens/hand.png`)}
                                                    style={i === 2 ? { animation:"tieAnimation 2s infinite" , position:"absolute",left:"5%"} : { animation: "handAnimation 4s infinite" , position:"absolute",left:"12%"}} />
                                                : null}
                                        </div>}
                                </div>
                            </li>)}
                    </ul>
                )} </ul>
        </div >
        <button id="btntoIntiligence" onClick={() => handleBackButton()}>חזור</button>

    </>
}