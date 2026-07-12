export default function SkillGapReport({
 skillGap
}) {
    const { detected, have, missing, score, checklist } = skillGap
  return (
    <>
      <div>{score}% match</div>
      {Object.entries(detected).map(([lang, percent]) => (
      <div key={lang}>{lang}: {percent}%</div>
      ))}
      <div>Skills u have</div>
      <div>{have.map((lang) => (
          <div key={lang}>{lang}</div>
        ))}</div>
      <div>
        <div>Skills u r missing </div>
        {missing.map((lang) => (
          <div key={lang}>{lang}</div>
        ))}
      </div>
      {checklist.good_to_have.map(skill => (
  <div key={skill}>⭐ {skill}</div>
))}
    </>
  );
}
