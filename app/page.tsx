import CardFlip from "@/components/main/Cardflip";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#020202be]">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <CardFlip />
      </div>
    </main>
  );
}
