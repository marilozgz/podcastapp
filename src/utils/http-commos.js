import axios from "axios";

export default axios.create({
  baseURL: "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  headers: {
    "Content-type": "application/json"
  }
});