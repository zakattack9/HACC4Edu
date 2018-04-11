let inputForms = $(".input75");
let numberForms = $(".input25");

let plotData = [
  {
    "totalAlgae" : "2385kg",
    "removedAlgae" : "1244kg",
    "totalWorkers" : "21",
    "plotManagement" : "Nyler Tichols"
  },
  {
    "totalAlgae" : "4469kg",
    "removedAlgae" : "3053kg",
    "totalWorkers" : "44",
    "plotManagement" : "Tylan Ducker"
  },
  {
    "totalAlgae" : "2551kg",
    "removedAlgae" : "1325kg",
    "totalWorkers" : "27",
    "plotManagement" : "Kavi Quintilian"
  },
  {
    "totalAlgae" : "2946kg",
    "removedAlgae" : "2756kg",
    "totalWorkers" : "54",
    "plotManagement" : "Ursula Thelonius"
  },
  {
    "totalAlgae" : "3589kg",
    "removedAlgae" : "3198kg",
    "totalWorkers" : "47",
    "plotManagement" : "Olavo Tai"
  },
  {
    "totalAlgae" : "3197kg",
    "removedAlgae" : "3182kg",
    "totalWorkers" : "59",
    "plotManagement" : "Lamia Aimé"
  },
  {
    "totalAlgae" : "2267kg",
    "removedAlgae" : "1455kg",
    "totalWorkers" : "19",
    "plotManagement" : "Erling Trúc"
  },
  {
    "totalAlgae" : "3410kg",
    "removedAlgae" : "2809kg",
    "totalWorkers" : "36",
    "plotManagement" : "Vinícius Éliane"
  },
  {
    "totalAlgae" : "4682kg",
    "removedAlgae" : "3651kg",
    "totalWorkers" : "45",
    "plotManagement" : "Eadgyð Marina"
  },
  {
    "totalAlgae" : "3646kg",
    "removedAlgae" : "1126kg",
    "totalWorkers" : "32",
    "plotManagement" : "Rasim Aparna"
  },
]

let randomPlot = Math.floor(Math.random() * plotData.length)
function randomPlotGrab () {
  return plotData[randomPlot];
}

// let data = $(".relevantStat");
//
// data[0].innerText = "Estimated Amount of Algae : " + plotData[randomPlot].totalAlgae;
// data[1].innerText = "Amount of Algae Removed : " + plotData[randomPlot].removedAlgae;
// data[2].innerText = "# of Workers : " + plotData[randomPlot].totalWorkers;
// data[3].innerText = "Manager: " + plotData[randomPlot].plotManagement;

let inputArr = $("#registerPlot input");
let formInfo = [];

let finishForm = () => {
  var check = 0;
  for (var i = 0; i < inputArr.length; i++){
    if (inputArr[i].value !== "") {
      check++
    }
  }
  if (check !== inputArr.length){
    alert("Please complete all required forms!");
  } else {
    formInfo.push(
      {
        "firstName" : "" + inputForms[0].value,
        "lastName" : "" + inputForms[1].value,
        "emailAddress" : "" + inputForms[2].value,
        "phoneNumber" : "" + numberForms[4].value + "-" + numberForms[5].value + "-" + numberForms[6].value,
        "Organization" : "" + inputForms[3].value
      }
    )
  }
}

let workInput = $("#submitInfo input");
let workInfo = [];

let finishWork = () => {
  var check = 0;
  for (var i = 0; i < workInput.length; i++) {
    if (workInput[i].value !== ""){
      check++
    }
  }
  if (check !== workInput.length) {
    alert("Please complete all required forms!");
  } else {
    workInfo.push(
      {
        "filledBags" : "" + workInput[0].value,
        "hoursWorked" : "" + workInput[1].value
      }
    )
  }
  console.log(workInfo)
}
