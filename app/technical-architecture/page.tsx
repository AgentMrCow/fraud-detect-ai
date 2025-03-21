import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ArrowLeft, Code, Database, Server } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TechnicalArchitecture() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex flex-col items-start gap-4 md:gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Architecture</h1>
            <p className="mt-2 text-muted-foreground md:text-xl">
              Detailed overview of our GenAI-based fraud detection solution architecture
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/Arch.png?height=400&width=1000"
              width={1000}
              height={400}
              alt="System Architecture Diagram"
              className="rounded-lg border shadow-sm w-full"
            />
          </div>

          <Tabs defaultValue="model" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="model">Model Architecture</TabsTrigger>
              <TabsTrigger value="data">Data Requirements</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="integration">API Integration</TabsTrigger>
            </TabsList>

            <TabsContent value="model" className="p-4 border rounded-lg mt-4">
              <h2 className="text-2xl font-bold mb-4">Model Architecture</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Core Detection Models</CardTitle>
                    <CardDescription>Transformer-based architecture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Transaction Analysis Model</p>
                          <p className="text-sm text-muted-foreground">
                            Fine-tuned on Hong Kong transaction patterns with special attention to cross-border flows
                            with mainland China
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Identity Verification Model</p>
                          <p className="text-sm text-muted-foreground">
                            Specialized for Hong Kong ID documents and address verification patterns
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Behavioral Analysis Model</p>
                          <p className="text-sm text-muted-foreground">
                            Tracks user behavior across digital channels with cultural context for Hong Kong users
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Generative Components</CardTitle>
                    <CardDescription>GAN and diffusion model architecture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Synthetic Data Generator</p>
                          <p className="text-sm text-muted-foreground">
                            Creates realistic fraud scenarios based on Hong Kong financial patterns
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Adversarial Testing Framework</p>
                          <p className="text-sm text-muted-foreground">
                            Continuously challenges detection models with new fraud patterns
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Explanation Generator</p>
                          <p className="text-sm text-muted-foreground">
                            Produces human-readable explanations for model decisions in compliance with HKMA
                            requirements
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Model Training Pipeline</h3>
                <Image
                  src="/GAN.png?height=300&width=800"
                  width={800}
                  height={300}
                  alt="Model Training Pipeline"
                  className="rounded-lg border shadow-sm w-full"
                />
              </div>
            </TabsContent>

            <TabsContent value="data" className="p-4 border rounded-lg mt-4">
              <h2 className="text-2xl font-bold mb-4">Data Requirements</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Training Data Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Historical Transaction Data</p>
                          <p className="text-sm text-muted-foreground">
                            Anonymized transaction records from participating Hong Kong banks
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Fraud Case Repository</p>
                          <p className="text-sm text-muted-foreground">
                            Documented fraud cases from HKMA and participating institutions
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Synthetic Data</p>
                          <p className="text-sm text-muted-foreground">
                            GAN-generated fraud scenarios based on Hong Kong patterns
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Processing Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Data Anonymization</p>
                          <p className="text-sm text-muted-foreground">
                            Compliant with PDPO requirements for personal data protection
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Feature Engineering</p>
                          <p className="text-sm text-muted-foreground">
                            Hong Kong-specific features including Octopus card usage and FPS patterns
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Data Augmentation</p>
                          <p className="text-sm text-muted-foreground">
                            Techniques to address class imbalance in fraud detection
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Data Flow Diagram</h3>
                <Image
                  src="/GAN.png?height=300&width=800"
                  width={800}
                  height={300}
                  alt="Data Flow Diagram"
                  className="rounded-lg border shadow-sm w-full"
                />
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="p-4 border rounded-lg mt-4">
              <h2 className="text-2xl font-bold mb-4">Cloud Infrastructure</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Server className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Hong Kong Regional Cloud</p>
                          <p className="text-sm text-muted-foreground">
                            Deployment on local data centers for data residency compliance
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Server className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Kubernetes Orchestration</p>
                          <p className="text-sm text-muted-foreground">
                            Containerized microservices for scalability and resilience
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Server className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">GPU Clusters</p>
                          <p className="text-sm text-muted-foreground">
                            Dedicated hardware for model inference and training
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Server className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Encryption Standards</p>
                          <p className="text-sm text-muted-foreground">
                            End-to-end encryption meeting HKMA cybersecurity guidelines
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Server className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Access Control</p>
                          <p className="text-sm text-muted-foreground">
                            Role-based access with multi-factor authentication
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Server className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Audit Logging</p>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive logging for regulatory compliance
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Infrastructure Diagram</h3>
                <Image
                  src="/GAN.png?height=300&width=800"
                  width={800}
                  height={300}
                  alt="Infrastructure Diagram"
                  className="rounded-lg border shadow-sm w-full"
                />
              </div>
            </TabsContent>

            <TabsContent value="integration" className="p-4 border rounded-lg mt-4">
              <h2 className="text-2xl font-bold mb-4">API Integration</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Integration Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Core Banking Systems</p>
                          <p className="text-sm text-muted-foreground">
                            Real-time integration with major Hong Kong banks including HSBC, Hang Seng, and Bank of
                            China
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Payment Gateways</p>
                          <p className="text-sm text-muted-foreground">
                            Integration with FPS, Octopus, and other Hong Kong payment systems
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Regulatory Reporting</p>
                          <p className="text-sm text-muted-foreground">
                            Automated reporting to HKMA and other regulatory bodies
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>API Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">REST APIs</p>
                          <p className="text-sm text-muted-foreground">
                            Standard interfaces for transaction verification and reporting
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Real-time Webhooks</p>
                          <p className="text-sm text-muted-foreground">Event-driven notifications for fraud alerts</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Batch Processing</p>
                          <p className="text-sm text-muted-foreground">
                            Scheduled data processing for model retraining
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Integration Architecture</h3>
                <Image
                  src="/GAN.png?height=300&width=800"
                  width={800}
                  height={300}
                  alt="Integration Architecture"
                  className="rounded-lg border shadow-sm w-full"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="w-full mt-8">
            <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
            <Card>
              <CardHeader>
                <CardTitle>Hong Kong Regulatory Framework</CardTitle>
                <CardDescription>
                  Our solution is designed to meet all relevant Hong Kong financial regulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">HKMA Guidelines</h3>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Guideline on Anti-Money Laundering and Counter-Financing of Terrorism</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Cybersecurity Fortification Initiative 2.0</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Supervisory Policy Manual on Technology Risk Management</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Privacy</h3>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Personal Data (Privacy) Ordinance (PDPO)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>PCPD Guidelines on Use of AI and Personal Data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span>Data Ethics Principles for the Banking Industry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full flex justify-center mt-8">
            <Button size="lg" className="gap-2">
              <span>Download Full Technical Specification</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

