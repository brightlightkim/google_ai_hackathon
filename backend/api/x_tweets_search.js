import axios from "axios";
const token = process.env.X_BEARER_TOKEN;
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export async function getTweets(location) {
  const params = {
    'query': `#travel has:media near:${location} -is:retweet`,
    'tweet.fields': 'author_id,media'
  }

  const headers = {
    "User-Agent": "v2RecentSearchJS",
    "Authorization": `Bearer ${token}`
  }

  try {
      const response = await axios.get(endpointUrl, {
          params,
          headers
      });
      return response.data;
  } catch (error) {
    // console.error('Error:', error);
    return null;
  }
}
