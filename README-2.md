For this assignment I made a LIRI (Language Interpretation and Recognition Interface) using node.js. This was a CLI (Command Line Interface Applications) The information was taken OMBD for movies, Spotify for songs & Bands in Town for concert information.

This project requires dotenv, keys.js, fs, node-spotify-api, key.spotify, moment and axios. I also need to create a package.json and a .gitignore file.

This project allows for the user to type in four different commands into the terminal- 'concert-this', 'movie-this', 'spotify=this-song' and 'do-what-it-says'. After each commend the user can add a artist, a band, a movie or a song that they would like information about. Depending on the command they choose the information is then listed.

For concert information, they get the artist, the venue name, locations and date. If only the command is requested the default is 'Tame Impala'

For songs, the information is the artist, the track, what album the song is on as well as a preview for that song. If they only type the command they get the information for the 'The Sign' by Ace of Base.

For information on movies; the Title, Release Year, IMDB & Rotten Tomatoes rating, the country and language of the movie as well as the plot and actors involved. If only the command is request then the information on the movie 'Mr. Nobody' is given.

The last command; do-what-it-says does not allow the user to request any additional information. It returns the information from the random.txt file about the Backstreet Boys song 'I want it that way'.

To download and use this app., a personal .env file would need to be added with the following information.

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

You would get your own spotify id and secret by following these instructions.

----------------------------------------
The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

Step One: Visit https://developer.spotify.com/my-applications/#!/
Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.
----------------------------------------

This CLI app is useful for finding entertainment information. Such as where you favorite band is appearing next. It is easy to use and give the basic important information to help you start any search.

This can be used by anyone wanting quick facts about bands, songs or movies. I hope you enjoy using it.