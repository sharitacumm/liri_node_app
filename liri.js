var axios = require("axios")

console.log("working");
function movie(){
    axios.get('http://www.omdbapi.com/?t=jaws&apikey=d1abf912').then(function (response) {

    console.log(response.data);
  })
  }

function bands(){
    axios.get("https://rest.bandsintown.com/artists/smino/events?app_id=codingbootcamp&date=upcoming").then(function (response) {

    console.log(response.data);
  })
}

function spotify(){
    var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id:  "c46fc08e125c4cddafe68989c9d152a7",
  secret: "f6dbd304e9954d01bfc06b608b6ab441",  
});
 
spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0].album.artists); 
});

}

if (process.argv[2] === "movie") {
    console.log("do movie stuff")
    movie()
}
else if (process.argv[2] === "songs") {
    console.log("do spotify stuff")
    spotify()
}
else if (process.argv[2] === "concerts") {
    console.log("do band stuff")
    bands()
}