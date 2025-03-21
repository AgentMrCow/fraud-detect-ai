import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Info, LineChart, PieChart } from "lucide-react"
import Link from "next/link"

export default function ExplainableAI() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex flex-col items-start gap-4 md:gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explainable AI Integration</h1>
            <p className="mt-2 text-muted-foreground md:text-xl">
              Transparent AI decision-making for regulatory compliance and user trust
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/placeholder.svg?height=400&width=1000"
              width={1000}
              height={400}
              alt="Explainable AI Dashboard"
              className="rounded-lg border shadow-sm w-full"
            />
          </div>

          <Tabs defaultValue="lime" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="lime">LIME Integration</TabsTrigger>
              <TabsTrigger value="shap">SHAP Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="lime" className="p-4 border rounded-lg mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4">LIME Integration</h2>
                  <p className="mb-4">
                    Local Interpretable Model-agnostic Explanations (LIME) provides feature-level explanations for why
                    specific transactions were flagged, helping compliance teams understand the AI&apos;s decision-making
                    process.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <span>Transparent explanations for each flagged transaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <span>Compliance with HKMA&apos;s explainability requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <span>Reduced false positives through human feedback</span>
                    </li>
                  </ul>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>LIME Explanation Example</CardTitle>
                    <CardDescription>Transaction flagged for unusual pattern</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium">Transaction Details:</p>
                        <p className="text-sm">HKD 50,000 transfer to new recipient at 2:30 AM</p>
                        <p className="text-sm">From: HSBC Account</p>
                        <p className="text-sm">To: Bank of China (Shenzhen Branch)</p>
                      </div>

                      <div>
                        <p className="font-medium mb-2">Features Contributing to Flag:</p>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-sm">
                              <span>Unusual Time (2:30 AM)</span>
                              <span className="font-medium text-red-500">+45%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm">
                              <span>New Recipient</span>
                              <span className="font-medium text-red-500">+30%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm">
                              <span>Cross-border Transfer</span>
                              <span className="font-medium text-red-500">+15%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm">
                              <span>Amount (HKD 50,000)</span>
                              <span className="font-medium text-red-500">+10%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">LIME Implementation</h3>
                <Image
                  src="/placeholder.svg?height=300&width=800"
                  width={800}
                  height={300}
                  alt="LIME Implementation Diagram"
                  className="rounded-lg border shadow-sm w-full"
                />
              </div>
            </TabsContent>

            <TabsContent value="shap" className="p-4 border rounded-lg mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4">SHAP Analysis</h2>
                  <p className="mb-4">
                    SHapley Additive exPlanations (SHAP) quantifies the contribution of each feature to the fraud
                    prediction, enabling precise understanding of risk factors in the Hong Kong market context.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <span>Quantitative measurement of feature importance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <span>Global model interpretability for regulatory audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-0.5" />
                      <span>Identification of potential model biases</span>
                    </li>
                  </ul>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>SHAP Analysis Example</CardTitle>
                    <CardDescription>Feature importance for fraud detection model</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-center">
                      <PieChart className="h-40 w-40 text-primary" />
                    </div>

                    <div>
                      <p className="font-medium mb-2">Global Feature Importance:</p>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Transaction Time Anomaly</span>
                            <span className="font-medium">25%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Recipient History</span>
                            <span className="font-medium">22%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "22%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Transaction Amount</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "18%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Cross-border Indicator</span>
                            <span className="font-medium">15%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "15%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>User Behavior Pattern</span>
                            <span className="font-medium">12%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "12%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Device Information</span>
                            <span className="font-medium">8%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "8%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">SHAP Value Distribution</h3>
                <div className="flex justify-center">
                  <LineChart className="h-60 w-full text-primary" />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
            <Card>
              <CardHeader>
                <CardTitle>Explainability Requirements</CardTitle>
                <CardDescription>Meeting Hong Kong regulatory standards for AI transparency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">HKMA Requirements</h3>
                    <p>
                      The Hong Kong Monetary Authority requires financial institutions to ensure that AI systems used in
                      critical functions like fraud detection provide clear explanations for their decisions. Our
                      solution meets these requirements through:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Detailed transaction-level explanations</li>
                      <li>Quantifiable feature importance metrics</li>
                      <li>Audit trails for model decisions</li>
                      <li>Human-in-the-loop verification for high-risk cases</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Documentation and Reporting</h3>
                    <p>
                      Our system automatically generates the following documentation to support regulatory compliance:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Model explanation reports for each flagged transaction</li>
                      <li>Quarterly model performance and bias audits</li>
                      <li>Feature importance trend analysis</li>
                      <li>Regulatory submission templates for HKMA reporting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

