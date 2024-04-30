
import fs from 'fs';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "YOUR_API_KEY";

async function runChat(travelTo, travelFrom, travelWith, fromDate, toDate, specificActivity) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const context_prompt = 'User wants to build a travel plan. You are helpimg the user with provided information. Your response is going to coverted to json file. The query includes request_promt which is the form that the final travel plan should follow.';
  const request_prompt = '';
  const example_prompt = '';
  const query = `${context_prompt}\nUser's preference: ${travelTo}, ${travelFrom}, ${travelWith}, ${fromDate} to ${toDate}, ${specificActivity}\nrequest_prompt: ${request_prompt}\nexample_prompt: ${example_prompt}`;

  const result = await chat.sendMessage(query);
  const response = result.response;
  const jsonResponse = { text: response.text() };

  // Write response to JSON file
  const outputPath = './output/response.json';
  fs.writeFile(outputPath, JSON.stringify(jsonResponse), (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }
    console.log('Response saved to', outputPath);
  });
}

// Example usage:
runChat('New York', 'Los Angeles', 'friends', '2024-05-01', '2024-05-07', 'sightseeing');


