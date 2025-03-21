import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, BarChart3, CheckCircle, Clock, Shield, Zap, LineChart, Layers, Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FraudGuard AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/ai-capabilities">
              <Button variant="ghost">AI Capabilities</Button>
            </Link>
            <Link href="/explainable-ai">
              <Button variant="ghost">Explainable AI</Button>
            </Link>
            <Link href="/technical-architecture">
              <Button variant="ghost">Technical Architecture</Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/dashboard" className="flex">
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/ai-capabilities" className="flex">
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Zap className="mr-2 h-5 w-5" />
                    AI Capabilities
                  </Button>
                </Link>
                <Link href="/explainable-ai" className="flex">
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <LineChart className="mr-2 h-5 w-5" />
                    Explainable AI
                  </Button>
                </Link>
                <Link href="/technical-architecture" className="flex">
                  <Button variant="ghost" className="w-full justify-start" size="lg">
                    <Layers className="mr-2 h-5 w-5" />
                    Technical Architecture
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Next-Generation Fraud Detection for Hong Kong Financial Institutions
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Leveraging generative AI to protect financial transactions, detect synthetic identities, and ensure
                  regulatory compliance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="gap-1">
                    <Zap className="h-4 w-4" />
                    Request Demo
                  </Button>
                </Link>
                <Link href="/ai-capabilities">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/dashboard.png?height=400&width=500"
                width={500}
                height={400}
                alt="FraudGuard AI Platform Dashboard"
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Fraud Detection Platform
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our solution combines multiple GenAI technologies to provide a holistic approach to fraud detection and
                prevention.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle>Real-Time Detection Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Processes transactions in milliseconds using transformer-based models to identify anomalous patterns
                  and potential fraud.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <CardTitle>Synthetic Data Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Uses GANs to create realistic fraud scenarios for model training, improving detection of novel fraud
                  techniques.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Multimodal Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Combines text, transaction data, and biometric information to provide comprehensive fraud detection
                  across channels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explainable AI Integration
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our solution provides clear, interpretable explanations for each flagged transaction.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>LIME Integration</CardTitle>
                <CardDescription>Local Interpretable Model-agnostic Explanations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Provides feature-level explanations for why specific transactions were flagged, helping compliance
                  teams understand the AI&apos;s decision-making process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>SHAP Analysis</CardTitle>
                <CardDescription>SHapley Additive exPlanations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Quantifies the contribution of each feature to the fraud prediction, enabling precise understanding of
                  risk factors in the Hong Kong market context.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Use Case Scenarios</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored solutions for the unique challenges of Hong Kong&apos;s financial ecosystem.
              </p>
            </div>
          </div>

          <Tabs defaultValue="transaction" className="mx-auto max-w-5xl py-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="transaction">Transaction Fraud</TabsTrigger>
              <TabsTrigger value="identity">Identity Verification</TabsTrigger>
            </TabsList>
            <TabsContent value="transaction" className="p-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Transaction Monitoring</h3>
                  <p className="mb-4">
                    Our system analyzes transactions across Octopus Card payments, FPS transfers, and traditional
                    banking channels to detect anomalies in real-time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Integration with HKMA&apos;s Faster Payment System</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Cross-border transaction monitoring for mainland China connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Specialized detection for common Hong Kong fraud schemes</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/transaction.png?height=250&width=350"
                    width={350}
                    height={250}
                    alt="Transaction monitoring dashboard"
                    className="rounded-lg shadow"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="identity" className="p-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-2">Synthetic ID Detection</h3>
                  <p className="mb-4">
                    Our solution detects artificially created identities by analyzing patterns across Hong Kong ID
                    cards, address verification, and behavioral biometrics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>HKID validation with advanced document analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Integration with eKYC systems used by Hang Seng Bank and HSBC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Behavioral analysis to detect unusual account creation patterns</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/new_smart_id.png?height=250&width=350"
                    width={350}
                    height={250}
                    alt="Identity verification system"
                    className="rounded-lg shadow"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Feasibility</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Built on proven technologies with Hong Kong-specific optimizations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Model Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span>Transformer-based models fine-tuned on Hong Kong financial data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span>Ensemble approach combining rule-based systems with deep learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span>Continuous learning pipeline with human feedback integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cloud Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span>Deployment on Hong Kong regional cloud providers for data residency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span>Kubernetes-based microservices architecture for scalability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span>API-driven integration with existing banking systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industry Impact</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforming fraud prevention in Hong Kong&apos;s financial sector.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-center">
                <CardTitle className="text-center text-3xl font-bold">40%</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Reduction in fraud losses for financial institutions</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-center">
                <CardTitle className="text-center text-3xl font-bold">95%</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Accuracy in detecting synthetic identities</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-center">
                <CardTitle className="text-center text-3xl font-bold">60%</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Improvement in operational efficiency</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-center">
                <CardTitle className="text-center text-3xl font-bold">100%</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Compliance with HKMA regulatory standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Risk Management</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Addressing data privacy, ethical considerations, and potential AI misuse.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                <CardTitle>Data Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Compliant with Hong Kong&apos;s Personal Data (Privacy) Ordinance and PDPO guidelines, with data
                  localization and strict access controls.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                <CardTitle>Ethical Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Regular bias audits to ensure fair treatment across Hong Kong&apos;s diverse population, with special
                  attention to cross-border transactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                <CardTitle>AI Misuse Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Robust security measures to prevent adversarial attacks, with continuous monitoring for model
                  manipulation attempts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 FraudGuard AI. All rights reserved. Designed for Hong Kong financial institutions.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              Terms
            </Button>
            <Button variant="ghost" size="sm">
              Privacy
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </main>
  )
}

