import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, FileText, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Landing = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Intelligent Chat",
      description: "Chat naturally with AI to extract complete requirements"
    },
    {
      icon: FileText,
      title: "Auto SRS Generation",
      description: "Generate comprehensive SRS documents automatically"
    },
    {
      icon: Sparkles,
      title: "Smart Analysis",
      description: "AI identifies gaps and suggests improvements"
    }
  ];

  const benefits = [
    "Reduce requirement gathering time by 80%",
    "Eliminate miscommunication with stakeholders",
    "Generate professional SRS documents instantly",
    "Track project requirements in real-time"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-secondary/10 -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Requirement Engineering</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-foreground">Requirement Engineer</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chat with an intelligent bot that gathers complete software requirements 
              and generates an SRS report automatically.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-glow text-white font-semibold px-8 py-6 text-lg group"
                >
                  Start Requirement Chat
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-2"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Why Choose ReqBot?
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern requirement gathering powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0"
                style={{ animation: "fade-up 600ms ease-out forwards", animationDelay: `${index * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow animate-[float_3s_ease-in-out_infinite]">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
        <div className="absolute -top-32 -right-24 w-72 h-72 rounded-full bg-gradient-primary opacity-20 blur-3xl -z-10" />
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Transform Your Workflow
            </h2>
            <p className="text-lg text-muted-foreground">
              Save time and reduce errors with AI assistance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 opacity-0"
                style={{ animation: "fade-up 600ms ease-out forwards", animationDelay: `${index * 120 + 200}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="relative p-12 rounded-3xl bg-gradient-card border border-border shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <div className="relative text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to streamline your requirements?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start gathering requirements with AI assistance today
              </p>
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-glow text-white font-semibold px-8 py-6 text-lg"
                >
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
