console.log("hello");

var map;
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
        gestureHandling : "none"
    });

    // Show the lat and lng under the mouse cursor.
    var coordsDiv = document.getElementById('coords');
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);
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
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
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
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
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
            strokeColor: '#C9F2C7',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillOpacity: 0
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
      map.data.add({geometry: new google.maps.Data.Polygon([a5Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a6Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a7Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a8Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a9Coords])});
      map.data.add({geometry: new google.maps.Data.Polygon([a10Coords])});

      var contentString1 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });

  var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });

    var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });

  var contentString4 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });

  var contentString5 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  });

  var contentString6 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
  });

  var contentString7 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
  });

  var contentString8 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var infowindow8 = new google.maps.InfoWindow({
    content: contentString8
  });

  var contentString9 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var infowindow9 = new google.maps.InfoWindow({
    content: contentString9
  });

  var contentString10 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
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


      // console.log(map.data.b.b[4]);
      // var plot1 = map.data.b.b[4];
      // // When the user clicks, set 'isColorful', changing the color of the letters.
      // // When the user hovers, tempt them to click by outlining the letters.
      // // Call revertStyle() to remove all overrides. This will use the style rules
      // // defined in the function passed to setStyle()
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
};

$(document).ready(function() {
  $('.plot').click(function() {
    let algR = plotData[event.target.id].removedAlgae;
    var remAlg = parseInt(algR.slice(0, 4))
    let algT = plotData[event.target.id].totalAlgae;
    var totAlg = parseInt(algT.slice(0, 4))
    // document.getElementById('infoImage').src = event.target.src;
    $("#infoHeader").text("WELCOME TO PLOT ALG" + (parseInt(event.target.id) + 1));
    $("#ownerText").text("THIS PLOT IS OWNED BY " + plotData[event.target.id].plotManagement);
    $("#amtRegistered").text(plotData[event.target.id].totalWorkers + ' people are currently registered');
    document.getElementById("progressVal").value = ((remAlg / totAlg) * 100);
    $('#progressPercentage').text('This plot is ' + Math.round(document.getElementById("progressVal").value) + '% complete!')
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
  }

  if(document.getElementById('creditsPopUp').style.display == "block") {
    $('#creditsPopUp').css("display", "none");
  }

  });
});
