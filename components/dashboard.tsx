"use client"

import { useState } from "react"
import {
    AlertTriangle,
    BarChart3,
    Bell,
    Brain,
    ChevronDown,
    Clock,
    CreditCard,
    DollarSign,
    FileText,
    Filter,
    Home,
    MoreHorizontal,
    Search,
    Settings,
    Shield,
    ShieldAlert,
    User,
} from "lucide-react"
import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuBadge,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import FraudChart from "@/components/fraud-chart"
import TransactionTable from "@/components/transaction-table"
import AiInsights from "@/components/ai-insights"

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-background">
                <Sidebar>
                    <SidebarHeader>
                        <div className="flex items-center gap-2 px-2">
                            <ShieldAlert className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">FraudGuard AI</span>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton isActive={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
                                            <Home className="h-4 w-4" />
                                            <span>Overview</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton isActive={activeTab === "alerts"} onClick={() => setActiveTab("alerts")}>
                                            <AlertTriangle className="h-4 w-4" />
                                            <span>Alerts</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge className="bg-destructive text-destructive-foreground">12</SidebarMenuBadge>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            isActive={activeTab === "transactions"}
                                            onClick={() => setActiveTab("transactions")}
                                        >
                                            <CreditCard className="h-4 w-4" />
                                            <span>Transactions</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton isActive={activeTab === "reports"} onClick={() => setActiveTab("reports")}>
                                            <FileText className="h-4 w-4" />
                                            <span>Reports</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarGroup>
                            <SidebarGroupLabel>AI Tools</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton isActive={activeTab === "insights"} onClick={() => setActiveTab("insights")}>
                                            <Brain className="h-4 w-4" />
                                            <span>AI Insights</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            isActive={activeTab === "predictions"}
                                            onClick={() => setActiveTab("predictions")}
                                        >
                                            <BarChart3 className="h-4 w-4" />
                                            <span>Predictions</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Settings className="h-4 w-4" />
                                    <span>Settings</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuButton>
                                            <Avatar className="h-5 w-5 mr-1">
                                                <AvatarImage src="/placeholder-user.jpg" />
                                                <AvatarFallback>NN</AvatarFallback>
                                            </Avatar>
                                            <span>Nelson Niu</span>
                                            <ChevronDown className="h-4 w-4 ml-auto" />
                                        </SidebarMenuButton>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <span>Log out</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <div className="flex flex-col flex-1">
                    <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
                        <SidebarTrigger />
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search transactions, alerts..."
                                        className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
                                    />
                                </div>
                            </form>
                        </div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon" className="relative">
                                        <Bell className="h-4 w-4" />
                                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                                            4
                                        </span>
                                        <span className="sr-only">Notifications</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Notifications</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>NN</AvatarFallback>
                        </Avatar>
                    </header>
                    <main className="flex-1 p-4 md:p-6">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                            <div className="flex items-center justify-between">
                                <TabsList>
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="alerts">Alerts</TabsTrigger>
                                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                                    <TabsTrigger value="insights">AI Insights</TabsTrigger>
                                </TabsList>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="sm">
                                        <Clock className="mr-2 h-4 w-4" />
                                        Last 30 days
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Filter className="mr-2 h-4 w-4" />
                                        Filter
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Fraud Attempts</CardTitle>
                                            <AlertTriangle className="h-4 w-4 text-destructive" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">127</div>
                                            <p className="text-xs text-muted-foreground">+14% from last month</p>
                                            <div className="mt-4">
                                                <Progress value={65} className="h-2" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Blocked Transactions</CardTitle>
                                            <Shield className="h-4 w-4 text-primary" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">89</div>
                                            <p className="text-xs text-muted-foreground">+5% from last month</p>
                                            <div className="mt-4">
                                                <Progress value={45} className="h-2" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Amount Saved</CardTitle>
                                            <DollarSign className="h-4 w-4 text-green-500" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">$42,891</div>
                                            <p className="text-xs text-muted-foreground">+18% from last month</p>
                                            <div className="mt-4">
                                                <Progress value={78} className="h-2" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">AI Confidence</CardTitle>
                                            <Brain className="h-4 w-4 text-blue-500" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">98.7%</div>
                                            <p className="text-xs text-muted-foreground">+2.3% from last month</p>
                                            <div className="mt-4">
                                                <Progress value={98} className="h-2" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                    <Card className="col-span-4">
                                        <CardHeader>
                                            <CardTitle>Fraud Detection Trends</CardTitle>
                                            <CardDescription>Daily fraud attempts vs. successful blocks</CardDescription>
                                        </CardHeader>
                                        <CardContent className="pl-2">
                                            <FraudChart />
                                        </CardContent>
                                    </Card>
                                    <Card className="col-span-3">
                                        <CardHeader>
                                            <CardTitle>Recent Alerts</CardTitle>
                                            <CardDescription>Latest high-priority fraud alerts</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                                                        <AlertTriangle className="mt-0.5 h-5 w-5 text-destructive" />
                                                        <div className="space-y-1">
                                                            <p className="text-sm font-medium leading-none">Suspicious transaction detected</p>
                                                            <p className="text-sm text-muted-foreground">
                                                                Transaction #{Math.floor(Math.random() * 10000)} from unusual location
                                                            </p>
                                                            <div className="flex items-center pt-1">
                                                                <Badge variant="outline" className="mr-1">
                                                                    High Risk
                                                                </Badge>
                                                                <span className="text-xs text-muted-foreground">2 min ago</span>
                                                            </div>
                                                        </div>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                    <span className="sr-only">More</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem>View details</DropdownMenuItem>
                                                                <DropdownMenuItem>Mark as reviewed</DropdownMenuItem>
                                                                <DropdownMenuItem>Block transaction</DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" className="w-full">
                                                View all alerts
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Recent Transactions</CardTitle>
                                        <CardDescription>Overview of recent transactions and their risk scores</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <TransactionTable />
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline" className="w-full">
                                            View all transactions
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="alerts" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Fraud Alerts</CardTitle>
                                        <CardDescription>All detected fraud alerts sorted by priority</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                                                    <AlertTriangle className="mt-0.5 h-5 w-5 text-destructive" />
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium leading-none">
                                                            {
                                                                [
                                                                    "Suspicious login attempt",
                                                                    "Unusual transaction pattern",
                                                                    "Multiple failed authentication",
                                                                    "Potential account takeover",
                                                                    "Suspicious IP address",
                                                                ][i % 5]
                                                            }
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {
                                                                [
                                                                    "User attempted login from unrecognized device in new location",
                                                                    "Multiple small transactions followed by large withdrawal",
                                                                    "5 failed password attempts in 3 minutes",
                                                                    "Password changed and immediate funds transfer attempted",
                                                                    "Access from IP address associated with known fraud",
                                                                ][i % 5]
                                                            }
                                                        </p>
                                                        <div className="flex items-center pt-2">
                                                            <Badge
                                                                variant={(["destructive", "outline", "destructive", "outline", "destructive"] as const)[i % 5]}
                                                                className="mr-2"
                                                            >
                                                                {(["Critical", "Medium", "High", "Medium", "High"] as const)[i % 5]}
                                                            </Badge>

                                                            <span className="text-xs text-muted-foreground">
                                                                {[5, 12, 18, 27, 34][i % 5]} min ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">More</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem>View details</DropdownMenuItem>
                                                            <DropdownMenuItem>Mark as reviewed</DropdownMenuItem>
                                                            <DropdownMenuItem>Escalate</DropdownMenuItem>
                                                            <DropdownMenuItem>Dismiss</DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline">Previous</Button>
                                        <Button variant="outline">Next</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="transactions" className="space-y-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <div>
                                            <CardTitle>Transaction History</CardTitle>
                                            <CardDescription>Complete list of transactions with risk assessment</CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Input placeholder="Search transactions..." className="w-[250px]" />
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline">
                                                        <Filter className="mr-2 h-4 w-4" />
                                                        Filter
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-[200px]">
                                                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>All transactions</DropdownMenuItem>
                                                    <DropdownMenuItem>High risk only</DropdownMenuItem>
                                                    <DropdownMenuItem>Blocked transactions</DropdownMenuItem>
                                                    <DropdownMenuItem>Approved transactions</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <TransactionTable extended />
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <div className="text-sm text-muted-foreground">Showing 10 of 234 transactions</div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">
                                                Previous
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Next
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="insights" className="space-y-4">
                                <AiInsights />
                            </TabsContent>
                        </Tabs>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

