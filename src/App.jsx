import React, { useState } from 'react';

const fakeAItools = [
  { name: 'ChatGPT', category: 'Chatbot', description: 'AI for text generation', link: 'https://chat.openai.com' },
  { name: 'DALL·E', category: 'Image Generation', description: 'AI that creates images from text', link: 'https://openai.com/dall-e' },
];

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(fakeAItools);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setResults(
      fakeAItools.filter(
        tool =>
          tool.name.toLowerCase().includes(value.toLowerCase()) ||
          tool.category.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">AI Tool Finder</h1>
      <input
        value={query}
        onChange={handleSearch}
        placeholder="Search for an AI tool..."
        className="w-full p-2 rounded text-black"
      />
      <div className="mt-6 grid gap-4">
        {results.map((tool, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">{tool.name}</h2>
            <p className="text-sm">{tool.description}</p>
            <a href={tool.link} className="text-blue-400 mt-2 block">Visit</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
