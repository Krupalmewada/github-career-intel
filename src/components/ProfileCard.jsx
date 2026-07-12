export default function ProfileCard({ user }) {
  return (
    <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4 border border-slate-700">
      <img src={user.avatar_url} alt={user.name} className="w-16 h-16 rounded-full" />
      <div>
        <h2 className="text-xl font-bold text-white">{user.name}</h2>
        <p className="text-slate-400 text-sm">{user.bio}</p>
        <p className="text-slate-500 text-sm">{user.location}</p>
        <div className="flex gap-4 mt-1 text-sm text-slate-400">
          <span>{user.public_repos} {user.public_repos === 1 ? 'repo' : 'repos'}</span>
          <span>{user.followers} {user.followers === 1 ? 'follower' : 'followers'}</span>
       
        </div>
      </div>
      
        <a href={user.html_url}
        target="_blank"
        className="ml-auto px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition"
      >
        View GitHub
      </a>
    </div>
  );
}