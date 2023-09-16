import Hero from "@/pages/Hero";
import Latest from "@/pages/Latest";
import TopFan from "@/pages/TopFan";
import TopInternet from "@/pages/TopInternet";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopFan />
      <TopInternet />
      <Latest />
    </div>
  );
}
