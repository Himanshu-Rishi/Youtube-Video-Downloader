const express = require("express");
const background = require("./background");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/", async (req, res) => {
  const { url, format} = req.body;
  if (url.length === 0) {
    return res
      .status(404)
      .json({ success: false, error: "Please enter link !" });
  }
  try {
    const { success } = await background(url, format);
    if (success === true) {
        res.download("./video.mp4");
    } else {
      return res.status(500).json({ success: false, error: "Something wrong happenend !" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

app.listen(8080, () => {
  console.log("Server is running at https://localhost:8080...");
});
