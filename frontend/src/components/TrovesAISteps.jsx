import React from "react";
import { ArrowRight, ArrowDownLeft } from "lucide-react";
import FeatureCard from "./FeatureCard";

const TrovesAISteps = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container max-w-6xl p-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left column */}
          <div className="lg:col-span-1">
            <FeatureCard
              title="Reduce Your Ramp Time"
              description="Let your sales rep hit the floor 2x faster with hyper-realistic roleplay."
              color="purple"
              icon={<ChatIcon />}
              testimonial={{
                avatar: "/avatar-1.png",
                name: "Neel Gupta",
                text: "I'd love to tell you about how Trovex AI can 10x your sales teams.",
              }}
            />

            <div className="mt-8">
              <h3 className="text-gray-800 text-lg font-medium mb-2">
                Hire or Train the best sales rep with our scalable assessment.
              </h3>
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/avatar-2.png"
                  alt="Team member"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/avatar-3.png"
                  alt="Team member"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/avatar-4.png"
                  alt="Team member"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/avatar-5.png"
                  alt="Team member"
                />
              </div>
            </div>
          </div>

          {/* Flow arrows (middle column) */}
          <div className="hidden lg:block lg:col-span-1 relative">
            {/* We'll implement the arrows later */}
          </div>

          {/* Right column */}
          <div className="lg:col-span-1">
            <FeatureCard
              title="Evaluate Real Calls"
              description="Get AI-driven scores instantly and provide personalised feedback."
              color="purple"
              icon={<GradeIcon />}
              metrics={[
                { label: "85% Talking Points Hit", color: "green" },
                { label: "Objective Handling", color: "blue" },
                { label: "Open-Ended Questions", color: "red" },
              ]}
              integrations={[
                { name: "Google", icon: "/google-icon.png" },
                { name: "Zoom", icon: "/zoom-icon.png" },
                { name: "Teams", icon: "/teams-icon.png" },
              ]}
            />
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <FeatureCard
            title="Encourage Mastery"
            description="Assign role-plays anytime for your reps to practice on their terms."
            color="purple"
            icon={<ChatIcon />}
            chat={{
              avatar: "/avatar-tony.png",
              name: "Tony Marshal",
              title: "Vice President @ WillowX",
              messages: [{ text: "What's up next steps?", score: "9.2/10" }],
            }}
          />

          <FeatureCard
            title="Plug Skill Gaps"
            description="Spot knowledge gaps and get personalized training recommendations."
            color="purple"
            icon={<ChartIcon />}
            chart={{
              type: "radar",
              categories: [
                "Discovery",
                "Objection",
                "Closing",
                "Objection",
                "Discovery",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Placeholder components for icons
const ChatIcon = () => (
  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
);
const GradeIcon = () => (
  <div className="text-3xl font-bold text-purple-500">
    A<sup>+</sup>
  </div>
);
const ChartIcon = () => (
  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
);

export default TrovesAISteps;
