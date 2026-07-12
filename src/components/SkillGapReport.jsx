export default function SkillGapReport({ skillGap }) {
  const { detected, repoFrequency, have, missing, score, checklist } = skillGap;
  return (
    <div className="flex flex-col gap-6">
      {/* Score */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
        <div className="text-5xl font-bold text-blue-400">{score}%</div>
        <div className="text-slate-400 mt-1">match for target role</div>
      </div>

      {/* Languages detected */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Languages Detected</h3>
        <div className="flex flex-col gap-2">
          {Object.entries(detected)
            .filter(([lang]) => repoFrequency[lang] > 0)
            .sort((a, b) => b[1] - a[1])
            .map(([lang, percent]) => (
              <div key={lang} className="flex items-center gap-3">
                <span className="text-slate-300 w-28">{lang}</span>
                <div className="flex-1 bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="text-slate-400 text-sm w-12 text-right">{percent}%</span>
                <span className="text-slate-500 text-sm w-16">{repoFrequency[lang]} repo{repoFrequency[lang] !== 1 ? 's' : ''}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Have / Missing */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 rounded-xl p-6 border border-green-800">
          <h3 className="text-lg font-semibold text-green-400 mb-3">You Have</h3>
          <div className="flex flex-col gap-2">
            {have.map(lang => (
              <div key={lang} className="text-slate-300">✅ {lang}</div>
            ))}
          </div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 border border-red-800">
          <h3 className="text-lg font-semibold text-red-400 mb-3">You're Missing</h3>
          <div className="flex flex-col gap-2">
            {missing.map(lang => (
              <div key={lang} className="text-slate-300">❌ {lang}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Nice to have */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-yellow-400 mb-3">Nice to Have</h3>
        <div className="flex flex-wrap gap-2">
          {checklist.good_to_have.map(skill => (
            <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
              ⭐ {skill}
            </span>
          ))}
        </div>
      </div>
      
    </div>
    
  );
}