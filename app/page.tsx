import Header from "@/app/components/header/Header";
import Intro from "@/app/components/intro/Intro";

export default function Home() {
  return (
   <>
      <Header/>
      <main className="flex flex-col gap-8">
      <Intro/>
      </main>
   </>


  
  );
}
