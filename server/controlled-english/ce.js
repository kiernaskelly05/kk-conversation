var csv = require('fast-csv');
var fs = require('fs');

var planets = [];

var counter = 0;

csv
    .fromStream(fs.createReadStream("planets.csv"), {
        headers: true
    })
    .on("data", function (row) {
        // console.log('new row');
        // console.log(row);
        if (counter < 30) {
            planets.push(row);
        }
        counter++;
    })
    .on("end", function () {
        // console.log(planets);
        doStuff(planets);
        // writeFile(JSON.stringify(planets));
    });

/*function doStuff(planets) {
    console.log(planets);
}*/

function writeFile(json) {
    fs.writeFile('myplanets.json', json, 'utf8', function () {
        console.log('done writing json file');
    });
}

/*function doStuff(planets) {
    for(var i=0; i < planets.length; i++) {
        var planet = planets[i];
        console.log(planet["pl_hostname"] + ' ' + planet["pl_letter"]);
    } */


// planets is an array of objects
// each object contains the data for a single planet
/*function doStuff(planets) {
    var nImaging = 0;
    for (var j = 0; j < planets.length; j++) {
        var planet = planets[j];
        if (planet["pl_discmethod"] === "imaging") {
            nImaging = nImaging + 1;
        }
    }
    console.log(nImaging);
}*/

//I want to find the amount of star systems with pl_pnum >= 3

// if in order - this works
/*function doStuff(planets) {
    //start of function with 3 or more planets of star system
    var threePlanets = 0;
    //collect all the planets data one by one

    var starsystem;

    for (var k = 0; k < planets.length; k++) {
        var planet = planets[k];
        if (planet["pl_pnum"] >= 3) {
            if (planet["pl_hostname"] !== starsystem) {
                starsystem = (planet["pl_hostname"]);
                //if the planet number is greater than or equal to 3....add one to the variable
                threePlanets = threePlanets + 1;
                //print it here
            }
        }
    }
    console.log(threePlanets)
}*/

// if not in order - this works
function doStuff(planets) {
    var starsystem = [];
    for (var k = 0; k < planets.length; k++) {
        var planet = planets[k];
        // does the planetary system have more than 3 planets?
        if (planet["pl_pnum"] >= 3) {
            // is the hostname in the array?
            if ( starsystem.indexOf(planet["pl_hostname"]) === -1) {
                // add the host name to the array if we've never seen it before
                starsystem.push(planet["pl_hostname"]);
            }
        }
    }
    console.log(starsystem);
    console.log(starsystem.length);
}
