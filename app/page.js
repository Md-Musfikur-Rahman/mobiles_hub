import Hero from "@/pages/Hero";
import Latest from "@/pages/Latest";
import SearchOption from "@/pages/SearchOption";
import TopFan from "@/pages/TopFan";
import TopInternet from "@/pages/TopInternet";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopFan />
      <TopInternet />
      <Latest />
      <SearchOption />
    </div>
  );
}
