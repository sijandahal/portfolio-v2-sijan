"use client"
import { useState, useEffect } from "react";

import Image from "next/image";
import Loading from "./components/Loader/Loading";
import Hero from "./components/HeroSection/Hero";
import Header from "./components/Header/Header";
import Portfolio from "./components/UI/Portfolio/Portfolio";
import Slider from "./components/UI/Slider/Slider"
import ShareButtons from "./components/UI/SocialIconsSticky/SocialIcons";
import Project from "./components/UI/FeaturedProject/FeaturedProject";
import Footer from "./components/UI/Footer/Footer";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time (in milliseconds) as needed

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Hero />
      <section className="portfolio_section">
        <Project />
        <Portfolio />
      </section>
      <Slider />
      <ShareButtons />
      <Footer />
    </>
  );
}
