// videoSearch.js

import { searchVideos } from "./youtubeApi.js";

export async function searchVideosByCriteria(
  location,
  date,
  theme,
  maxResults = 10
) {
  let query = "";
  try {
    if (!location && !date && !theme) {
      // If no other criteria are provided, include "travel" in the query
      query = "travel";
    }

    if (location) {
      query += `${location}`;
    }

    // if (date) {
    //   query += ` ${date}`;
    // }

    if (theme) {
      query += ` ${theme}`;
    }
    const videoLinks = await searchVideos(query, maxResults);

    // const uniqueVideos = Array.from(
    //   new Set(videos.map((video) => video.id.videoId))
    // );
    // const selectedVideos = uniqueVideos
    //   .slice(0, 3)
    //   .map((videoId) => videos.find((video) => video.id.videoId === videoId));

    return videoLinks;
  } catch (error) {
    console.error("Error searching for videos by criteria:", error);
    throw Error("Failed to search videos. Please try different input");
  }
}

// import { analyzeVideos } from "./videoAnalyzer.js";
// import { convertToScript } from "./scriptConverter.js";

// async function main() {
//   try {
//     //  Receive Search and Set Search Term
//     let query = "Traveling Related Keywords";

//     // make API endpoint, so that we can retrieve the user's query

//     // 1. Use YouTube API and Search Videos
//     const maxResults = 3; // analyze 10 different videos
//     const videos = await searchVideos(query, maxResults);

//     // 2. Analyzing Videos
//     const analyzedData = analyzeVideos(videos);

//     // 3. Analyzed Videos Into Script
//     const script = convertToScript(analyzedData);

//     // 4. Script Print or other work
//     console.log("Script: ", script);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// main();
// const video = videos[0];
// const videoId = video.id.videoId;
// const videoTitle = video.snippet.title;
// const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

// // Download MP3 file directly
// const audioFileName = `${videoTitle}.mp3`;
// await downloadFile(videoUrl, audioFileName);

// // Transcribe audio to text
// await transcribeAudio(audioFileName);

// console.log("Audio transcribed successfully!");
