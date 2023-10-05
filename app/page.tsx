import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Offer from "./components/Offer";
import OurPerformance from "./components/Performance";
import Comment from "./components/Comment";

export default function Home() {
  return (
    <main className="space-y-8 md:space-y-14">
      <NavBar />
      <Hero />
      <Services />
      <Destinations />
      <Offer />
      <OurPerformance />
      <Comment />
    </main>
  );
}
