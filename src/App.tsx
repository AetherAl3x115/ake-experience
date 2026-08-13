import { Nav } from "./components/ui/Nav";
import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { Vision } from "./components/sections/Vision";
import { WhyNow } from "./components/sections/WhyNow";
import { Ecosystem } from "./components/sections/Ecosystem";
import { Engine } from "./components/sections/Engine";
import { LearningStudio } from "./components/sections/LearningStudio";
import { LearningBridge } from "./components/sections/LearningBridge";
import { Benefits } from "./components/sections/Benefits";
import { Roadmap } from "./components/sections/Roadmap";
import { ExecutionPhases } from "./components/sections/ExecutionPhases";
import { Requirements } from "./components/sections/Requirements";
import { Institutions } from "./components/sections/Institutions";
import { FutureVision } from "./components/sections/FutureVision";
import { Closing } from "./components/sections/Closing";

function App() {
  return (
    <div className="relative bg-bg text-ink">
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Vision />
        <WhyNow />
        <Ecosystem />
        <Engine />
        <LearningStudio />
        <LearningBridge />
        <Benefits />
        <Roadmap />
        <ExecutionPhases />
        <Requirements />
        <Institutions />
        <FutureVision />
      </main>
      <Closing />
    </div>
  );
}

export default App;
