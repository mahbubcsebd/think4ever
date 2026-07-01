"use client";

export default function GeminiV2Background({ children }) {
  return (
    <>
      <style>
        {`
          @keyframes aurora-1 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(15vw, 10vh) rotate(120deg) scale(1.2); }
            66% { transform: translate(-10vw, 15vh) rotate(240deg) scale(0.8); }
            100% { transform: translate(0%, 0%) rotate(360deg) scale(1); }
          }
          @keyframes aurora-2 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(-15vw, -15vh) rotate(-120deg) scale(1.1); }
            66% { transform: translate(15vw, -10vh) rotate(-240deg) scale(0.9); }
            100% { transform: translate(0%, 0%) rotate(-360deg) scale(1); }
          }
          @keyframes aurora-3 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(15vw, -15vh) rotate(120deg) scale(1.15); }
            66% { transform: translate(-15vw, 15vh) rotate(240deg) scale(0.85); }
            100% { transform: translate(0%, 0%) rotate(360deg) scale(1); }
          }
          @keyframes aurora-4 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(-15vw, 15vh) rotate(-60deg) scale(1.2); }
            66% { transform: translate(15vw, -15vh) rotate(60deg) scale(0.9); }
            100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          }
          @keyframes aurora-hue {
            0% { filter: blur(120px) hue-rotate(0deg); }
            33% { filter: blur(120px) hue-rotate(15deg); }
            66% { filter: blur(120px) hue-rotate(-10deg); }
            100% { filter: blur(120px) hue-rotate(0deg); }
          }
        `}
      </style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#ffffff]">
        
        {/* Core Aurora Container with immense blur for organic blending and hue rotation for morphing colors */}
        <div 
          className="absolute inset-0 opacity-90" 
          style={{ 
            animation: "aurora-hue 20s ease-in-out infinite",
            transform: "translateZ(0)" // hardware acceleration
          }}
        >
          
          {/* Gemini Cyan Core */}
          <div
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-[100%]"
            style={{
              background: "radial-gradient(circle at center, rgba(36, 193, 224, 0.55) 0%, transparent 70%)",
              animation: "aurora-1 15s ease-in-out infinite",
              transformOrigin: "center center",
            }}
          />
          
          {/* Google Royal Blue Sweep */}
          <div
            className="absolute top-[10%] right-[-10%] w-[55vw] h-[55vh] rounded-[100%]"
            style={{
              background: "radial-gradient(circle at center, rgba(66, 133, 244, 0.5) 0%, transparent 70%)",
              animation: "aurora-2 18s ease-in-out infinite",
              transformOrigin: "40% 60%",
            }}
          />

          {/* Gemini Deep Blue Highlight */}
          <div
            className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vh] rounded-[100%]"
            style={{
              background: "radial-gradient(circle at center, rgba(26, 115, 232, 0.45) 0%, transparent 70%)",
              animation: "aurora-3 14s ease-in-out infinite",
              transformOrigin: "60% 40%",
            }}
          />

          {/* Soft Peach / Light Accent (Replacing Purple) */}
          <div
            className="absolute bottom-[10%] right-[10%] w-[65vw] h-[65vh] rounded-[100%]"
            style={{
              background: "radial-gradient(circle at center, rgba(234, 67, 53, 0.3) 0%, transparent 70%)",
              animation: "aurora-4 16s ease-in-out infinite",
              transformOrigin: "center center",
            }}
          />
          
          {/* Center White Glow to ensure text readability and pop */}
          <div
            className="absolute top-[20%] left-[20%] w-[60vw] h-[60vh] rounded-[100%]"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 60%)",
              animation: "aurora-1 20s ease-in-out infinite reverse",
            }}
          />
        </div>
      </div>
    </>
  );
}
