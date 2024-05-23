//import all the spotify functions from spotify.js, import all local db manipulation functions

const { fetchPlaylist } = require("../../client/api");
const { fetchSingleArtistInfo } = require("../db");

//ARTISTS -
/* 
{
Artist ID, 
artist name, 
image, 
avgRating, 
reviews from artist albums and tracks, 
tags associated with songs?,
list of albums? Maybe highest rated 2-3
}
 */
const artist = {
  artistId,
  artistName,
  artistImage,
  artistAvgRating,
  artistAssocReviews,
};
const getArtistData = () => {
  const artistInfo = fetchArtistInfo(artistID);
  
};

//ALBUMS -
/*
{
    Album ID,
    Artist ID,
    artist Name,
    Image,
    album avg rating,
    reviews by album ID,
    
}
*/
const album = {
  albumID,
  artistID,
  artistName,
  albumImage,
  albumAvgRating,
  albumReviews,
};
//TRACKS -
/*
{
    song ID,
    Artist ID,
    artist Name,
    Image,
    song avg rating,
    reviews by song,
    Tags,
    
}
*/
const track = {
  songID,
  artistID,
  artistName,
  trackImage,
  trackReviews,
  tags,
};

const getTrackData = () => {
  fetchPlaylist(playlistID);
};

//create functions to call imported functions and create packages of our data and spotify data combined
