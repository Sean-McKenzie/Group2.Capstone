
const express = require("express");


require("dotenv");

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
