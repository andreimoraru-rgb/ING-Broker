import React, { useState } from 'react';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { Image, Film, Edit, Loader2, Download, Brain } from 'lucide-react';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export const AIStudio = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit' | 'video' | 'thinking'>('generate');
  const [prompt, setPrompt] = useState('');
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16' | '1:1'>('16:9');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [textResult, setTextResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [sourceMimeType, setSourceMimeType] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setSourceImage(base64String);
        setSourceMimeType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const getAiClient = async () => {
    if (!window.aistudio) {
      throw new Error('AI Studio environment not available');
    }
    if (!(await window.aistudio.hasSelectedApiKey())) {
      await window.aistudio.openSelectKey();
    }
    return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  };

  const generateImagePro = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const ai = await getAiClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: prompt,
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: imageSize
          }
        }
      });
      
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setResult(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  const editImageFlash = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const ai = await getAiClient();
      const parts: any[] = [];
      
      if (sourceImage && sourceMimeType) {
        parts.push({
          inlineData: {
            data: sourceImage,
            mimeType: sourceMimeType
          }
        });
      }
      parts.push({ text: prompt });

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: { parts },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio
          }
        }
      });
      
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setResult(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (err: any) {
      setError(err.message || 'Failed to edit image');
    } finally {
      setLoading(false);
    }
  };

  const generateVideo = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const ai = await getAiClient();
      
      const req: any = {
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: aspectRatio === '1:1' ? '16:9' : aspectRatio
        }
      };

      if (sourceImage && sourceMimeType) {
        req.image = {
          imageBytes: sourceImage,
          mimeType: sourceMimeType
        };
      }

      let operation = await ai.models.generateVideos(req);

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.GEMINI_API_KEY || '',
          },
        });
        const blob = await response.blob();
        setResult(URL.createObjectURL(blob));
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate video');
    } finally {
      setLoading(false);
    }
  };

  const generateThinking = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTextResult(null);
    try {
      const ai = await getAiClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: prompt,
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
        }
      });
      
      setTextResult(response.text || 'No response generated.');
    } catch (err: any) {
      setError(err.message || 'Failed to generate response');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'generate') generateImagePro();
    else if (activeTab === 'edit') editImageFlash();
    else if (activeTab === 'video') generateVideo();
    else if (activeTab === 'thinking') generateThinking();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">AI Media Studio</h1>
          <p className="text-gray-500">Generate and edit high-quality images, videos, and complex analysis for your campaigns.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex border-b border-gray-100 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('generate')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${activeTab === 'generate' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Image size={18} /> Generate Image
            </button>
            <button 
              onClick={() => setActiveTab('edit')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${activeTab === 'edit' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Edit size={18} /> Edit Image
            </button>
            <button 
              onClick={() => setActiveTab('video')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${activeTab === 'video' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Film size={18} /> Generate Video
            </button>
            <button 
              onClick={() => setActiveTab('thinking')}
              className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${activeTab === 'thinking' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Brain size={18} /> High Thinking
            </button>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Prompt</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none h-32"
                  placeholder="Describe what you want to generate or edit..."
                  required
                />
              </div>

              {activeTab !== 'thinking' && (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Aspect Ratio</label>
                    <select 
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value as any)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="16:9">16:9 (Landscape)</option>
                      <option value="9:16">9:16 (Portrait)</option>
                      {activeTab !== 'video' && <option value="1:1">1:1 (Square)</option>}
                    </select>
                  </div>

                  {activeTab === 'generate' && (
                    <div>
                      <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Resolution</label>
                      <select 
                        value={imageSize}
                        onChange={(e) => setImageSize(e.target.value as any)}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="1K">1K</option>
                        <option value="2K">2K</option>
                        <option value="4K">4K</option>
                      </select>
                    </div>
                  )}
                </div>
              )}

              {(activeTab === 'edit' || activeTab === 'video') && (
                <div>
                  <label className="block text-sm font-bold text-secondary uppercase tracking-wider mb-2">Source Image (Optional)</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                  {sourceImage && (
                    <div className="mt-4">
                      <img src={`data:${sourceMimeType};base64,${sourceImage}`} alt="Source" className="h-32 rounded-lg object-cover" />
                    </div>
                  )}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-secondary text-white font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? <><Loader2 className="animate-spin" size={20} /> Processing...</> : 'Generate Content'}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            {textResult && activeTab === 'thinking' && (
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-secondary mb-4">Analysis Result</h3>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                  <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                    {textResult}
                  </div>
                </div>
              </div>
            )}

            {result && activeTab !== 'thinking' && (
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-secondary mb-4">Result</h3>
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center p-4">
                  {activeTab === 'video' ? (
                    <video src={result} controls className="max-w-full max-h-[500px] rounded-lg shadow-md" autoPlay loop />
                  ) : (
                    <img src={result} alt="Generated" className="max-w-full max-h-[500px] rounded-lg shadow-md" />
                  )}
                </div>
                <div className="mt-4 flex justify-end">
                  <a 
                    href={result} 
                    download={`generated-${activeTab}-${Date.now()}`}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Download size={16} /> Download
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
