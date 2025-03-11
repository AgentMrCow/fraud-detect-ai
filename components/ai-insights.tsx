"use client"

import {
  Brain,
  ChevronDown,
  ExternalLink,
  Info,
  LineChart,
  Lightbulb,
  MoreHorizontal,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AiInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">AI Insights</h2>
          <p className="text-muted-foreground">Advanced fraud detection patterns and anomalies identified by our AI</p>
        </div>
        <Button>
          <Zap className="mr-2 h-4 w-4" />
          Generate new insights
        </Button>
      </div>

      <Tabs defaultValue="patterns">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="patterns">Fraud Patterns</TabsTrigger>
          <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="patterns" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Account Takeover Pattern",
                description: "Multiple password resets followed by unusual transactions",
                confidence: 92,
                impact: "High",
                trend: "up",
                details:
                  "The AI has detected a pattern where accounts experience multiple password reset attempts followed by immediate large withdrawals or transfers to new beneficiaries.",
              },
              {
                title: "Card Testing Pattern",
                description: "Multiple small transactions followed by large purchases",
                confidence: 87,
                impact: "Medium",
                trend: "down",
                details:
                  "Fraudsters are testing stolen card details with small transactions before making larger purchases. The pattern shows decreasing frequency due to recent preventive measures.",
              },
              {
                title: "Synthetic Identity Pattern",
                description: "New accounts with inconsistent identity information",
                confidence: 78,
                impact: "High",
                trend: "up",
                details:
                  "The AI has identified accounts created with synthetic identities combining real and fake information, showing unusual activity patterns in the first 30 days.",
              },
            ].map((pattern, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={pattern.impact === "High" ? "destructive" : "secondary"} className="mb-1">
                      {pattern.impact} Impact
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View full analysis</DropdownMenuItem>
                        <DropdownMenuItem>Export report</DropdownMenuItem>
                        <DropdownMenuItem>Create alert rule</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-lg">{pattern.title}</CardTitle>
                  <CardDescription>{pattern.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">AI Confidence</div>
                    <div className="flex items-center">
                      <span className="mr-1 font-bold">{pattern.confidence}%</span>
                      {pattern.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-amber-500" />
                      )}
                    </div>
                  </div>
                  <Progress value={pattern.confidence} className="h-2" />

                  <Collapsible className="mt-4">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex w-full justify-between p-0 h-8">
                        <span className="text-xs">View details</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2">
                      <div className="text-sm text-muted-foreground">{pattern.details}</div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
                <CardFooter className="pt-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Explore pattern
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="anomalies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detected Anomalies</CardTitle>
              <CardDescription>Unusual patterns detected by our AI that deviate from normal behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Unusual Login Location Cluster",
                    description: "Multiple accounts accessed from same unusual IP range",
                    severity: "Critical",
                    time: "2 hours ago",
                    icon: <Info className="h-5 w-5 text-destructive" />,
                  },
                  {
                    title: "Transaction Velocity Anomaly",
                    description: "Sudden increase in transaction frequency for 15 accounts",
                    severity: "High",
                    time: "5 hours ago",
                    icon: <LineChart className="h-5 w-5 text-amber-500" />,
                  },
                  {
                    title: "Behavior Pattern Shift",
                    description: "Significant change in spending patterns for premium customers",
                    severity: "Medium",
                    time: "1 day ago",
                    icon: <Brain className="h-5 w-5 text-blue-500" />,
                  },
                ].map((anomaly, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    {anomaly.icon}
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{anomaly.title}</p>
                      <p className="text-sm text-muted-foreground">{anomaly.description}</p>
                      <div className="flex items-center pt-2">
                        <Badge
                          variant={
                            anomaly.severity === "Critical"
                              ? "destructive"
                              : anomaly.severity === "High"
                                ? "default"
                                : "secondary"
                          }
                          className="mr-2"
                        >
                          {anomaly.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{anomaly.time}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Investigate
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Actionable insights to improve your fraud detection system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Update Risk Scoring Model",
                    description:
                      "Current model is flagging too many legitimate transactions from international customers",
                    impact: "High",
                    effort: "Medium",
                    icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
                  },
                  {
                    title: "Implement Device Fingerprinting",
                    description: "Add device fingerprinting to improve account takeover detection",
                    impact: "High",
                    effort: "High",
                    icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
                  },
                  {
                    title: "Adjust Transaction Velocity Rules",
                    description: "Current thresholds are causing false positives for business accounts",
                    impact: "Medium",
                    effort: "Low",
                    icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
                  },
                ].map((recommendation, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-4">
                    {recommendation.icon}
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{recommendation.title}</p>
                      <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                      <div className="flex items-center gap-3 pt-2">
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-1">Impact:</span>
                          <Badge
                            variant={recommendation.impact === "High" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {recommendation.impact}
                          </Badge>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs font-medium mr-1">Effort:</span>
                          <Badge variant="outline" className="text-xs">
                            {recommendation.effort}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="ml-auto">
                      Implement
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

