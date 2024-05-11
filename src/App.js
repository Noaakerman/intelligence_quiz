
import { useState } from "react";
import MainScreen from "./components/MainScreen.jsx";
import OpenScreenAnimation from "./components/OpenScreenAnimation.jsx";
import EndScreen from "./components/EndScreen.jsx";
import "./index.css";
import IntiligencePage from "./components/IntiligencePage.jsx";
import ChoosenPage from "./components/ChoosenPage.jsx";
import Menu from "./components/Menu.jsx";
function App() {

  const [currentScreen, setcurrentScreen] = useState(0);
  const [endList, setEndList] = useState([]);

  function changeScreenChoosen(toPage) {
    setcurrentScreen(toPage);
  }
  return <main id="openScreen">

    {/* <IntiligencePage></IntiligencePage> */}
    {currentScreen === 0 ?
      <OpenScreenAnimation changeScreen={() => {
        setcurrentScreen(1)
      }} /> :
      currentScreen === 1 ? <ChoosenPage changePage={(changeScreenChoosen)} /> :
        currentScreen === 2 ? <MainScreen changeScreen={() => {
          setcurrentScreen(3)
        }} changeToScreenPage={() => { setcurrentScreen(1) }} /> :
          currentScreen === 3 ?
            <><EndScreen updateList={endList} toIntiligencePage={() => {
              setcurrentScreen(4)

            }} />
              <Menu handleMenu={(changeScreenChoosen)} /></> :

            currentScreen === 4 ? <><IntiligencePage changeScreen={() => {
              setcurrentScreen(1);
            }} />  <Menu handleMenu={(changeScreenChoosen)} /></> :
              null
    }
  </main>

}

export default App;

