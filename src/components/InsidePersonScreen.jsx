export default function InsidePersonScreen({ myIntilligance, handleBackButton }) {
    var twoPlacesList = [2, 1];
    return <>
        <p className="intiligenceKind" style={{ color: `${myIntilligance.color}` }}>{myIntilligance.text[0]}</p>
        <div className="insidePersonContainer">
            <ul >
                {twoPlacesList.map((place, j) =>
                    <ul className={j===1 ?
                        "text1" : "text2"}>
                            <div className={j===1 ?
                        "brainPhoto" : null}></div>
                        {myIntilligance.text[place].map((line, i) =>
                            <li>
                                    {i === 0 ? <p className={j===0 ? "insideTitle insideTitle1" : "insideTitle"}>{line}</p> :
                                       i !== 3 ?  <p className="insideText">{line}</p>:null}
                            </li>)}
                    </ul>
                )} </ul>
        </div >
        <button id="btntoIntiligence" onClick={() => handleBackButton()}>חזור</button>

    </>
}