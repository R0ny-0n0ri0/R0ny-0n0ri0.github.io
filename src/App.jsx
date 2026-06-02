import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Hero setPage={setPage} />}
      {page === "about" && <About />}
      {page === "resume" && <Resume />}
      {page === "portfolio" && <Portfolio />}
    </>
  );
}