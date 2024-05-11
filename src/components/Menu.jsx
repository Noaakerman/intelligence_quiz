import { useState } from "react";

export default function Menu({ handleMenu }) {
    const [menuClicked, setMenuClicked] = useState(false);
    const [animation1, setAnimation1] = useState('');
    const [animation2, setAnimation2] = useState(null);
    
    // const [currentPage, setCurrentPage]=useState();
    function clickedMenu() {
        if (menuClicked) {
            setAnimation1({ animation: "menuOut 1s forwards ease-in" });
            setAnimation2({ animation: "blackDivClear 1s forwards" });
            setTimeout(() => {
                setMenuClicked(false)
            }, 1000);
        } else {
            setAnimation1({ animation: "menuIn 1s forwards ease-in" });
            setAnimation2({ animation: "blackDivColor 1s forwards" });
            setMenuClicked(true)
        }
    }
    function handleClick(event) {
        if (event.target.id === "toQuestion") {
            handleMenu(2);
        } else if (event.target.id === "toIntiligance") {
            handleMenu(4);

        } else if (event.target.id === "toOdot") {
            handleMenu(5);
        }

    }



    return <>
        <div className="blackDiv" style={animation2}></div>
        <div className="btnMenu" onClick={clickedMenu}></div>
        {menuClicked ?
            <ul className="menuUl" style={animation1} onClick={handleClick}>
                <li id="toQuestion" className="menuLi firstLi">לשאלון</li>
                <li id="toIntiligance" className="menuLi">לאינטילגנציות</li>
                <li id="toOdot" className="menuLi">אודות</li>
            </ul> : null}
    </>
}