console.log("hello");

var map, infoWindow;
var infoWindow1;
var infoWindow2;
var infoWindow3;
var infoWindow4;
var infoWindow5;
var infoWindow6;
var infoWindow7;
var infoWindow8;
var infoWindow9;
var infoWindow10;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 21.2770810,
            lng: -157.714234
        },
        zoom: 15.5,
        disableDefaultUI: true,
        mapTypeId : "satellite",
    });

    // Show the lat and lng under the mouse cursor.
    var coordsDiv = document.getElementById('coords');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(coordsDiv);
    map.addListener('mousemove', function(event) {
      coordsDiv.textContent =
          'lat: ' + event.latLng.lat() + ', ' +
          'lng: ' + event.latLng.lng();
    });

    var polyCoords = [
      {lat: 21.2772928, lng: -157.709694},
      {lat: 21.2800710, lng: -157.710634},
      {lat: 21.2820710, lng: -157.715634},
      {lat: 21.2840710, lng: -157.720634},
      {lat: 21.2810710, lng: -157.723034},
      {lat: 21.2805710, lng: -157.727034},
      {lat: 21.2785710, lng: -157.727034},
      {lat: 21.2785710, lng: -157.722034},
      {lat: 21.2805710, lng: -157.720034},
      {lat: 21.2785710, lng: -157.714034},
      {lat: 21.276710, lng: -157.712034}
    ];

    // Zone Total
    var zone = new google.maps.Polygon({
      paths: polyCoords,
      strokeColor: '#2FBF71',
      strokeOpacity: 0.8,
      strokeWeight: 5,
      fillColor: '#0D3B66',
      fillOpacity: 0.35
    });
    zone.setMap(map);

    var a1Coords = [
      {lat: 21.2806710, lng: -157.726034},
      {lat: 21.2805710, lng: -157.727034},
      {lat: 21.2785710, lng: -157.727034},
      {lat: 21.2785710, lng: -157.726034}
    ];

    var a1 = new google.maps.Polygon({
            paths: a1Coords,
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
          });
      a1.setMap(map);

    var a2Coords = [
      {lat: 21.2807910, lng: -157.725034},
      {lat: 21.2806710, lng: -157.726034},
      {lat: 21.2785710, lng: -157.726034},
      {lat: 21.2785710, lng: -157.725034}
    ];

    var a2 = new google.maps.Polygon({
            paths: a2Coords,
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
          });
      a2.setMap(map);

    var a3Coords = [
      {lat: 21.2810710, lng: -157.723034},
      {lat: 21.2807910, lng: -157.725034},
      {lat: 21.2785710, lng: -157.725034},
      {lat: 21.2785710, lng: -157.723034}
    ];

    var a3 = new google.maps.Polygon({
            paths: a3Coords,
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
          });
      a3.setMap(map);

    var a4Coords = [
      {lat: 21.2824444, lng: -157.721934},
      {lat: 21.2810710, lng: -157.723034},
      {lat: 21.2785710, lng: -157.723034},
      {lat: 21.2785710, lng: -157.722034}
    ];

    var a4 = new google.maps.Polygon({
            paths: a4Coords,
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
          });
      a4.setMap(map);

    var a5Coords = [
      {lat: 21.2840710, lng: -157.720634},
      {lat: 21.2824444, lng: -157.721934},
      {lat: 21.2785710, lng: -157.722034},
      {lat: 21.2805710, lng: -157.720034}
    ];

    var a5 = new google.maps.Polygon({
            paths: a5Coords,
            strokeColor: 'red',
            strokeOpacity: 0.8,
            strokeWeight: 5,
            fillColor: 'red',
            fillOpacity: 0.35
          });
      a5.setMap(map);

    var a6Coords = [
      {lat: 21.2831590, lng: -157.718334},
      {lat: 21.2840710, lng: -157.720634},
      {lat: 21.2805710, lng: -157.720034},
      {lat: 21.2799997, lng: -157.718334}
    ];

    var a6 = new google.maps.Polygon({
            paths: a6Coords,
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
          });
      a6

      .setMap(map);

    var a7Coords = [
      {lat: 21.2822337, lng: -157.716034},
      {lat: 21.2831590, lng: -157.718334},
      {lat: 21.2799997, lng: -157.718334},
      {lat: 21.2792382, lng: -157.716034}
    ];

    var a7 = new google.maps.Polygon({
            paths: a7Coords,
            strokeColor: 'red',
            strokeOpacity: 0.8,
            strokeWeight: 5,
            fillColor: 'red',
            fillOpacity: 0.35
          });
      a7.setMap(map);

    var a8Coords = [
      {lat: 21.2814309, lng: -157.714034},
      {lat: 21.2822337, lng: -157.716034},
      {lat: 21.2792382, lng: -157.716034},
      {lat: 21.2785710, lng: -157.714034}
    ];

    var a8 = new google.maps.Polygon({
            paths: a8Coords,
            strokeColor: 'red',
            strokeOpacity: 0.8,
            strokeWeight: 5,
            fillColor: 'red',
            fillOpacity: 0.35
          });
      a8.setMap(map);

    var a9Coords = [
      {lat: 21.2806382, lng: -157.712034},
      {lat: 21.2814309, lng: -157.714034},
      {lat: 21.2785710, lng: -157.714034},
      {lat: 21.276710, lng: -157.712034}
    ];

    var a9 = new google.maps.Polygon({
            paths: a9Coords,
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
          });
      a9.setMap(map);

    var a10Coords = [
      {lat: 21.2800689, lng: -157.710632},
      {lat: 21.2806382, lng: -157.712034},
      {lat: 21.2767100, lng: -157.712034},
      {lat: 21.2772928, lng: -157.709694}
    ];

    var a10 = new google.maps.Polygon({
            paths: a10Coords,
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
          });
      a10.setMap(map);

      map.data.add({geometry: new google.maps.Data.Polygon([a1Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a2Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a3Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a4Coords])});
      // map.data.add({geometry: new google.maps.Data.Polygon([a5Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a6Coords])});
      // map.data.add({geometry: new google.maps.Data.Polygon([a7Coords])});
      // map.data.add({geometry: new google.maps.Data.Polygon([a8Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a9Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a10Coords])});

      var contentString1 = '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Plot A1</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Plot A1</b> is currently managed by <b>Tatteus Greene</b>, and is one of the largest plots in the bay. ' +
        'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
        '<p>REGISTER HERE: <a href="register.html" class="registerLink">Plot A1</a> '+
        '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });

  var contentString2 = '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Plot A2</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Plot A2</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
    'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
    '<p>REGISTER HERE: <a href="register.html" class="registerLink">Plot A2</a> '+
    '</div>';

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });

    var contentString3 = '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Plot A3</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Plot A3</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
      'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
      '<p>REGISTER HERE: <a href="register.html" class="registerLink">Plot A3</a> '+
      '</div>';

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });

  var contentString4 = '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Plot A4</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Plot A4</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
    'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
    '<p>REGISTER HERE: <a href="register.html" class="registerLink">Plot A4</a> '+
    '</div>';
  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });

  var contentString5 = '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Plot A5</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Plot A5</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
    'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
    '<p>Work Log: <a href="log.html" class="registerLink">Plot A5</a> '+
    '</div>';

    var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
    });

    var contentString6 = '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Plot A6</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Plot A6</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
      'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
      '<p>REGISTER HERE: <a href="register.html" class="registerLink">Plot A6</a> '+
      '</div>';

  var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
  });

  var contentString7 = '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Plot A7</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Plot A7</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
    'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
    '<p>Work Log: <a href="log.html" class="registerLink">Plot A7</a> '+
    '</div>';

  var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
  });

  var contentString8 = '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Plot A8</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Plot A8</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
    'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
    '<p>Work Log: <a href="log.html" class="registerLink">Plot A8</a> '+
    '</div>';

  var infowindow8 = new google.maps.InfoWindow({
    content: contentString8
  });

  var contentString9 = '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Plot A9</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Plot A9</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
    'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
    '<p>REGISTER HERE: <a href="register.html" class="registerLink">Plot A9</a> </p>'+
    '</div>';
  var infowindow9 = new google.maps.InfoWindow({
    content: contentString9
  });

  var contentString10 = '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Plot A10</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Plot A10</b> is currently managed by <b>Nyler Tichols</b>, and is one of the largest plots in the bay. ' +
    'The plot is about 33% clean right now because of the efforts of the manager and numerous volunteers. </p>'+
    '<p>REGISTER HERE: <a href="register.html" class="registerLink">Plot A10</a> '+
    '</div>';

  var infowindow10 = new google.maps.InfoWindow({
    content: contentString10
  });

  var marker1 = new google.maps.Marker({
     position: {lat: 21.2795710, lng: -157.726434},
//     icon: a1,
     map: map
   });

   var marker2 = new google.maps.Marker({
     position: {lat: 21.2795710, lng: -157.725434},
//     icon: a2,
     map: map
   });

   var marker3 = new google.maps.Marker({
     position: {lat: 21.2795710, lng: -157.723934},
//     icon: a3,
     map: map
   });

   var marker4 = new google.maps.Marker({
     position: {lat: 21.2800710, lng: -157.722634},
//     icon: a4,
     map: map
   });

   var marker5 = new google.maps.Marker({
     position: {lat: 21.2808710, lng: -157.721234},
//     icon: a5,
     map: map
   });

   var marker6 = new google.maps.Marker({
     position: {lat: 21.2815710, lng: -157.719234},
//     icon: a6,
     map: map
   });

   var marker7 = new google.maps.Marker({
     position: {lat: 21.2810710, lng: -157.717234},
//     icon: a7,
     map: map
   });

   var marker8 = new google.maps.Marker({
     position: {lat: 21.2803710, lng: -157.715234},
//     icon: a8,
     map: map
   });

   var marker9 = new google.maps.Marker({
     position: {lat: 21.2794710, lng: -157.713134},
//     icon: a9,
     map: map
   });

   var marker10 = new google.maps.Marker({
     position: {lat: 21.2786710, lng: -157.711134},
//     icon: a10,
     map: map
   });

   marker1.addListener('click', function() {
     infowindow1.open(map, marker1);
   });

   marker2.addListener('click', function() {
     infowindow2.open(map, marker2);
   });

   marker3.addListener('click', function() {
     infowindow3.open(map, marker3);
   });

   marker4.addListener('click', function() {
     infowindow4.open(map, marker4);
   });

   marker5.addListener('click', function() {
     infowindow5.open(map, marker5);
   });

   marker6.addListener('click', function() {
     infowindow6.open(map, marker6);
   });

   marker7.addListener('click', function() {
     infowindow7.open(map, marker7);
   });

   marker8.addListener('click', function() {
     infowindow8.open(map, marker8);
   });

   marker9.addListener('click', function() {
     infowindow9.open(map, marker9);
   });

   marker10.addListener('click', function() {
     infowindow10.open(map, marker10);
   });
   map.data.addListener('mouseover', function(event) {
     map.data.revertStyle();
     map.data.overrideStyle(event.feature, {strokeWeight: 8});
   });

   map.data.addListener('mouseout', function(event) {
     map.data.revertStyle();
   });

   map.data.setStyle(function(feature) {
     var color = '#C9F2C7';
     if (feature.getProperty('isColorful')) {
       color = feature.getProperty('color');
     }
     return /** @type {google.maps.Data.StyleOptions} */({
       strokeColor: color,
       strokeWeight: 1,
       strokeOpacity: 0.98,
     });
   });

   infoWindow = new google.maps.InfoWindow;

   // Try HTML5 geolocation.
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       var pos = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       };

       infoWindow.setPosition(pos);
       infoWindow.setContent('Location found.');
       infoWindow.open(map);
     }, function() {
       handleLocationError(true, infoWindow, map.getCenter());
     });
   } else {
     // Browser doesn't support Geolocation
     handleLocationError(false, infoWindow, map.getCenter());
   }
 }

 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
   infoWindow.setPosition(pos);
   infoWindow.setContent(browserHasGeolocation ?
                         'Error: The Geolocation service failed.' :
                         'Error: Your browser doesn\'t support geolocation.');
   infoWindow.open(map);
 }

