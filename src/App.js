import React, { Component } from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const multiDataSet = [
  {
    columns: ["", "", "", "", "", "", "", "Date:", "From", "To"],
    data: [
      [
        "",
        "SLA from date of pickup > delivery",
        "",
        "",
        "",
        "",
        "",
        "",
        "21/5/19	",
        "21/5/19"
      ]
    ]
  },
  {
    columns: [
      { title: "ID#", width: { wpx: 80 } }, //pixels width
      { title: "Courier name", width: { wch: 40 } }, //char width
      { title: "0_Days", width: { wpx: 90 } },
      { title: "Late", width: { wpx: 90 } },
      { title: "1_Days", width: { wpx: 90 } },
      { title: "Late", width: { wpx: 90 } },
      { title: "Total_on_time", width: { wpx: 90 } },
      { title: "2_days+", width: { wpx: 90 } },
      { title: "% in SLA", width: { wpx: 90 } },
      { title: "% out", width: { wpx: 90 } }
    ],
    data: [
      [
        { value: "50037" },
        { value: "Craig Urquhart Cooper" },
        { value: "35" },
        { value: "2" },
        { value: "40" },
        { value: "4" },
        { value: "75" },
        { value: "4" },
        { value: "93%" },
        {
          value: "7%"
        }
      ],
      [
        { value: "50039" },
        { value: "Alvin Rebong Sedo	" },
        { value: "55" },
        { value: "1" },
        { value: "42" },
        { value: "1" },
        { value: "97" },
        { value: "1" },
        { value: "98%" },
        {
          value: "2%"
        }
      ],
      [
        { value: "50040" },
        {
          value: "Rashid Mahmood Sajid Mahmood"
        },
        { value: "35" },
        { value: "2" },
        { value: "52" },
        { value: "1" },
        { value: "87" },
        { value: "1" },
        { value: "97%" },
        {
          value: "3%"
        }
      ],
      [
        { value: "50041" },
        {
          value: "Muhammad Amjad Ghulam Nabi"
        },
        { value: "62" },
        { value: "1" },
        { value: "45" },
        { value: "3" },
        { value: "107" },
        { value: "3" },
        { value: "96%" },
        {
          value: "4%"
        }
      ],
      [
        { value: "50042	" },
        { value: "Fazal Karim Zamir Khan" },
        { value: "54" },
        { value: "4" },
        { value: "41" },
        { value: "3" },
        { value: "95" },
        { value: "3" },
        { value: "93%" },
        {
          value: "7%"
        }
      ],
      [
        { value: "50043" },
        { value: "Kamran Alam" },
        { value: "46" },
        { value: "2" },
        { value: "51" },
        { value: "4" },
        { value: "91" },
        { value: "2" },
        { value: "72%" },
        {
          value: "9%"
        }
      ]
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ExcelFile
          filename="Courier_Record"
          element={
            <button style={{ padding: "25px 95px", fontSize: "35px" }}>
              Export Record
            </button>
          }
        >
          <ExcelSheet dataSet={multiDataSet} name="Record" />
        </ExcelFile>
      </div>
    );
  }
}

export default App;
