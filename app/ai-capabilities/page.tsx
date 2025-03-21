import Image from "next/image"
import Link from "next/link"
import {
    ArrowLeft,
    Zap,
    Database,
    Layers,
    LineChart,
    Shield,
    BarChart3,
    Brain,
    FileText,
    CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AICapabilities() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className="container px-4 py-6 md:px-6 md:py-8">
                <Link href="/" className="inline-flex items-center gap-2 mb-6">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Home</span>
                </Link>

                {/* Hero Section */}
                <section className="mb-12">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced AI Capabilities</h1>
                            <p className="text-muted-foreground md:text-xl">
                                FraudGuard AI leverages cutting-edge generative AI technologies to deliver unparalleled fraud detection
                                and prevention for Hong Kong&apos;s financial institutions.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/modern-finace-solutions-with-ai-technology.jpg?height=300&width=500"
                                width={500}
                                height={300}
                                alt="AI Capabilities Visualization"
                                className="rounded-lg object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Core AI Functions Overview */}
                <section className="mb-12">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Core AI Functions</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our solution combines multiple generative AI technologies to create a comprehensive fraud detection system
                            tailored for Hong Kong&apos;s financial ecosystem.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="flex flex-col">
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Zap className="h-6 w-6 text-primary" />
                                <CardTitle>Real-Time Detection Engine</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>
                                    Processes transactions in milliseconds using transformer-based models to identify anomalous patterns
                                    specific to Hong Kong&apos;s financial ecosystem.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" size="sm" className="w-full">
                                    Learn More
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col">
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Database className="h-6 w-6 text-primary" />
                                <CardTitle>Synthetic Data Generation</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>
                                    Uses GANs to create realistic fraud scenarios based on Hong Kong transaction patterns, improving
                                    detection of novel fraud techniques.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" size="sm" className="w-full">
                                    Learn More
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col">
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Layers className="h-6 w-6 text-primary" />
                                <CardTitle>Multimodal Analysis</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>
                                    Combines text, transaction data, and biometric information to provide comprehensive fraud detection
                                    across digital and physical channels.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" size="sm" className="w-full">
                                    Learn More
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col">
                            <CardHeader className="flex flex-row items-center gap-2">
                                <LineChart className="h-6 w-6 text-primary" />
                                <CardTitle>Explainable AI Integration</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p>
                                    Implements LIME and SHAP to provide transparent, HKMA-compliant explanations for each flagged
                                    transaction.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" size="sm" className="w-full">
                                    Learn More
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </section>

                {/* Detailed AI Capabilities */}
                <section className="mb-12">
                    <Tabs defaultValue="detection" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="detection">Detection Engine</TabsTrigger>
                            <TabsTrigger value="synthetic">Synthetic Data</TabsTrigger>
                            <TabsTrigger value="multimodal">Multimodal Analysis</TabsTrigger>
                            <TabsTrigger value="explainable">Explainable AI</TabsTrigger>
                        </TabsList>

                        <TabsContent value="detection" className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Real-Time Detection Engine</h3>
                                    <p className="mb-4">
                                        Our transformer-based detection engine processes transactions in milliseconds, identifying anomalous
                                        patterns specific to Hong Kong&apos;s financial ecosystem.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Faster Payment System Integration</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Seamless integration with HKMA&apos;s FPS for real-time transaction monitoring
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Hong Kong-Specific Patterns</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Models trained on local transaction patterns, including Octopus Card usage and cross-border
                                                    flows
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Sub-Second Response Time</p>
                                                <p className="text-sm text-muted-foreground">
                                                    99.9% of transactions analyzed in under 100ms, enabling real-time intervention
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <Image
                                        src="/transaction.png?height=300&width=500"
                                        width={500}
                                        height={300}
                                        alt="Real-Time Detection Engine Visualization"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="synthetic" className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Synthetic Data Generation</h3>
                                    <p className="mb-4">
                                        Our GAN-based synthetic data generation creates realistic fraud scenarios based on Hong Kong
                                        transaction patterns, improving detection of novel fraud techniques.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Hong Kong-Specific Fraud Patterns</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Generates synthetic data that mimics local fraud schemes and emerging threats
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Adversarial Training</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Continuously challenges detection models with new fraud patterns
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Privacy-Preserving Techniques</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Compliant with PDPO guidelines while creating realistic training data
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <Image
                                        src="/new_smart_id.png?height=300&width=500"
                                        width={500}
                                        height={300}
                                        alt="Synthetic Data Generation Visualization"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="multimodal" className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Multimodal Analysis</h3>
                                    <p className="mb-4">
                                        Our multimodal analysis combines text, transaction data, and biometric information to provide
                                        comprehensive fraud detection across digital and physical channels.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">HKID Document Analysis</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Advanced verification of Hong Kong identity documents
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Behavioral Biometrics</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Analyzes typing patterns, device handling, and other behavioral indicators
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Cross-Channel Correlation</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Links activities across mobile, web, and in-person banking channels
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <Image
                                        src="/multimodal.png?height=300&width=500"
                                        width={500}
                                        height={300}
                                        alt="Multimodal Analysis Visualization"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="explainable" className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Explainable AI Integration</h3>
                                    <p className="mb-4">
                                        Our explainable AI integration implements LIME and SHAP to provide transparent, HKMA-compliant
                                        explanations for each flagged transaction.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">LIME Feature Explanations</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Provides feature-level explanations for why specific transactions were flagged
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">SHAP Value Analysis</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Quantifies the contribution of each feature to the fraud prediction
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Regulatory Compliance</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Meets HKMA requirements for AI transparency and explainability
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <Image
                                        src="/explain.png?height=300&width=500"
                                        width={500}
                                        height={300}
                                        alt="Explainable AI Visualization"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Technical Architecture */}
                <section className="mb-12">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">AI Technical Architecture</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Built on proven technologies with Hong Kong-specific optimizations
                        </p>
                    </div>

                    <div className="mb-8">
                        <Image
                            src="/GAN.png?height=400&width=1000"
                            width={1000}
                            height={400}
                            alt="AI Technical Architecture Diagram"
                            className="rounded-lg border shadow-sm w-full"
                        />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Brain className="h-6 w-6 text-primary" />
                                <CardTitle>Model Architecture</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Transformer-based models fine-tuned on Hong Kong financial data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Ensemble approach combining rule-based systems with deep learning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Continuous learning pipeline with human feedback integration</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Database className="h-6 w-6 text-primary" />
                                <CardTitle>Data Processing</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Real-time data processing with sub-100ms latency</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Privacy-preserving techniques compliant with PDPO</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Hong Kong-specific feature engineering</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center gap-2">
                                <FileText className="h-6 w-6 text-primary" />
                                <CardTitle>Integration APIs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Seamless integration with Hong Kong banking systems</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>HKMA-compliant reporting interfaces</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                                        <span>Secure API endpoints with Hong Kong data residency</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Hong Kong Market Relevance */}
                <section className="mb-12 bg-muted p-8 rounded-lg">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                            Tailored for Hong Kong&apos;s Financial Ecosystem
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            FraudGuard AI is specifically designed for the unique challenges and regulatory requirements of Hong
                            Kong&apos;s financial market
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-center">HKMA Compliance</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
                                <p>Fully compliant with Hong Kong Monetary Authority guidelines for AI in financial services</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-center">Local Integration</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Layers className="h-12 w-12 mx-auto mb-4 text-primary" />
                                <p>Seamless integration with Hang Seng Bank, HSBC, and other local financial institutions</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-center">Data Residency</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
                                <p>Hong Kong data centers ensure compliance with local data residency requirements</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-center">Local Expertise</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
                                <p>Developed with input from Hong Kong financial security experts and regulators</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <div className="mx-auto max-w-[900px] space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                            Ready to Enhance Your Fraud Detection Capabilities?
                        </h2>
                        <p className="text-muted-foreground md:text-xl">
                            Schedule a demo to see how FraudGuard AI can protect your institution with advanced AI technology.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <Link href="/dashboard">
                                <Button size="lg" className="gap-1">
                                    <Zap className="h-4 w-4" />
                                    Request Demo
                                </Button>
                            </Link>
                            <Link href="/technical-architecture">
                                <Button size="lg" variant="outline">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

