"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  RefreshCcw,
  Filter,
  Search,
  Shield,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Placeholder data for metrics
const generateMetricsData = () => {
  return {
    totalTransactions: Math.floor(Math.random() * 1000) + 15000,
    flaggedTransactions: Math.floor(Math.random() * 100) + 200,
    averageRiskScore: (Math.random() * 20 + 30).toFixed(1),
    responseTime: (Math.random() * 30 + 50).toFixed(0),
    fraudPrevented: (Math.random() * 2 + 4).toFixed(2),
    alertAccuracy: (Math.random() * 5 + 92).toFixed(1),
  }
}

// Placeholder data for transaction volume chart
const generateVolumeData = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  return hours.map((hour) => {
    const baseVolume = hour >= 9 && hour <= 18 ? 800 : 300 // Higher volume during business hours
    return {
      hour: `${hour}:00`,
      volume: Math.floor(Math.random() * 400 + baseVolume),
      flagged: Math.floor(Math.random() * 50 + (hour >= 9 && hour <= 18 ? 40 : 15)),
    }
  })
}

// Placeholder data for fraud types
const fraudTypeData = [
  { name: "Account Takeover", value: 35 },
  { name: "Synthetic ID", value: 25 },
  { name: "Transaction Fraud", value: 20 },
  { name: "Application Fraud", value: 15 },
  { name: "Money Laundering", value: 5 },
]

// Placeholder data for risk levels
const riskLevelData = [
  { name: "High", value: 15, color: "#ef4444" },
  { name: "Medium", value: 30, color: "#f97316" },
  { name: "Low", value: 55, color: "#22c55e" },
]

