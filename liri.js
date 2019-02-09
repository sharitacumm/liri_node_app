var axios = require("axios")

console.log("working");
function movie(){
    axios.get('http://www.omdbapi.com/?t=jaws&apikey=d1abf912').then(function (response) {

    console.log(response.data);
  })
}

if (process.argv[2] === "movie") {
    console.log("do movie stuff")
    movie()
}
else if (process.argv[2] === "songs") {
    console.log("do spotify stuff")
}
else if (process.argv[2] === "concerts") {
    console.log("do band stuff")
}