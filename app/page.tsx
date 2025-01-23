import Header from "@/app/components/header/Header";
import Intro from "@/app/components/landing/intro/Intro";
import OnlineExam from "@/app/components/landing/online-exam/OnlineExam";
import Comments from "@/app/components/Comments/Comments";
import Footer from "@/app/components/footer/Footer";
import ElectronicLibrary from "@/app/components/landing/electronic-library/ElectronicLibrary";
import EducationTabs from "@/app/components/landing/education/EducationTabs";
import CaptionMain from "@/app/components/landing/Caption/CaptionMain";
import FreeEducationTabs from "@/app/components/landing/free-education/FreeEducationTabs";


export default function Home() {
  return (
   <>
      <Header/>
      <main className="flex flex-col gap-8">
      <Intro/>
      <CaptionMain/>
      <EducationTabs/>
      <OnlineExam/> 
      <CaptionMain/>
      <FreeEducationTabs/>
      <ElectronicLibrary/>
      <Comments/>
      </main>
      <Footer/>
   </>


  
  );
}
