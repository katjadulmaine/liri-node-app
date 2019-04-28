dotenv = require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var axios = require("axios");

var liri = process.argv[2];
var search = process.argv.slice(3).join(" ");

work()
function work() {
    switch (liri) {
        case "concert-this": {
            concertSearch()
            break;
        } case "spotify-this-song": {
            songSearch()
            break;
        } case "movie-this": {
            movieSearch()
            break;
        } case "do-what-it-says": {
            random()
            break;
        } default:
            console.log("Please enter a valid command.")
    };
}

function concertSearch() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log("The artist(s) that is playing: " + response.data[0].lineup);
            console.log("Name of the venue is: " + response.data[0].venue.name);
            console.log("The venue location is: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
            console.log("Date of the venue: " + (moment(response.data[0].datetime).format("MM/DD/YYYY")) + "\n-----------------------------------------");
            
            var bands = [];

            bands.push("The artist(s) that is playing: " + response.data[0].lineup);
            bands.push("Name of the venue is: " + response.data[0].venue.name);
            bands.push("The venue location is: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
            bands.push("Date of the venue: " + (moment(response.data[0].datetime).format("MM/DD/YYYY")) + "\n-----------------------------------------\n")

            fs.appendFile("log.txt", bands.join("\n"), function (err) {
                if (err) {
                    return console.log(err);
                }
            })

        })
        .catch(function (error) {
            console.log(error)
        })
}

function songSearch() {
    if (search === "") {
        search = "The Sign Ace of Base";
    }
    spotify.search({ type: 'track', query: search }, function (error, response) {
        if (error) {
            return console.log(error);
        }
        console.log("Artist: " + response.tracks.items[0].artists[0].name);
        console.log("Track: " + response.tracks.items[0].name);
        console.log("Album: " + response.tracks.items[0].album.name);
        console.log("Preview link: " + response.tracks.items[0].href + "\n-----------------------------------------");

        var songs = [];

            songs.push("Artist: " + response.tracks.items[0].artists[0].name);
            songs.push("Track: " + response.tracks.items[0].name);
            songs.push("Album: " + response.tracks.items[0].album.name);
            songs.push("Preview link: " + response.tracks.items[0].href + "\n-----------------------------------------\n")

            fs.appendFile("log.txt", songs.join("\n"), function (err) {
                if (err) {
                    return console.log(err);
                }
            })

    })
}

function movieSearch() {
    if (search === "") {
        search = "Mr. Nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + search + "&apikey=trilogy")
        .then(function (response) {
            console.log("Title of the Movie: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Year);
            console.log("IMDB Rating of the movie: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating of the Movie: " + response.data.Ratings[1].Value);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language of the Movie: " + response.data.Language);
            console.log("Plot of the Movie: " + response.data.Plot);
            console.log("Actors in the Movie: " + response.data.Actors + "\n-----------------------------------------");

            var movies = [];

            movies.push("Title of the Movie: " + response.data.Title);
            movies.push("Year the movie came out: " + response.data.Year);
            movies.push("IMDB Rating of the movie: " + response.data.imdbRating);
            movies.push("Rotten Tomatoes Rating of the Movie: " + response.data.Ratings[1].Value)
            movies.push("Country where the movie was produced: " + response.data.Country);
            movies.push("Language of the Movie: " + response.data.Language);
            movies.push("Plot of the Movie: " + response.data.Plot);
            movies.push("Actors in the Movie: " + response.data.Actors + "\n-----------------------------------------\n")

            fs.appendFile("log.txt", movies.join("\n"), function (err) {
                if (err) {
                    return console.log(err);
                }
            })

        })
        .catch(function (error) {
            return console.log(error);
        })
}

function random() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error)
        }

        var dataArr = data.split(",")
        liri = dataArr[0]
        search = dataArr[1]
        console.log(liri)
        console.log(search)
        work()
        var random = [liri, search]
            fs.appendFile("log.txt", random.join("\n"), function (err) {
                if (err) {
                    return console.log(err);
                }
            })
    })
}