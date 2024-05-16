
const express = require("express");
const axios = require("axios");
const qs = require("qs");
require("dotenv")



// import express from "express";
// import axios from "axios";
// import qs from 'qs'

const spotifyRouter = express.Router();


const {
     fetchArtist
} = require('../db')

const getSpotifyToken = async () => {
     const clientId = process.env.VITE_CLIENT_ID;
     const clientSecret = process.env.VITE_CLIENT_SECRET;
     const authHeader = btoa(`${clientId}:${clientSecret}`, "utf-8");
     const url = "https://accounts.spotify.com/api/token";
     const data = qs.stringify({ grant_type: "client_credentials" });

     try {
          const response = await axios.post(url, data, {
               headers: {
                    Authorization: `Basic ` + ` ${authHeader}`,
                    "Content-Type": "application/x-www-form-urlencoded",
               },
          });
          if (response.ok) {
               const response = await response.json();
          }
          console.log(response.data.access_token);
          return response.data.access_token;
     } catch (error) {
          console.error("failed to get token", error);
          throw error;
     }
};

let tokenCache = getSpotifyToken();


const fetchArtistInfo = async (id) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/artists?ids=${id}`,
               {
                    headers: {
                         Authorization: `Bearer ` + tokenCache,
                    },
               }
          );
          
          return response.data.artists;
     } catch (error) {
          console.error("Error fetching artist info:", error);
          throw error;
     }
};



spotifyRouter.get("/artistInfo/id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchArtistInfo(id);
          
          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});

const fetchSingleArtistInfo = async (artistId) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/artists/${artistId}`,
               {
                    headers: {
                         Authorization: "Bearer " + tokenCache,
                    },
               }
          );
          return response;
     } catch (error) {
          console.error("Error fetching single artist info:", error);
          throw error;
     }
};

spotifyRouter.get("/singleArtistInfo:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchSingleArtistInfo(id);
          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});

const fetchPlaylistInfo = async (playlist_id) => {
     try {
          //    let token = await getSpotifyToken();
          // refreshTokenIfNeeded();
          const response = await axios.get(
               `https://api.spotify.com/v1/playlists/${playlist_id}`,
               {
                    headers: {
                         Authorization: `Bearer ` + tokenCache,
                    },
               }
          );
          return response.data;
     } catch (error) {
          console.error("Error fetching playlist:", error);
          throw error;
     }
};

spotifyRouter.get("/playlistInfo:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchPlaylistInfo(id);
          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});

const fetchArtistAlbumsInfo = async (id) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/artists/${id}/albums`,
               {
                    headers: {
                         Authorization: "Bearer " + tokenCache,
                    },
               }
          );

          return response.data.items;
     } catch (error) {
          console.error("Error fetching artist albums:", error);
          throw error;
     }
};

spotifyRouter.get("/artistAlbums:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchArtistAlbumsInfo(id);
          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});

const fetchManyAlbumsInfo = async (id) => {
     try {
          const response = await axios.get(
               `https://api.spotify.com/v1/albums?ids=${id}`,
               {
                    headers: {
                         Authorization: "Bearer " + tokenCache,
                    },
               }
          );

          return response.data.albums;
     } catch (error) {
          console.error("Error fetching artist albums:", error);
          throw error;
     }
};

spotifyRouter.get("/artistManyAlbums:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchManyAlbumsInfo(id);
          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});

module.exports = spotifyRouter;
