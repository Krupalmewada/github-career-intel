import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!username) return;
    navigate(`/results/${username}`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-4xl font-bold text-white">GitHub Career Intelligence</h1>
      <p className="text-slate-400 text-center max-w-md">
        Enter a GitHub username to analyze their public repos and see skill gaps for your target role.
      </p>
      <div className="flex gap-3 w-full max-w-md">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="e.g. Krupalmewada"
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}