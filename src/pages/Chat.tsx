import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hello! I'm ReqBot, your AI Requirements Engineer. I'll help you gather complete software requirements for your project. Let's start with the basics - what's your project name?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const projectInfo = {
    name: "E-Commerce Platform",
    client: "TechCorp Inc.",
    status: "In Progress"
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", content: inputValue }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Great! Now, who are the primary stakeholders for this project?",
        "Can you describe the main features you need for this system?",
        "What are your non-functional requirements like performance, security, and scalability?",
        "Excellent! Let me gather a few more details about user roles and permissions."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages([...newMessages, { role: "bot", content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex pt-16">
        {/* Project Info Panel */}
        <aside className="hidden lg:block w-80 border-r border-border bg-card/50 p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Bot className="w-5 h-5 mr-2 text-primary" />
                Project Information
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-card border border-border">
                <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Project Name
                </label>
                <p className="text-sm font-semibold mt-1">{projectInfo.name}</p>
              </div>

              <div className="p-4 rounded-lg bg-gradient-card border border-border">
                <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Client Name
                </label>
                <p className="text-sm font-semibold mt-1">{projectInfo.client}</p>
              </div>

              <div className="p-4 rounded-lg bg-gradient-card border border-border">
                <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Status
                </label>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                  <p className="text-sm font-semibold">{projectInfo.status}</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => navigate("/summary")}
              className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-glow"
            >
              Generate Summary
            </Button>
          </div>
        </aside>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="border-b border-border bg-card/50 px-6 py-4">
            <h1 className="text-xl font-semibold flex items-center">
              <Bot className="w-6 h-6 mr-2 text-primary" />
              ReqBot — Requirement Gathering Assistant
            </h1>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start space-x-3 max-w-3xl ${
                    message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      message.role === "bot"
                        ? "bg-gradient-primary shadow-glow"
                        : "bg-muted"
                    }`}
                  >
                    {message.role === "bot" ? (
                      <Bot className="w-5 h-5 text-white" />
                    ) : (
                      <User className="w-5 h-5 text-foreground" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`px-6 py-4 rounded-2xl shadow-sm ${
                      message.role === "bot"
                        ? "bg-card border border-border"
                        : "bg-gradient-primary text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="px-6 py-4 rounded-2xl bg-card border border-border">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-border bg-card/50 px-6 py-4">
            <div className="max-w-4xl mx-auto flex items-center space-x-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your response..."
                className="flex-1 bg-background border-border focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={handleSend}
                className="bg-gradient-primary hover:opacity-90 text-white shadow-glow"
                size="icon"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chat;
