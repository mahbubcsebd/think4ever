"use client";

export default function GeminiV2Background({ children }) {
  return (
    <>
      <style>
        {`
          @keyframes aurora-1 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(25vw, 15vh) rotate(120deg) scale(1.2); }
            66% { transform: translate(-15vw, 20vh) rotate(240deg) scale(0.8); }
            100% { transform: translate(0%, 0%) rotate(360deg) scale(1); }
          }
          @keyframes aurora-2 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(-20vw, -25vh) rotate(-120deg) scale(1.1); }
            66% { transform: translate(20vw, -15vh) rotate(-240deg) scale(0.9); }
            100% { transform: translate(0%, 0%) rotate(-360deg) scale(1); }
          }
          @keyframes aurora-3 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(25vw, -20vh) rotate(120deg) scale(1.15); }
            66% { transform: translate(-20vw, 25vh) rotate(240deg) scale(0.85); }
            100% { transform: translate(0%, 0%) rotate(360deg) scale(1); }
          }
          @keyframes aurora-4 {
            0% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
            33% { transform: translate(-25vw, 20vh) rotate(-60deg) scale(1.2); }
            66% { transform: translate(20vw, -25vh) rotate(60deg) scale(0.9); }
            100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          }
          @keyframes aurora-hue {
            0% { filter: blur(90px) hue-rotate(0deg); }
            33% { filter: blur(90px) hue-rotate(30deg); }
            66% { filter: blur(90px) hue-rotate(-20deg); }
            100% { filter: blur(90px) hue-rotate(0deg); }
          }
        `}
      </style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#eff5fc]">
        
        {/* Core Aurora Container with immense blur for organic blending and hue rotation for morphing colors */}
        <div 
          className="absolute inset-0" 
          style={{ 
            animation: "aurora-hue 20s ease-in-out infinite",
            transform: "translateZ(0)" // hardware acceleration
          }}
        >
          
          {/* Main Cyan/Light Blue Core */}
          <div
            className="absolute top-[-20%] left-[-20%] w-[120vw] h-[120vh] rounded-[100%]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(7, 167, 225, 0.22) 0%, transparent 80%)",
              animation: "aurora-1 15s ease-in-out infinite",
              transformOrigin: "center center",
            }}
          />
          
          {/* Deep Brand Blue Sweep */}
          <div
            className="absolute top-[-10%] right-[-20%] w-[120vw] h-[120vh] rounded-[100%]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(9, 60, 173, 0.15) 0%, transparent 80%)",
              animation: "aurora-2 18s ease-in-out infinite",
              transformOrigin: "40% 60%",
            }}
          />

          {/* Bright Electric Blue Highlight (to give it that AI "Gemini" magic feel) */}
          <div
            className="absolute bottom-[-20%] left-[-10%] w-[120vw] h-[120vh] rounded-[100%]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(66, 133, 244, 0.18) 0%, transparent 80%)",
              animation: "aurora-3 14s ease-in-out infinite",
              transformOrigin: "60% 40%",
            }}
          />

          {/* Light Purple Magic Mix (to make it pop in Hero) */}
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[100vw] h-[100vh] rounded-[100%]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, transparent 80%)",
              animation: "aurora-4 16s ease-in-out infinite",
              transformOrigin: "center center",
            }}
          />
          
          {/* Subtle White Glow in the center for depth (reduced so it doesn't wash out the blue) */}
          <div
            className="absolute top-[20%] left-[20%] w-[60vw] h-[60vh] rounded-[100%]"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 80%)",
              animation: "aurora-1 20s ease-in-out infinite reverse",
            }}
          />
        </div>
      </div>
    </>
  );
}
