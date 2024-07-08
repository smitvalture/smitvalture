import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <FloatingNav navItems={[
          {
            name: "About",
            link: "#about",
            icon: <BsPersonBoundingBox />
          },
          {
            name: "Projects",
            link: "#projects",
            icon: <GrProjects />
          },
          {
            name: "Contact",
            link: "#contact",
            icon: <FaPhone />
          }
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
