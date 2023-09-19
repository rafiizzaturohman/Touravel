import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="space-y-8 md:space-y-14">
      <NavBar />
      <Hero />
    </main>
  );
}
