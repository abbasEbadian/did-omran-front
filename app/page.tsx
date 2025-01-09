import Header from "@/app/components/header/Header";
import Intro from "@/app/components/intro/Intro";
import OnlineExam from "./components/online-exam/OnlineExam";
import EducationSlider from "./components/education/EducationSlider";
import FreeEducationSlider from "./components/free-education/FreeEducationSlider";
import Comments from "./components/Comments/Comments";
import Footer from "./components/footer/Footer";
import ElectronicLibrary from "./components/electronic-library/ElectronicLibrary";


export default function Home() {
  return (
   <>
      <Header/>
      <main className="flex flex-col gap-8">
      <Intro/>
      <OnlineExam/>
      <EducationSlider/>
      <FreeEducationSlider/>
      <ElectronicLibrary/>
      <Comments/>
      </main>
      <Footer/>
   </>


  
  );
}
