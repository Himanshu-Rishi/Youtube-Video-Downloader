const { error } = require("console");
const fs = require("fs");
const ytdl = require("ytdl-core");

const background = async (url) => {

  // if audio and video both
  ytdl(url, { filter: "audioandvideo"}).pipe(
    fs.createWriteStream("video.mp4")
  );

  // if audio only
  ytdl(url, { filter: "audio" }).pipe(
    fs.createWriteStream("video.mp4")
  );
};