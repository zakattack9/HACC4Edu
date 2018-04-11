console.log("hello");

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 10,
        mapTypeId : "satellite",
        disableDefaultUI: true,
        gestureHandling: 'none'
    });
};

$(document).ready(function() {
  $('.plot').click(function() {
    let algR = plotData[event.target.id].removedAlgae;
    var remAlg = parseInt(algR.slice(0, 4))
    let algT = plotData[event.target.id].totalAlgae;
    var totAlg = parseInt(algT.slice(0, 4))
    $("#infoHeader").text("WELCOME TO PLOT ALG" + event.target.id);
    $("#secondaryHeader").text("ALG" + event.target.id);
    $("#ownerText").text("OWNED BY " + plotData[event.target.id].plotManagement);
    $("#amtRegistered").text(plotData[event.target.id].totalWorkers);
    document.getElementById("progressVal").value = ((remAlg / totAlg) * 100);
    $('#plotPopUp').css("display", "block");
    $('#plotContainer').css("filter", "blur(5px)");
  });

  $('#creditsButton').click(function() {
    $('#creditsPopUp').css("display", "block");
  });

  $('.menuClose').click(function() {
    if(document.getElementById('plotPopUp').style.display == "block") {
    $('#plotPopUp').css("display", "none");
    $('#plotContainer').css("filter", "blur(0px)");
  } else if(document.getElementById('creditsPopUp').style.display == "block") {
    $('#creditsPopUp').css("display", "none");
  }

  });
});
