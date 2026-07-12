import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4']

export default function LanguageChart({detected}){
 const data = Object.entries(detected).map(([lang, per]) => ({ name: lang, value: per }))
 return(
     <PieChart width={400} height={300}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
    >
      {data.map((entry, index) => (
        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip formatter={(value) => `${value}%`} />
    <Legend />
  </PieChart>
 )
}