import Image from "next/image";
import Header from "./components/Header";
import AllProjects from "./components/AllProjects";

export default function Home() {
  return (
   <div>
    <Header name= "Mustapha Yahaya"/>
    <AllProjects />
   </div>
  );
}
