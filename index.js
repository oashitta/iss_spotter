
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

});

fetchCoordsByIP('173.35.87.136', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

fetchISSFlyOverTimes({ latitude: '43.653226', longitude: '-79.3831843' }, (error, parsedFlyOverTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('it worked! Returned the following flyover times: ' , parsedFlyOverTimes);
});


