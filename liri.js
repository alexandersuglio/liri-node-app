
// var twitter = require("twitter");
// var request = require("Request");


var fs = require("fs");

// shows the contents of the array, [3] & [4]
// console.log(process.argv);

// console.log("Welcome to the spotify-this app! To begin enter the name of the song you want more info about below!");
var spotify = require("spotify");
var liriArgument = process.argv[2];
switch (liriArgument) {

    case "spotify-this":
        spotifyMe();
        break;
};


function spotifyMe() {
    // console.log("I love spotify");

    var songEnter = process.argv[3];
    //if argument is left blank, it's undefined, reassign it's value to 'the sign'
    if (songEnter === undefined) {
        songEnter = "the sign";
        //concatenate 'the sign'
        spotify.search({ type: 'track', query: songEnter }, function(err, data) {
            if (data) {
                console.log("Song Name: " + data.tracks.items[3].name);
                console.log("Artist's Name: " + data.tracks.items[3].artists[0].name);
                console.log("Album Name: " + data.tracks.items[3].album.name);
                console.log("Song Link: " + data.tracks.items[3].external_urls.spotify);
            }
        });

    } else {
        spotify.search({ type: 'track', query: songEnter }, function(err, data) {

            if (data) {
                console.log("Song Name: " + data.tracks.items[0].name);
                console.log("Artist's name: " + data.tracks.items[0].album.artists[0].name);
                console.log("Album Name: " + data.tracks.items[0].album.name);
                console.log("Song Link : https://play.spotify.com/track/" + data.tracks.items[0].id + "?play=true&utm_source=open.spotify.com&utm_medium=open");
            }



        });
    };

};






