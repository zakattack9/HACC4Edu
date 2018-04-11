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

    var a2Coords = [
      {lat: 21.2807910, lng: -157.725034},
      {lat: 21.2806710, lng: -157.726034},
      {lat: 21.2785710, lng: -157.726034},
      {lat: 21.2785710, lng: -157.725034}
    ];

    var a3Coords = [
      {lat: 21.2810710, lng: -157.723034},
      {lat: 21.2807910, lng: -157.725034},
      {lat: 21.2785710, lng: -157.725034},
      {lat: 21.2785710, lng: -157.723034}
    ];

    var a4Coords = [
      {lat: 21.2824444, lng: -157.721934},
      {lat: 21.2810710, lng: -157.723034},
      {lat: 21.2785710, lng: -157.723034},
      {lat: 21.2785710, lng: -157.722034}
    ];

    var a5Coords = [
      {lat: 21.2840710, lng: -157.720634},
      {lat: 21.2824444, lng: -157.721934},
      {lat: 21.2785710, lng: -157.722034},
      {lat: 21.2805710, lng: -157.720034}
    ];

    var a6Coords = [
      {lat: 21.2831590, lng: -157.718334},
      {lat: 21.2840710, lng: -157.720634},
      {lat: 21.2805710, lng: -157.720034},
      {lat: 21.2799997, lng: -157.718334}
    ];

    var a7Coords = [
      {lat: 21.2822337, lng: -157.716034},
      {lat: 21.2831590, lng: -157.718334},
      {lat: 21.2799997, lng: -157.718334},
      {lat: 21.2792382, lng: -157.716034}
    ];

    var a8Coords = [
      {lat: 21.2814309, lng: -157.714034},
      {lat: 21.2822337, lng: -157.716034},
      {lat: 21.2792382, lng: -157.716034},
      {lat: 21.2785710, lng: -157.714034}
    ];

    var a9Coords = [
      {lat: 21.2806382, lng: -157.712034},
      {lat: 21.2814309, lng: -157.714034},
      {lat: 21.2785710, lng: -157.714034},
      {lat: 21.276710, lng: -157.712034}
    ];

    var a10Coords = [
      {lat: 21.2800689, lng: -157.710632},
      {lat: 21.2806382, lng: -157.712034},
      {lat: 21.2767100, lng: -157.712034},
      {lat: 21.2772928, lng: -157.709694}
    ];

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

      var contentString1 = '<div>'+
      '<embed src="register.html">'+
      '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });

  var contentString2 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });

    var contentString3 = '<div id="volunteerContainer">'+
    '<center><div>PLOT X</div></center>'+
    '<div id="registerPlot">'+
      '<form class="inputField" action="index.html" method="submit">'+
        '<p class="input25">First Name:</p>'+
        '<input class="input75" type="text" required>'+
        '<p class="input25">Last Name:</p>'+
        '<input class="input75" type="text" required>'+
        '<p class="input25">Email Address:</p>'+
        '<input class="input75" type="text" required>'+
        '<p class="input25">Phone Number:</p>'+
        '<input class="input25" type="text" maxlength="3">'+
        '<input class="input25" type="text" maxlength="3">'+
        '<input class="input25" type="text" maxlength="4">'+
        '<p class="input25">Organizations:</p>'+
        '<input class="input75" type="text">'+
      '</form>'+
      '<center>'+
        '<button onclick="finishForm()">SUBMIT</button>'+
      '</center>'+
      '<div>'+
      '</div>'+
    '</div>'+
    '</div>';

  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });

  var contentString4 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

  var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
  });

  var contentString5 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

  var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
  });

  var contentString6 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

  var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
  });

  var contentString7 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

  var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
  });

  var contentString8 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

  var infowindow8 = new google.maps.InfoWindow({
    content: contentString8
  });

  var contentString9 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

  var infowindow9 = new google.maps.InfoWindow({
    content: contentString9
  });

  var contentString10 = '<div id="volunteerContainer">'+
  '<center><div>PLOT X</div></center>'+
  '<div id="registerPlot">'+
    '<form class="inputField" action="index.html" method="submit">'+
      '<p class="input25">First Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Last Name:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Email Address:</p>'+
      '<input class="input75" type="text" required>'+
      '<p class="input25">Phone Number:</p>'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="3">'+
      '<input class="input25" type="text" maxlength="4">'+
      '<p class="input25">Organizations:</p>'+
      '<input class="input75" type="text">'+
    '</form>'+
    '<center>'+
      '<button onclick="finishForm()">SUBMIT</button>'+
    '</center>'+
    '<div>'+
    '</div>'+
  '</div>'+
  '</div>';

  var infowindow10 = new google.maps.InfoWindow({
    content: contentString10
  });

  // var marker1 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a1,
  //   map: map
  // });
  //
  // var marker2 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a2,
  //   map: map
  // });
  //
  // var marker3 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a3,
  //   map: map
  // });
  //
  // var marker4 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a4,
  //   map: map
  // });
  //
  // var marker5 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a5,
  //   map: map
  // });
  //
  // var marker6 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a6,
  //   map: map
  // });
  //
  // var marker7 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a7,
  //   map: map
  // });
  //
  // var marker8 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a8,
  //   map: map
  // });
  //
  // var marker9 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a9,
  //   map: map
  // });
  //
  // var marker10 = new google.maps.Marker({
  //   position: map.getCenter(),
  //   icon: a10,
  //   map: map
  // });

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map
    });

    marker.addListener('click', function() {
      infowindow1.open(map, marker);
    });

      console.log(map.data.b.b[4]);
      var plot1 = map.data.b.b[4];
      // When the user clicks, set 'isColorful', changing the color of the letters.
      // When the user hovers, tempt them to click by outlining the letters.
      // Call revertStyle() to remove all overrides. This will use the style rules
      // defined in the function passed to setStyle()
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
  // var gAlg = 0;
  // var rAlg = 0;
  // for (var i = 0; i < plotData.length; i++) {
  //   totalAlg = gAlg += parseInt(plotData[i].totalAlgae.slice(0, 4));
  //   totalRemoved = rAlg += parseInt(plotData[i].removedAlgae.slice(0, 4));
  //   valueBar = ((rAlg / gAlg) * 100);
  // }


  $('.plot').click(function() {
    let algR = plotData[event.target.id].removedAlgae;
    var remAlg = parseInt(algR.slice(0, 4))
    let algT = plotData[event.target.id].totalAlgae;
    var totAlg = parseInt(algT.slice(0, 4))
    $("#infoHeader").text("WELCOME TO PLOT ALG" + (parseInt(event.target.id) + 1));
    $("#secondaryHeader").text("ALG" + (parseInt(event.target.id) + 1));
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
