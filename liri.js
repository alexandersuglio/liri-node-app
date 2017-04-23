var fs = require("fs");
var request = require("Request");

// shows the contents of the array, [3] & [4]
// console.log(process.argv);

// console.log("Welcome to the spotify-this app! To begin enter the name of the song you want more info about below!");
var Twitter = require("twitter");
var key = require('./key');
var spotify = require("spotify");
var liriArgument = process.argv[2];
switch (liriArgument) {

    case "spotify-this":
        spotifyMe();
        break;
    case "movie-this":
        movieThis();
        break;
    case "tweet-this":
        tweetThis();
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
            else {
            console.log("ERROR! " + error);
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
            else {
            console.log("ERROR! " + error);
            }



        });
    };

};

function movieThis() {

    var titleEnter = process.argv[3];
    if (titleEnter === undefined) {
        titleEnter = "Mr. Nobody";
    };

    request('http://www.omdbapi.com/?t=' + titleEnter, function(error, response, body) {
        var body = JSON.parse(body);
      if (!error){
        console.log("Title: " + body.Title);
        console.log("Year: " + body.Year);
        console.log("Released: " + body.Released);
        console.log("Title: " + body.Title);
        console.log("Awards: " + body.Awards);
        console.log("Rating: " + body.Rated);
}
else {
   console.log("ERROR! " + error);    
}
    });
};



function tweetThis() {

    var client = new Twitter(key.twitterKeys);

    client.get('statuses/user_timeline', function(error, tweets, response) {
        for (var i = 0; i < tweets.length; i++) {

            if (!error) {
                console.log("Tweet: " + tweets[i].text);
                console.log("Created: " + tweets[i].created_at);
                console.log("Twitter Handle: @" + tweets[i].user.screen_name);
                console.log("\n");

            } else {
                console.log("ERROR! " + error);
            }
        }
    });
};
