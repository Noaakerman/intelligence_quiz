export default function MoveScreen({ myIntilligance, handleBackButton }) {
    var twoPlacesList = [1, 2];
    return <>
     <p className="intiligenceKind" style={{color :`${myIntilligance.color}`}}>{myIntilligance.text[0]}</p>
        <div className="backgroundMove opacityMove"></div>
        <div className="moveIntiligence">
            <ul className="moveContainer">
                {twoPlacesList.map((place, j) =>
                    <ul className="textMoveContainer">
                        {myIntilligance.text[place].map((line, i) =>
                            <li>
                                <div>
                                {i === 0 ? <p className="moveTitle">{line}</p> :
                                <p className="moveText">{line}</p>}
                                </div>
                            </li>)}
                    </ul>
                )} </ul>
        </div >
        <button id="btntoIntiligence" onClick={() => handleBackButton()}>חזור</button>

    </>
}