// Placeholder data for transactions feed
const generateTransactions = () => {
  const channels = [
    "FPS Transfer",
    "Octopus Card",
    "ATM Withdrawal",
    "Mobile Banking",
    "Online Purchase",
    "Branch Transaction",
  ]
  const banks = ["HSBC", "Hang Seng Bank", "Bank of China (HK)", "Standard Chartered HK", "Bank of East Asia"]
  const locations = ["Central", "Tsim Sha Tsui", "Mong Kok", "Causeway Bay", "Sha Tin", "Kwun Tong"]
//   const statuses = ["Cleared", "Flagged", "Under Review"]
  const statusColors = {
    Cleared: "bg-green-100 text-green-800",
    Flagged: "bg-red-100 text-red-800",
    "Under Review": "bg-yellow-100 text-yellow-800",
  }

  return Array.from({ length: 20 }, () => {
    const amount = Math.floor(Math.random() * 9000) + 100
    const riskScore = Math.floor(Math.random() * 100)
    const status = riskScore > 70 ? "Flagged" : riskScore > 40 ? "Under Review" : "Cleared"

    // Generate a timestamp within the last 30 minutes
    const timestamp = new Date()
    timestamp.setMinutes(timestamp.getMinutes() - Math.floor(Math.random() * 30))

    return {
      id: `TRX-${Math.floor(Math.random() * 1000000)}`,
      timestamp,
      amount,
      channel: channels[Math.floor(Math.random() * channels.length)],
      bank: banks[Math.floor(Math.random() * banks.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      riskScore,
      status,
      statusColor: statusColors[status],
    }
  }).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

export default function Dashboard() {
  const [metricsData, setMetricsData] = useState(generateMetricsData())
  const [volumeData, setVolumeData] = useState(generateVolumeData())
  const [transactions, setTransactions] = useState(generateTransactions())
  const [timeframe, setTimeframe] = useState("today")
  const [chartType, setChartType] = useState("fraudTypes")
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetricsData(generateMetricsData())

      // Update volume data with a new data point
      setVolumeData((prev) => {
        const newData = [...prev]
        const lastHourIndex = new Date().getHours()
        const baseVolume = lastHourIndex >= 9 && lastHourIndex <= 18 ? 800 : 300

        newData[lastHourIndex] = {
          hour: `${lastHourIndex}:00`,
          volume: Math.floor(Math.random() * 400 + baseVolume),
          flagged: Math.floor(Math.random() * 50 + (lastHourIndex >= 9 && lastHourIndex <= 18 ? 40 : 15)),
        }

        return newData
      })

      // Add a new transaction occasionally
      if (Math.random() > 0.5) {
        setTransactions((prev) => {
          const newTransactions = [...prev]
          const newTransaction = generateTransactions()[0]
          newTransactions.unshift(newTransaction)
          newTransactions.pop()
          return newTransactions
        })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const refreshData = () => {
    setIsRefreshing(true)

    // Simulate a refresh delay
    setTimeout(() => {
      setMetricsData(generateMetricsData())
      setVolumeData(generateVolumeData())
      setTransactions(generateTransactions())
      setIsRefreshing(false)
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-HK", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("zh-HK", {
      style: "currency",
      currency: "HKD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold">FraudGuard AI Dashboard</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" onClick={refreshData} disabled={isRefreshing}>
                <RefreshCcw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              </Button>
            </div>

            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search transactions..." className="pl-8 w-full sm:w-[250px]" />
            </div>
          </div>
        </div>

        {/* Live Metrics Summary */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricsData.totalTransactions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+2.5% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Flagged Transactions</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricsData.flaggedTransactions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {((metricsData.flaggedTransactions / metricsData.totalTransactions) * 100).toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Risk Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricsData.averageRiskScore}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 inline-flex items-center">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  1.2 pts
                </span>{" "}
                from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricsData.responseTime} ms</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 inline-flex items-center">
                  <ArrowDownRight className="h-3 w-3 mr-1" />5 ms
                </span>{" "}
                from average
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Fraud Prevented</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">HK${metricsData.fraudPrevented}M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 inline-flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  8.3%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Alert Accuracy</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metricsData.alertAccuracy}%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 inline-flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  1.2%
                </span>{" "}
                improvement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          {/* Transaction Volume Chart */}
          <Card className="col-span-1 md:col-span-1">
            <CardHeader>
              <CardTitle>Transaction Volume</CardTitle>
              <CardDescription>24-hour transaction activity with flagged items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={volumeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorFlagged" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="hour" tick={{ fontSize: 12 }} interval={3} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip
                      formatter={(value) => [`${value} transactions`, undefined]}
                      labelFormatter={(label) => `Time: ${label}`}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="volume"
                      name="Total Transactions"
                      stroke="#0ea5e9"
                      fillOpacity={1}
                      fill="url(#colorVolume)"
                    />
                    <Area
                      type="monotone"
                      dataKey="flagged"
                      name="Flagged Transactions"
                      stroke="#ef4444"
                      fillOpacity={1}
                      fill="url(#colorFlagged)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Fraud Types / Risk Levels Chart */}
          <Card className="col-span-1 md:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{chartType === "fraudTypes" ? "Fraud Types" : "Risk Level Distribution"}</CardTitle>
                <CardDescription>
                  {chartType === "fraudTypes"
                    ? "Breakdown of detected fraud categories"
                    : "Distribution of transaction risk levels"}
                </CardDescription>
              </div>
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Select chart" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fraudTypes">Fraud Types</SelectItem>
                  <SelectItem value="riskLevels">Risk Levels</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                {chartType === "fraudTypes" ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={fraudTypeData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={70} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                      <Bar dataKey="value" name="Percentage" fill="#8884d8" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={riskLevelData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {riskLevelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction Feed */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Real-Time Transaction Feed</CardTitle>
                <CardDescription>
                  Live monitoring of transactions across Hong Kong financial institutions
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filter</span>
                </Button>
                <Select defaultValue="all">
                  <SelectTrigger className="h-8 w-[130px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="flagged">Flagged</SelectItem>
                    <SelectItem value="cleared">Cleared</SelectItem>
                    <SelectItem value="review">Under Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="h-10 px-4 text-left font-medium">Time</th>
                      <th className="h-10 px-4 text-left font-medium">Transaction ID</th>
                      <th className="h-10 px-4 text-left font-medium">Amount</th>
                      <th className="h-10 px-4 text-left font-medium">Channel</th>
                      <th className="h-10 px-4 text-left font-medium">Bank</th>
                      <th className="h-10 px-4 text-left font-medium">Location</th>
                      <th className="h-10 px-4 text-left font-medium">Risk Score</th>
                      <th className="h-10 px-4 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, i) => (
                      <tr key={transaction.id} className={`border-t ${i === 0 ? "animate-pulse bg-muted/20" : ""}`}>
                        <td className="p-4 align-middle">{formatTime(transaction.timestamp)}</td>
                        <td className="p-4 align-middle font-mono text-xs">{transaction.id}</td>
                        <td className="p-4 align-middle font-medium">{formatCurrency(transaction.amount)}</td>
                        <td className="p-4 align-middle">{transaction.channel}</td>
                        <td className="p-4 align-middle">{transaction.bank}</td>
                        <td className="p-4 align-middle">{transaction.location}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-full max-w-24 rounded-full ${
                                transaction.riskScore > 70
                                  ? "bg-red-500"
                                  : transaction.riskScore > 40
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                              }`}
                            >
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${transaction.riskScore}%` }}
                              />
                            </div>
                            <span>{transaction.riskScore}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline" className={transaction.statusColor}>
                            {transaction.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {transactions.length} of {metricsData.totalTransactions.toLocaleString()} transactions
            </div>
            <Button variant="outline" size="sm">
              View All Transactions
            </Button>
          </CardFooter>
        </Card>

        {/* Hong Kong Financial System Integration */}
        <div className="mt-6">
          <Tabs defaultValue="fps" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fps">HKMA FPS Integration</TabsTrigger>
              <TabsTrigger value="octopus">Octopus Card Monitoring</TabsTrigger>
              <TabsTrigger value="banks">Banking Partners</TabsTrigger>
            </TabsList>

            <TabsContent value="fps" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Faster Payment System Integration</CardTitle>
                  <CardDescription>
                    Real-time monitoring of Hong Kong&apos;s Faster Payment System transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">FPS Transaction Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Daily Volume</div>
                          <div className="text-2xl font-bold">8,432</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Avg. Amount</div>
                          <div className="text-2xl font-bold">HK$2,850</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Alert Rate</div>
                          <div className="text-2xl font-bold">1.2%</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Response Time</div>
                          <div className="text-2xl font-bold">42ms</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold mb-2">Integration Status</h3>
                      <div className="flex-1 rounded-lg border p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Connected
                          </Badge>
                          <span className="text-sm text-muted-foreground">Last updated: 2 minutes ago</span>
                        </div>
                        <p className="text-sm mb-4">
                          FraudGuard AI is actively monitoring all FPS transactions across participating banks in Hong
                          Kong, with direct integration to the HKMA&apos;s central clearing system.
                        </p>
                        <div className="text-sm text-muted-foreground">
                          Supported payment types: Bank transfers, QR code payments, mobile number transfers
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="octopus" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Octopus Card Transaction Monitoring</CardTitle>
                  <CardDescription>Fraud detection for Hong Kong&apos;s Octopus Card payment system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Octopus Transaction Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Daily Volume</div>
                          <div className="text-2xl font-bold">12,845</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Avg. Amount</div>
                          <div className="text-2xl font-bold">HK$42</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Alert Rate</div>
                          <div className="text-2xl font-bold">0.8%</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Response Time</div>
                          <div className="text-2xl font-bold">38ms</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold mb-2">Integration Status</h3>
                      <div className="flex-1 rounded-lg border p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Connected
                          </Badge>
                          <span className="text-sm text-muted-foreground">Last updated: 5 minutes ago</span>
                        </div>
                        <p className="text-sm mb-4">
                          FraudGuard AI monitors Octopus Card transactions across Hong Kong, including retail,
                          transport, and online top-ups, with specialized detection for unusual spending patterns.
                        </p>
                        <div className="text-sm text-muted-foreground">
                          Coverage: MTR, buses, retail stores, online payments, and auto-top up services
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="banks" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Hong Kong Banking Partners</CardTitle>
                  <CardDescription>Integration with major financial institutions across Hong Kong</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-semibold mb-2">HSBC Hong Kong</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 mb-3">
                        Active
                      </Badge>
                      <p className="text-sm mb-3">
                        Full integration with HSBC&apos;s transaction processing systems, covering personal and business
                        banking channels.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <div className="mb-1">Daily transactions: 5,240</div>
                        <div>Alert accuracy: 96.8%</div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-semibold mb-2">Hang Seng Bank</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 mb-3">
                        Active
                      </Badge>
                      <p className="text-sm mb-3">
                        Real-time monitoring of all Hang Seng Bank channels, with specialized detection for cross-border
                        transactions.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <div className="mb-1">Daily transactions: 3,850</div>
                        <div>Alert accuracy: 95.2%</div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-semibold mb-2">Bank of China (HK)</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 mb-3">
                        Active
                      </Badge>
                      <p className="text-sm mb-3">
                        Comprehensive coverage of Bank of China (HK) transactions, with enhanced monitoring for mainland
                        China connections.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <div className="mb-1">Daily transactions: 4,120</div>
                        <div>Alert accuracy: 94.7%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

