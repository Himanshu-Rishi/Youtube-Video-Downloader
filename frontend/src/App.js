import React, { useState } from 'react'
import Axios from 'axios'
import FileDownload from 'js-file-download'
import './App.css'
const App = () => {
  const [url, seturl] = useState("")
  const downloadVideo = (e)=>
  {
    e.preventDefault();
    Axios({
      url: "http://localhost:8080/",
      method: "post",
      data: {
        url,
        format: "video",
      },
      responseType: "blob",
    }).then(function (res) {
      FileDownload(res.data);
    });
  }
  return (
    <>
      <form action="" className="form_main">
        <p className="heading">Hey !</p>
        <p className="sub-heading">YT videos in best quality.</p>
        <div className="inputContainer">
          <input
            type="text"
            className="inputField"
            id="username"
            placeholder="Enter YT video Link"
            value={url}
            onChange={(e)=>seturl(e.target.value)}
          />
        </div>
        <button id="button" onClick={downloadVideo}>Download Video</button>
        {/* <button id="button" onclick={downloadAudio}>Donwload Audio</button> */}
        <p className='footer_text'>
          Made by Himanshu Rishi with{" "}
          <span style={{fontSize: "1.2rem", color: 'red'}}>&hearts;</span>
        </p>
      </form>
    </>
  );
}

export default App