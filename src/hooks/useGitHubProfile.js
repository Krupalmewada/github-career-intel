import { useState, useEffect } from "react";

export default function useGitHubProfile(username) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        ]);
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        setUser(userData);
        setRepos(reposData);

        const top10 = [...reposData]
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at) - new Date(a.updated_at);
          })
          .slice(0, 10);

        const langResponses = await Promise.all(
          top10.map((repo) =>
            fetch(
              `https://api.github.com/repos/${username}/${repo.name}/languages`,
            ),
          ),
        );

        const langResults = await Promise.all(
          langResponses.map((res) => res.json()),
        );

        const combined = {};
        langResults.forEach((repoLangs) => {
          Object.entries(repoLangs).forEach(([lang, bytes]) => {
            combined[lang] = (combined[lang] || 0) + bytes;
          });
        });

        setLanguages(combined);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { user, repos, languages, loading, error };
}
