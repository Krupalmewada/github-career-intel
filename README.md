# GitHub Career Intelligence 

Paste in any GitHub username and find out how their public repos stack up 
against real job role requirements. Built this to mess around with the 
GitHub API and see what I could learn from someone's public commit history.

## What it does

- Fetches public repos and analyzes language distribution across the top 10 
  by stars (falls back to most recently updated)
- Weighs languages by **bytes written**, not just file count — so a large 
  Flutter project won't look the same as a 3-line HTML file
- Compares detected languages against role-specific skill checklists built 
  from real Canadian job postings
- Shows what you have , what you're missing , and what's nice to have 
- Works for 10 roles: Frontend, Full Stack, Backend, React, DevOps, Mobile, 
  Data Engineer, ML/AI, Cloud, and Junior Developer

## Try it

 [github-career-intel.vercel.app](https://github-career-intel.vercel.app)

Type in any GitHub username — try your own, try a friend's, try a senior 
dev you admire and see what their stack actually looks like.

## Known limitation

Language percentages are based on **bytes of code** across public repos only.
Private repos, work projects, and contributions to other repos aren't included.
A single large project in one language will dominate the breakdown — which is 
technically accurate but can be misleading if that project isn't representative 
of your actual skills.

Planning to add repo frequency weighting to balance this out properly.

## Tech

- React + Vite
- GitHub REST API (public, no auth required)
- Recharts for the pie chart
- Tailwind CSS
- Deployed on Vercel

## Run locally

```bash
git clone https://github.com/Krupalmewada/github-career-intel.git
cd github-career-intel
npm install
npm run dev
```

## What's next

- Smarter language weighting (bytes + repo frequency combined)
- Commit activity analysis — how consistent is their contribution history?
- Compare two GitHub profiles side by side
- Export results as PDF
