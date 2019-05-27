const API_KEY = "7c5566ff889af86f32eb30f65ad63fea";
const COORDS = 'coords';

// 좌표저장 
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 좌표를 가져오는데 성공했을때를 처리하는 함수.
function handleGeoSucces(position) {
  //console.log(position.coords.latitude);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
   /* latitude: latitude,
    longitude: longitude, --> */
    latitude,
    longitude
  }; 
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log('Cant access...!')
}

function askForCoords() {
  // sue navigator API
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null) {
    askForCoords();
  } else {
    // get weater
  }
}

function init() {
  loadCoords();
}

init();