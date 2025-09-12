import Image from "next/image";
import Header from "./components/Header";
import AllProjects from "./components/AllProjects";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
   <div>
    <Header name= "Mustapha Yahaya"/>
    <About />
    <Services />
    <AllProjects />
   </div>
  );
}
