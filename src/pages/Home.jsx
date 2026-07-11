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
    <>
      <div>
        <label htmlFor="name-input">Enter Github Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type username..."
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
