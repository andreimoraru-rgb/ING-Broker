import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

async function generateImage() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    console.log("Generating image...");
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'Create an ultra-realistic, high-end luxury car showroom scene featuring a Range Rover as the main subject. The showroom should look modern, elegant, and premium, with polished floors, soft ambient lighting, large glass walls, subtle reflections, and a sophisticated minimalist interior. The Range Rover must appear highly detailed, photorealistic, and professionally presented, as if photographed for a luxury automotive brand campaign. Use cinematic lighting, realistic shadows, natural reflections on the car body, sharp focus, premium composition, and a high-end commercial photography style. The atmosphere should feel exclusive, refined, and aspirational. No people, no text, no watermark, no logo overlay. 8K quality, ultra-detailed, realistic materials, true-to-life proportions, luxury automotive advertising aesthetic.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        }
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const dir = path.join(process.cwd(), 'public', 'images');
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        const filePath = path.join(dir, 'showroom.png');
        fs.writeFileSync(filePath, Buffer.from(base64EncodeString, 'base64'));
        console.log("Image saved to", filePath);
        break;
      }
    }
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

generateImage();
