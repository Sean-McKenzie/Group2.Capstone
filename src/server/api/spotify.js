
const axios = require("axios");
//import axios from "axios";
 const qs = require("qs");
//import qs from "qs";


const express = require("express");
//const axios = require("axios");


require("dotenv");


const getSpotifyToken = async () => {
  const clientId = process.env.VITE_CLIENT_ID;
  const clientSecret = process.env.VITE_CLIENT_SECRET;
  const authHeader = btoa(
    //change btoa to Buffer.from(“my string to encode”).toString('base64')
    `${clientId}:${clientSecret}`,
    "utf-8"
  );
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


// import express from "express";
// import axios from "axios";
// import qs from 'qs'

const spotifyRouter = express.Router();

const {
     fetchArtistInfo,
     fetchSingleArtistInfo,
     fetchPlaylistInfo,
     fetchArtistAlbumsInfo,
     fetchManyAlbumsInfo,
     searchArtist,
} = require("../db");

spotifyRouter.get("/searchartist/:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await searchArtist(id);

          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});


spotifyRouter.get("/artistInfo/:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchArtistInfo(id);




          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});

spotifyRouter.get(
     "/singleArtistInfo/:id",
     async (req, res, next) => {
          try {
               const id = req.params.id;
               const artistInfo = await fetchSingleArtistInfo(id);
               res.send(artistInfo);
          } catch (error) {
               console.error(error);
               res.status(500).send({ message: "Error fetching artist info" });
          }
     }
);

spotifyRouter.get("/playlistInfo/:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchPlaylistInfo(id);
          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching playlistt info" });
     }
});

spotifyRouter.get("/artistAlbums/:id", async (req, res, next) => {
     try {
          const id = req.params.id;
          const artistInfo = await fetchArtistAlbumsInfo(id);
          res.send(artistInfo);
     } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Error fetching artist info" });
     }
});

spotifyRouter.get(
     "/artistManyAlbums/:id",
     async (req, res, next) => {
          try {
               const id = req.params.id;
               const artistInfo = await fetchManyAlbumsInfo(id);
               res.send(artistInfo);
          } catch (error) {
               console.error(error);
               res.status(500).send({ message: "Error fetching artist info" });
          }
     }
);

module.exports = spotifyRouter;

