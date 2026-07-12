import { useParams } from "react-router-dom";
import useGitHubProfile from "../hooks/useGitHubProfile";
import useSkillGap from "../hooks/useSkillGap";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard"
import SkillGapReport from "../components/SkillGapReport"
export default function Result() {
  const { username } = useParams();
  const [targetRole, setTargetRole] = useState("Frontend Developer");

  const { user, repos, languages, loading, error } = useGitHubProfile(username);
  const skillGap = useSkillGap(languages, targetRole);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
    <select value={targetRole} onChange={(e) => setTargetRole(e.target.value)}>
      <option value="Frontend Developer">Frontend Developer</option>
      <option value="Full Stack Developer">Full Stack Developer</option>
      <option value="Backend Developer">Backend Developer</option>
      <option value="React Developer">React Developer</option>
      <option value="DevOps Engineer">DevOps Engineer</option>
      <option value="Mobile Developer">Mobile Developer</option>
      <option value="Data Engineer">Data Engineer</option>
      <option value="ML / AI Engineer">ML / AI Engineer</option>
      <option value="Cloud Engineer">Cloud Engineer</option>
      <option value="Junior Developer">Junior Developer</option>
    </select>
    {user && <ProfileCard user={user} />}
    {skillGap && <SkillGapReport skillGap={skillGap} />}</>
  
    
  );
}
