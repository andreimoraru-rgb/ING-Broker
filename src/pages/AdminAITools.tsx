import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { motion } from 'motion/react';
import { Image as ImageIcon, Edit3, Brain, Key, Loader2, Download, Upload } from 'lucide-react';
import { requireRuntimeApiKey } from '../utils/aiKey';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export const AdminAITools = () => {
  const [hasKey, setHasKey] = useState(false);
  const [activeTab, setActiveTab] = useState<'generate' | 'edit' | 'think'>('generate');

  // Generate State
  const [genPrompt, setGenPrompt] = useState('A panoramic view of a modern business center or a top industrial facility.');
  const [genSize, setGenSize] = useState('1K');
  const [genImage, setGenImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Edit State
  const [editPrompt, setEditPrompt] = useState('');
  const [editImageBase64, setEditImageBase64] = useState<string | null>(null);
  const [editImageMime, setEditImageMime] = useState<string>('');
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Think State
  const [thinkPrompt, setThinkPrompt] = useState('Analyze the risk factors for a fast-growing IT company in Eastern Europe.');
  const [thinkResult, setThinkResult] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const keySelected = await window.aistudio.hasSelectedApiKey();
        setHasKey(keySelected);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  // Cheia se cere operatorului la runtime si traieste doar in sessionStorage.
  // Varianta anterioara citea process.env.API_KEY, variabila care nu era definita
  // nicaieri in build - deci unealta era deja nefunctionala in productie.
  // Vezi src/utils/aiKey.ts pentru motivul pentru care cheia nu poate fi inclusa
  // in bundle si de ce un proxy server-side ar fi nesigur pe rute neautentificate.
  const getApiKey = () => requireRuntimeApiKey();

  const handleGenerate = async () => {
    if (!genPrompt) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: getApiKey() });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: { parts: [{ text: genPrompt }] },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: genSize
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setGenImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Generation failed:", error);
      alert("Generation failed. Please check console.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const base64 = result.split(',')[1];
      setEditImageBase64(base64);
      setEditImageMime(file.type);
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = async () => {
    if (!editPrompt || !editImageBase64) return;
    setIsEditing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: getApiKey() });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [
            { inlineData: { data: editImageBase64, mimeType: editImageMime } },
            { text: editPrompt }
          ]
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setEditedImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Edit failed:", error);
      alert("Edit failed. Please check console.");
    } finally {
      setIsEditing(false);
    }
  };

  const handleThink = async () => {
    if (!thinkPrompt) return;
    setIsThinking(true);
    try {
      const ai = new GoogleGenAI({ apiKey: getApiKey() });
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: thinkPrompt,
        config: { thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH } }
      });
      setThinkResult(response.text || "No response");
    } catch (error) {
      console.error("Thinking failed:", error);
      alert("Thinking failed. Please check console.");
    } finally {
      setIsThinking(false);
    }
  };

  if (!hasKey) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-gray-50">
        <div className="bg-white p-12 rounded-2xl shadow-xl max-w-md w-full text-center">
          <Key className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">API Key Required</h2>
          <p className="text-gray-600 mb-8">To use the AI Studio tools, you need to select a paid Gemini API key.</p>
          <button
            onClick={handleSelectKey}
            className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Select API Key
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">AI Studio Tools</h1>
          <p className="text-gray-600">Advanced AI capabilities for content creation and analysis.</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveTab('generate')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'generate' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            <ImageIcon size={20} /> Generate Image
          </button>
          <button
            onClick={() => setActiveTab('edit')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'edit' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            <Edit3 size={20} /> Edit Image
          </button>
          <button
            onClick={() => setActiveTab('think')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'think' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            <Brain size={20} /> High Thinking
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {activeTab === 'generate' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Generate High-Quality Image</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
                    <textarea
                      value={genPrompt}
                      onChange={(e) => setGenPrompt(e.target.value)}
                      className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                      placeholder="Describe the image..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                    <select
                      value={genSize}
                      onChange={(e) => setGenSize(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="1K">1K</option>
                      <option value="2K">2K</option>
                      <option value="4K">4K</option>
                    </select>
                  </div>
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !genPrompt}
                    className="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isGenerating ? <Loader2 className="animate-spin" /> : <ImageIcon />}
                    {isGenerating ? 'Generating...' : 'Generate Image'}
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center min-h-[400px] overflow-hidden relative">
                {genImage ? (
                  <>
                    <img src={genImage} alt="Generated" className="w-full h-full object-contain" />
                    <a href={genImage} download="generated-image.png" className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                      <Download size={20} className="text-secondary" />
                    </a>
                  </>
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <ImageIcon size={48} className="mb-4 opacity-50" />
                    <p>Image will appear here</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'edit' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Edit Image</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Source Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                    >
                      <Upload size={20} />
                      {editImageBase64 ? 'Change Image' : 'Upload Image'}
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Edit Prompt</label>
                    <textarea
                      value={editPrompt}
                      onChange={(e) => setEditPrompt(e.target.value)}
                      className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                      placeholder="Describe how to edit the image..."
                    />
                  </div>
                  <button
                    onClick={handleEdit}
                    disabled={isEditing || !editPrompt || !editImageBase64}
                    className="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isEditing ? <Loader2 className="animate-spin" /> : <Edit3 />}
                    {isEditing ? 'Editing...' : 'Edit Image'}
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center min-h-[400px] overflow-hidden relative">
                {editedImage ? (
                  <>
                    <img src={editedImage} alt="Edited" className="w-full h-full object-contain" />
                    <a href={editedImage} download="edited-image.png" className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                      <Download size={20} className="text-secondary" />
                    </a>
                  </>
                ) : editImageBase64 ? (
                   <img src={`data:${editImageMime};base64,${editImageBase64}`} alt="Source" className="w-full h-full object-contain opacity-50" />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <ImageIcon size={48} className="mb-4 opacity-50" />
                    <p>Result will appear here</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'think' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">High Thinking Assistant</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Complex Query</label>
                    <textarea
                      value={thinkPrompt}
                      onChange={(e) => setThinkPrompt(e.target.value)}
                      className="w-full h-64 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                      placeholder="Ask a complex question requiring deep reasoning..."
                    />
                  </div>
                  <button
                    onClick={handleThink}
                    disabled={isThinking || !thinkPrompt}
                    className="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isThinking ? <Loader2 className="animate-spin" /> : <Brain />}
                    {isThinking ? 'Thinking...' : 'Analyze'}
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 h-[500px] overflow-y-auto">
                {thinkResult ? (
                  <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                    {thinkResult}
                  </div>
                ) : (
                  <div className="text-gray-400 flex flex-col items-center justify-center h-full">
                    <Brain size={48} className="mb-4 opacity-50" />
                    <p>Analysis will appear here</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
