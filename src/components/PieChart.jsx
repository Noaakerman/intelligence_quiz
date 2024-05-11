
// import "./pieChart.css"
import { QUESTIONSDATA } from "./dataQustion";
// //[4,5]
// export default function PieChart({ updateMost }) {
//   const firstNum = updateMost[0];
//   const secondNum = updateMost[1];

//   console.log(firstNum);
//   console.log(secondNum);
//   const borderStyle1 = { "backgroundColor": `${QUESTIONSDATA[firstNum].color} ` };
//   const borderStyle2 = { "backgroundColor": `${QUESTIONSDATA[secondNum].color}  ` };
//   // console.log(`border-color:${QUESTIONSDATA[firstNum].color}`);
//   // const borderStyle2= (`border-color:${QUESTIONSDATA[secondNum].color};`);

//   // const listData=updateMost;
//   function sliceSize(dataNum, dataTotal) {
//     return (dataNum / dataTotal) * 360;
//   }

//   var slice1 = sliceSize(QUESTIONSDATA[firstNum].checked, 10);
//   var slice2 = sliceSize(QUESTIONSDATA[secondNum].checked, 10);
//   console.log(updateMost[1]);
//   console.log(firstNum,secondNum)
//   console.log(slice1,slice2,"hi")

//   const rotation1 = {
//     transform: "rotate(" + (slice1)+ "deg) translate3d(0,0,0)"
//   }
//   const rotation2 = {
//     transform: "rotate(" + (-179+slice2)+  "deg) translate3d(0,0,0)"
//   }
// const color2 ={"backgroundColor": `${QUESTIONSDATA[secondNum].color}`};
// const color1 ={"backgroundColor": `${QUESTIONSDATA[firstNum].color}`};

// return <>
//     <div id="pieChart" className="pie-chart__pie">
//       <div id="color1" className="slice" style={rotation1}><span style={color1}></span></div>
//       <div id="color2" className="slice" style={rotation2}><span style={color2}></span></div>
//     </div>
//   </>
// }
import React from "react";
import { Chart } from "react-google-charts";



export default function PieChart() {
    console.log(QUESTIONSDATA[0].checked)
    const data = [
        ["Task", "Hours per Day"],
        [`${QUESTIONSDATA[0].kind}`, QUESTIONSDATA[0].checked],
        [`${QUESTIONSDATA[1].kind}`, QUESTIONSDATA[1].checked],
        [`${QUESTIONSDATA[2].kind}`, QUESTIONSDATA[2].checked],
        [`${QUESTIONSDATA[3].kind}`, QUESTIONSDATA[3].checked],
        [`${QUESTIONSDATA[4].kind}`, QUESTIONSDATA[4].checked],
        [`${QUESTIONSDATA[5].kind}`, QUESTIONSDATA[5].checked],

    ];
  
    const options = {
 
        colors: [
            `${QUESTIONSDATA[0].color}`,
            `${QUESTIONSDATA[1].color}`,
            `${QUESTIONSDATA[2].color}`,
            `${QUESTIONSDATA[3].color}`,
            `${QUESTIONSDATA[4].color}`,
            `${QUESTIONSDATA[5].color}`],
        backgroundColor: "transparent",
        legend: "none",
    };

    return (<>
        <ul className="pieUl" >
            {QUESTIONSDATA.map((option,i) =>
                <li className="pieLi">
                    <span className="circle" style={{backgroundColor : QUESTIONSDATA[i].color}}></span>
                    <span className="intiliganceNameCircle" >
                        {QUESTIONSDATA[i].kind}
                    </span>
                </li>
                )}
        </ul>
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"60%"}
            className="pieChartStyle"
        /></>
    )
}