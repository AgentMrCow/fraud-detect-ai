"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Generate random data for the chart
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 30; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    const attempts = Math.floor(Math.random() * 15) + 5
    const blocked = Math.floor(attempts * (0.7 + Math.random() * 0.2))

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      attempts,
      blocked,
    })
  }

  return data
}

export default function FraudChart() {
    const [data, setData] = useState<{ date: string; attempts: number; blocked: number }[]>([]);

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAttempts" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#e5e7eb" }} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#e5e7eb" }} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="attempts"
            name="Fraud Attempts"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorAttempts)"
          />
          <Area
            type="monotone"
            dataKey="blocked"
            name="Blocked"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorBlocked)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

