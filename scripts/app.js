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
    console.log('test')
    $('#plotPopUp').css("display", "block");
  });

  $('.menuClose').click(function() {
    $('#plotPopUp').css("display", "none");
  });

});
