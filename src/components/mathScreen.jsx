// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "./mathScreen.css";
export default function MathScreen({ myIntilligance, handleBackButton }) {
    var twoPlacesList = [1, 2];
    return <>
           {/* <div>mgsksljpewjmewpms</div>
        <p className="intiligenceKind" style={{ color: `${myIntilligance.color}` }}>{myIntilligance.text[0]}</p>
        <div className="mathContainer">

            {twoPlacesList.map((place, j) =>

                // {myIntilligance.text[place].map((line, i) =>

                <Flippy flipOnHover={true} flipDirection="horizontal" >
                    <FrontSide className="card fronSize">
                        <div className="container">
                            <ul>
                                <li>
                                    {myIntilligance.text[place].map((line, i) =>
                                        i === 0 ? <p className='mathTitle'>{line}</p> :
                                            null)} </li>
                            </ul>
                        </div>





                    </FrontSide>
                    <BackSide className="card backSize">
                        <div className="container">
                            <ul className='backSideUl'>
                                <li>
                                    {myIntilligance.text[place].map((line, i) =>
                                        i > 0? <p className='mathText'>{line}</p> :
                                        
                                        null)} </li>
                            </ul>

                            {/* <IconContext.Provider value={{ color: "#aab8c2",size:"1.6rem"}}>
            </IconContext.Provider> 
                        </div>

                    </BackSide>
                </Flippy>
            )}
     \
        </div> 
        {/* <p className="intiligenceKind" style={{ color: `${myIntilligance.color}` }}>{myIntilligance.text[0]}</p>
        {/* <div >
            <div>
                <ul className="mathTable">
                    {twoPlacesList.map((place, j) =>
                        <li>
                            <ul className="mathIntContainer">
                                {myIntilligance.text[place].map((line, i) =>
                                    <li className="mathLi">
                                        {i === 0 ? <p className="boldText">{line}</p> :
                                            <p className="lightText">{line}</p>}
                                    </li>)}
                            </ul>
                        </li>
                    )} </ul>
            </div>
        </div> */}
        {/* <div class="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">

                
                
                    <thead>
                        <tr>
                        <th>{myIntilligance.text[1][0]}</th>
                        <th>{myIntilligance.text[2][0]}</th>
                        </tr>
                    </thead>
              
            </table>
        </div>
        <div class="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">

                <tbody>
                    <tr >
                        <td>{myIntilligance.text[1][1]}</td>
                        <td>{myIntilligance.text[2][1]}</td>
                    </tr>
                    <tr >
                        <td>{myIntilligance.text[1][2]}</td>
                        <td>{myIntilligance.text[2][2]}</td>
                    </tr>
                    <tr >
                        <td>{myIntilligance.text[1][3]}</td>
                        <td>{myIntilligance.text[2][3]}</td>
                    </tr>
                    <tr >
                        <td></td>
                        <td>{myIntilligance.text[2][4]}</td>
                    </tr>

                </tbody>



            </table>
        </div>  */}
        {/* <table>
           
           {twoPlacesList.map((place, j) =>
            <tbody>
               <tr>
                   {myIntilligance.text[place].map((line, i) => {
                       i === 0 ? <th className="boldText">{line}</th> :
                       <td className="lightText">{line}</td>
                   }
                   )}


               </tr>
               </tbody>
           )}
    
   </table> */}
        {/* <button id="btntoIntiligence" onClick={() => handleBackButton()}>חזור</button> */}
    </>
}