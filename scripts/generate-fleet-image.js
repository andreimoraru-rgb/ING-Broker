import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

async function generateImage() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    console.log('Generating image...');
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: 'A professional, high-quality, realistic photo of a large mixed auto fleet in a modern parking lot. The fleet includes European trucks, delivery vans, and corporate cars. The lighting is bright and professional, suitable for a corporate insurance website hero background. Cinematic lighting, 8k resolution.',
      config: {
        imageConfig: {
          aspectRatio: '16:9',
          imageSize: '2K'
        }
      }
    });

    let base64Data = null;
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        base64Data = part.inlineData.data;
        break;
      }
    }

    if (base64Data) {
      const buffer = Buffer.from(base64Data, 'base64');
      const outputPath = path.join(process.cwd(), 'public', 'fleet-hero.jpg');
      fs.writeFileSync(outputPath, buffer);
      console.log('Image saved to', outputPath);
    } else {
      console.error('No image data found in response');
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generateImage();
