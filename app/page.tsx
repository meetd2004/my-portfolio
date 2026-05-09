import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import GlobalGlow from "@/components/GlobalGlow";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen relative">
      <GlobalGlow />
      <ScrollyCanvas />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