$(document).ready(function() {
  var gAlg = 0;
  var rAlg = 0;
  for (var i = 0; i < plotData.length; i++) {
    totalAlg = gAlg += parseInt(plotData[i].totalAlgae.slice(0, 4));
    totalRemoved = rAlg += parseInt(plotData[i].removedAlgae.slice(0, 4));
    valueBar = ((rAlg / gAlg) * 100);
  }
  $("#statContainer h3")[0].innerText = "" + rAlg + "kgs out of " + gAlg + "kgs of algie have been removed!";
  $("#statContainer h3")[3].innerText = plotData.length + " plots in total have been launched and volunteered for!";
  $("#progressTot")[0].value = valueBar


  // $('.plotItem').click(function() {
  //   let algR = plotData[event.target.id].removedAlgae;
  //   var remAlg = parseInt(algR.slice(0, 4))
  //   let algT = plotData[event.target.id].totalAlgae;
  //   var totAlg = parseInt(algT.slice(0, 4))
  //   console.log(event.target.src)
  //   document.getElementById('infoImage').src = event.target.src;
  //   $("#infoHeader").text("WELCOME TO PLOT ALG" + (parseInt(event.target.id) + 1));
  //   $("#ownerText").text("THIS PLOT IS OWNED BY " + plotData[event.target.id].plotManagement);
  //   $("#amtRegistered").text(plotData[event.target.id].totalWorkers + ' people are currently registered');
  //   document.getElementById("progressVal").value = ((remAlg / totAlg) * 100);
  //   $('#progressPercentage').text('This plot is ' + Math.round(document.getElementById("progressVal").value) + '% complete!')
  //   $('#plotPopUp').css("display", "block");
  //   $('#plotContainer').css("filter", "blur(5px)");
  // });

  $('.plotItem').click(function() {
    console.log(this);
    $('#plotPopUp').css("display", "block");
    $('#plotPopTitle')[0].innerHTML = $(this).find('.plotText').find('.plotTitle')[0].innerText + " Info:";

    let getNumber = $(this).find('.plotText').find('.plotTitle')[0].innerText.slice(-1);
    $.getScript('./scripts/register.js', function() {
        let barPercentage = (+plotData[getNumber].removedAlgae.substring(0, 4) / +plotData[getNumber].totalAlgae.substring(0, 4)) * 100;
        console.log(barPercentage * 100)

        $('#plotManager')[0].innerHTML = plotData[getNumber].plotManagement;
        $('#totalWorkers')[0].innerHTML = plotData[getNumber].totalWorkers;
        $('#innerData')[0].style.width = barPercentage + "%";
        $('#cleanRatio')[0].innerHTML = plotData[getNumber].removedAlgae + " / " + plotData[getNumber].totalAlgae + " of Algae Cleaned";
    });
  });

  $('#closePop').on('click', function() {
    $('#plotPopUp').css("display", "none");
  })

  $('#creditsButton').click(function() {
    $('#creditsPopUp').css("display", "block");
  });

  $('.menuClose').click(function() {
    if(document.getElementById('plotPopUp').style.display == "block") {
      $('#plotPopUp').css("display", "none");
      $('#plotContainer').css("filter", "blur(0px)");
    }

    if(document.getElementById('creditsPopUp').style.display == "block") {
      $('#creditsPopUp').css("display", "none");
    }

  });

  $('#overlayOpen').on('click', function() {
    $('#sideNav')[0].style.width = "300px";
  })

  $('#closeNav').on('click', function() {
    $('#sideNav')[0].style.width = "0";
  })
});
