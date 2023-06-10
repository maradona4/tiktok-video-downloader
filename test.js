const ttdl =  require("./index.js");

const link = ["https://vt.tiktok.com/ZS8hCK6YR/", "https://vt.tiktok.com/ZS8h9WsRN/",  "https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531"]

ttdl.getInfo(link[0])
  .then((result) => {
    console.log(result);
  })
