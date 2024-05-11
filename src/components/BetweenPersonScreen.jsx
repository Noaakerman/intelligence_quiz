export default function BetweenPersonScreen({ myIntilligance, handleBackButton }) {
    var twoPlacesList = [1, 2];
    return <>
        <p className="intiligenceKind" style={{ color: `${myIntilligance.color}` }}>{myIntilligance.text[0]}</p>
        <div className="betweenContainer">
            <ul>
                {twoPlacesList.map((place, j) =>
                    <ul  className={j===0 ? "bubble firstBubble" : "bubble secondBubble"}>
                        {myIntilligance.text[place].map((line, i) =>
                            <li>
                                    {i === 0 ? <p className="betweenTitle">{line}</p> :
                                        <p className="betweenText">{line}</p>}
                            </li>)}
                    </ul>
                )} </ul>
        </div >
        <button id="btntoIntiligence" onClick={() => handleBackButton()}>חזור</button>

    </>
}