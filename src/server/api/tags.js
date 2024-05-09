const express = require("express");
const tagsRouter = express.Router();
const jwt = require("jsonwebtoken");
const { createTags } = require("../db");

tagsRouter.post('/tag', async(req, next) => {
    const {tagTxT, songid} = req.body;
    try{
    const tag = await createTags({tagTxT, songid });
    }
    catch (err){
  next (err)
    }
  });



module.exports = tagsRouter;