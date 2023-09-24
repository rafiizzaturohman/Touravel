import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="space-y-8 md:space-y-14">
      <NavBar />
      <Hero />
      <Services />
    </main>
  );
}
