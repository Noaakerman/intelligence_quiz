import { useState } from "react";
// import "./intiligencs.css";

export default function LanguetScreen({ myIntilligance, handleBackButton }) {

    const myList =
        <ul className="ulLanguet">
            {myIntilligance.text.map((line,i) =>

                <li>
                    <ul>
                        {line.map((k, x) =>

                            <li>
                                <ul>
                                <li>
                                    {i>0 ?
                                    x === 0 ?<div className="languetTitle">{k}</div>
                                    :
                                    <div className="languetText">{k}</div>
                                    :null}</li>
                                </ul>

                            </li>

                        )}
                    </ul>
                </li>
            )}
        </ul >
    return <>
        <p className="intiligenceKind" style={{ color: `${myIntilligance.color}` }}>{myIntilligance.text[0]}</p>
        <div>
            {myList}
        </div >
        <button id="btntoIntiligence" onClick={() => handleBackButton()}>חזור</button>

    </>
}