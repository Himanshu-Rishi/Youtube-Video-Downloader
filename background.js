const { error } = require("console");
const fs = require("fs");
const ytdl = require("ytdl-core");

const background = async (url, format) => {
  try {
    if (format === "audio") {
      ytdl(url, { filter: "audio" }).pipe(fs.createWriteStream("video.mp4"));
    } else {
      ytdl(url, { filter: "audioandvideo" }).pipe(
        fs.createWriteStream("video.mp4")
      );
    }
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

module.exports = background;
