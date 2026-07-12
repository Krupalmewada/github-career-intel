import { useMemo } from "react";
import roleChecklists from "../data/roleChecklists";

export default function useSkillGap(languages, targetRole) {
  const result = useMemo(() => {
    if (!languages || !targetRole) return null;

    // total bytes
    const total = Object.values(languages).reduce((sum, b) => sum + b, 0);

    // percentage per language
    
    const detected = {};
    Object.entries(languages).forEach(([lang, bytes]) => {
      detected[lang] = Math.round((bytes / total) * 100);
    });


// filter out languages below 1%
const filteredDetected = Object.fromEntries(
  Object.entries(detected).filter(([_ , pct]) => pct >= 1)
);
    // get checklist
    const checklist = roleChecklists[targetRole];
    if (!checklist) return null;

    // compare detected to required languages
    const have = [];
    const missing = [];
    checklist.languages.forEach((lang) => {
      if (filteredDetected[lang]) {
        have.push(lang);
      } else {
        missing.push(lang);
      }
    });

    // score
    const score = Math.round((have.length / checklist.languages.length) * 100);

    return { detected: filteredDetected, have, missing, score, checklist };
  }, [languages, targetRole]);

  return result;
}
