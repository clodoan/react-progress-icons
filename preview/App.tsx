import { useState, useEffect } from "react";
import Header from "./components/header";   
import DemoSection from "./components/demo-section";
import RingDemo from "./components/ring-demo";
import UsageExamples from "./components/usage-examples";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0.3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 1) {
            setIsAnimating(false);
            return 1;
          }
          return prev + 0.01;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const handleAnimate = () => {
    setProgress(0);
    setIsAnimating(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Header />

        <div className="grid gap-8">
          <DemoSection title="Ring Progress Indicator">
            <RingDemo
              progress={progress}
              onProgressChange={setProgress}
              isAnimating={isAnimating}
              onAnimate={handleAnimate}
            />
          </DemoSection>

          <DemoSection title="Usage Examples">
            <UsageExamples />
          </DemoSection>
        </div>
      </div>
    </div>
  );
}

export default App;