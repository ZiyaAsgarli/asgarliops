import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Booking />
    </main>
  );
}
