import Bird from "./Bird";
import Clouds from "./Clouds";
import { ArrowBigDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% -200px, #EAF2FF 0%, #F6FAFF 45%, #FFFFFF 100%)",
      }}
    >
      {/* Sky birds */}
      <Bird className="top-40 left-24" rotate={-8} scale={0.95} />
      <Bird className="top-56 right-48" rotate={6} scale={0.9} />

      {/* Content */}
      <div className="pt-32 text-center relative z-20">
        <span className="inline-flex items-center gap-2 px-4 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-medium">
          💬 #1 iMessage Automation Tool
        </span>

        <h1 className="mt-4 text-center font-extrabold text-4xl md:text-5xl leading-tight">
          <span className="text-blue-600">iMessage</span> Automation <br />
          for Teams and AI <br /> Workflows.
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-gray-600">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border">
             Download the Mac app
          </button>
        </div>
      </div>

      {/* Cloud birds (behind clouds) */}
      <Bird
        className="bottom-48 left-36"
        rotate={-4}
        scale={0.9}
        z={5}
        showBubble
      />
      <Bird
        className="bottom-14 left-48"
        rotate={8}
        scale={0.95}
        z={5}
        showBubble
      />
      <Bird
        className="bottom-16 right-64"
        rotate={8}
        scale={0.95}
        z={5}
        showBubble
      />
      <Bird
        className="bottom-48 right-32"
        rotate={8}
        scale={0.95}
        z={5}
        showBubble
      />

       <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-sm text-gray-600 cursor-pointer">
        <span>Scroll to learn more</span>
        <ArrowBigDown size={16} strokeWidth={1.5} className="mt-3" />
      </div>

      {/* Clouds */}
      <Clouds />
    </section>
  );
}
