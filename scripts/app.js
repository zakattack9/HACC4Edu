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
    $('#plotPopUp').css("display", "block");
    $('#plotContainer').css("filter", "blur(5px)");
  });

  $("#alg1").click(function() {
    $("#plotPopUp").find("#infoHeader").text('WELCOME TO PLOT ALG1');
    $("#plotPopUp").find("#secondaryHeader").text('ALG1');
    $("#plotPopUp").find("#ownerText").text('OWNED BY NYLER TICHOLS');
    $("#plotPopUp").find("#amtRegistered").text('62 PEOPLE ARE CURRENTLY REGISTERED');
  });

  $("#alg2").click(function() {
    $("#plotPopUp").find("#infoHeader").text('WELCOME TO PLOT ALG2');
    $("#plotPopUp").find("#secondaryHeader").text('ALG2');
    $("#plotPopUp").find("#ownerText").text('OWNED BY TYLAN DUCKER');
    $("#plotPopUp").find("#amtRegistered").text('23 PEOPLE ARE CURRENTLY REGISTERED');
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
