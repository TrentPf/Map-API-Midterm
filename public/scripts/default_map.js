/* eslint-disable no-undef */
/* eslint-disable func-style */
// Initialize and add the map
// eslint-disable-next-line func-style
function initMap() {

  //CREATES MAP OBJECT ON PAGE LOAD
  const map = new google.maps.Map(document.getElementById("map"));
  //GETS USER LOCATION AND RENDERS MAP TO THAT LOCATION
  navigator.geolocation.getCurrentPosition(function(position) {
    // Center on user's current location if geolocation prompt allowed
    let initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(initialLocation);
    map.setZoom(8);
  }, function(positionError) {
    // User denied geolocation prompt - default to overview of world
    map.setCenter(new google.maps.LatLng(0, 0));
    map.setZoom(2);
  });

  //ON CLICK CALLS PLACEMARKER WITH CLICK LOCATION ON MAP
  map.addListener('click', function(e) {
    placeMarker(e.latLng, map); //the placeMarker function takes in two parameters - the lat and lng of where the click was - and the map that it is being placed on
  });

  //PLACE MARKER FUNCTION
  function placeMarker(position, map) {
    let marker = new google.maps.Marker({ //the marker itself takes in an object - that has a key value pair of the position and the map
      position: position,                 //the position is set to the position passed in when clicked - and the map is passed in the map variable that we define
      map: map                            //earlier on line 8
    });
    map.panTo(position);
    //when a marker is placed adds a listener for a doubleclick which will then bring up the button's infowindow with an add content button inside
    marker.addListener('dblclick', function() {
      let infoWindow = new google.maps.InfoWindow({
        content: `<button>Add Content</button> `
      });
      infoWindow.open(map, marker);
      });
  }

}



//so initMap() is a function where we set a variable called map
//and set it to a new google map object
//to get the map we just do new google.maps.Map

//and the .Map function takes two parameters, the map element and then our options
//which can be zoom, center, lat and long of where we want it to render
//
