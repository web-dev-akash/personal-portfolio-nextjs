"use client";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
