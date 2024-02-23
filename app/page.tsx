import Image from "next/image";

import Nav from '@/components/navbar/navbar';
import HomePage from "./_components/home-page";
import About from "./_components/about-page";
import Media from "./_components/media-page";

export default function Home() {
  return (
    <main>
      <Nav />
      <HomePage />
      <About />
      <Media />
    </main>
  );
}
