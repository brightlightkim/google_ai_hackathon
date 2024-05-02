// youtubeApi.js
import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_KEY;

export async function searchVideos(query, maxResults = 3) {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${query}&maxResults=${maxResults}`;
    const response = await axios.get(url);

    const videoIdList = [];
    const videoLinks = [];
    console.log(response.data.items);
    // Extract video IDs from the response
    response.data.items.map((item) => {
      videoIdList.push(item.id.videoId);
    });

    // Construct video links using video IDs
    videoIdList.map((videoId) => {
      videoLinks.push(`https://www.youtube.com/watch?v=${videoId}`);
    });

    // Return the video links
    return videoLinks;
  } catch (error) {
    console.error("Error searching for videos:", error);
    throw new Error("Failed to search videos. Please try again later.");
  }
}

// Below functions can be used in the future if we want more specification

// Function to search for videos by location
// async function searchVideosByLocation(query, location, maxResults = 10) {
//   try {
//     // You can use the query and location to refine the search
//     const refinedQuery = `${query} ${location}`;

//     // Implement logic to search videos by the refined query
//     const params = {
//       part: "snippet",
//       q: refinedQuery,
//       maxResults: maxResults,
//     };

//     const res = await youtube.search.list(params);
//     const videos = res.data.items;
//     return videos;
//   } catch (error) {
//     console.error("Error searching for videos by location:", error);
//     throw error;
//   }
// }

// // Function to filter videos by date
// function filterVideosByDate(videos, date) {
//   // Implement logic to filter videos by date
//   const filteredVideos = videos.filter((video) => {
//     // Assuming the video published date is in ISO 8601 format
//     const videoDate = new Date(video.snippet.publishedAt);
//     return videoDate >= date;
//   });
//   return filteredVideos;
// }

// // Function to filter videos by theme
// function filterVideosByTheme(videos, theme) {
//   // Implement logic to filter videos by theme
//   const filteredVideos = videos.filter((video) => {
//     // Assuming each video has a list of themes associated with it
//     return video.themes.includes(theme);
//   });
//   return filteredVideos;
// }

// module.exports = {
//   searchVideos,
//   searchVideosByLocation,
//   filterVideosByDate,
//   filterVideosByTheme,
// };

// import dotenv from "dotenv";
// import { google } from "googleapis";

// dotenv.config();

// // Load API key from environment variables
// const API_KEY = process.env.YOUTUBE_API_KEY;

// // Initialize the YouTube Data API service
// const youtube = google.youtube({
//   version: "v3",
//   auth: API_KEY,
// });

// // Function to search for videos
// async function searchVideos(query, maxResults = 10) {
//   try {
//     const params = {
//       part: "snippet",
//       q: query,
//       maxResults: maxResults,
//     };

//     const res = await youtube.search.list(params);
//     const videos = res.data.items;
//     return videos;
//   } catch (error) {
//     console.error("Error searching for videos:", error);
//     throw error;
//   }
// }

// export { searchVideos };
