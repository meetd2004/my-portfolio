import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen">
      <ScrollyCanvas />
      <Education />
      <Projects />
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Meet Jignesh Desai.
      </footer>
    </main>
  );
}
