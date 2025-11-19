import { FileText, Download, ArrowLeft, Users, AlertCircle, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();

  const summaryData = {
    functionalRequirements: [
      "User registration and authentication system",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment gateway integration",
      "Order tracking and management"
    ],
    nonFunctionalRequirements: [
      "System should handle 10,000 concurrent users",
      "99.9% uptime availability",
      "Response time under 2 seconds",
      "GDPR and PCI-DSS compliance",
      "Mobile-responsive design"
    ],
    stakeholders: [
      { name: "John Smith", role: "Product Owner" },
      { name: "Sarah Johnson", role: "Tech Lead" },
      { name: "Mike Chen", role: "UX Designer" },
      { name: "Emily Brown", role: "QA Manager" }
    ],
    userStories: [
      "As a customer, I want to browse products by category so that I can find items easily",
      "As a customer, I want to save items to my wishlist for future purchase",
      "As an admin, I want to manage product inventory in real-time"
    ],
    risks: [
      "Third-party payment gateway downtime",
      "Data migration from legacy system",
      "Peak season traffic scaling"
    ],
    constraints: [
      "Budget limit: $150,000",
      "Timeline: 6 months",
      "Must integrate with existing ERP system"
    ],
    timeline: "6 months (Q1 2024 - Q2 2024)",
    costEstimate: "$120,000 - $150,000"
  };

  const SummaryCard = ({ title, icon: Icon, children }) => (
    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Requirements Summary</h1>
              <p className="text-muted-foreground">
                Complete overview of gathered requirements
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => navigate("/chat")}
                variant="outline"
                className="border-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Chat
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                <Download className="w-4 h-4 mr-2" />
                Generate PDF Report
              </Button>
            </div>
          </div>

          {/* Summary Grid */}
          <div className="space-y-6">
            {/* Functional Requirements */}
            <SummaryCard title="Functional Requirements" icon={FileText}>
              <ul className="space-y-3">
                {summaryData.functionalRequirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </SummaryCard>

            {/* Non-Functional Requirements */}
            <SummaryCard title="Non-Functional Requirements" icon={AlertCircle}>
              <ul className="space-y-3">
                {summaryData.nonFunctionalRequirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-xs font-semibold text-secondary">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </SummaryCard>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Stakeholders */}
              <SummaryCard title="Stakeholders" icon={Users}>
                <div className="space-y-3">
                  {summaryData.stakeholders.map((stakeholder, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">{stakeholder.name}</span>
                      <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-background">
                        {stakeholder.role}
                      </span>
                    </div>
                  ))}
                </div>
              </SummaryCard>

              {/* Risks */}
              <SummaryCard title="Risks & Challenges" icon={AlertCircle}>
                <ul className="space-y-3">
                  {summaryData.risks.map((risk, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-destructive mt-1.5" />
                      <span className="text-sm text-foreground">{risk}</span>
                    </li>
                  ))}
                </ul>
              </SummaryCard>
            </div>

            {/* User Stories */}
            <SummaryCard title="User Stories" icon={Users}>
              <div className="space-y-3">
                {summaryData.userStories.map((story, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-card border border-border">
                    <p className="text-sm text-foreground italic">{story}</p>
                  </div>
                ))}
              </div>
            </SummaryCard>

            {/* Bottom Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Timeline */}
              <SummaryCard title="Timeline" icon={Clock}>
                <p className="text-2xl font-bold text-primary">{summaryData.timeline}</p>
              </SummaryCard>

              {/* Cost Estimate */}
              <SummaryCard title="Cost Estimate" icon={DollarSign}>
                <p className="text-2xl font-bold text-secondary">{summaryData.costEstimate}</p>
              </SummaryCard>

              {/* Constraints */}
              <SummaryCard title="Constraints" icon={AlertCircle}>
                <ul className="space-y-2">
                  {summaryData.constraints.map((constraint, index) => (
                    <li key={index} className="text-sm text-foreground">
                      • {constraint}
                    </li>
                  ))}
                </ul>
              </SummaryCard>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Summary;
