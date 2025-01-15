import HeroSection from "@/components/Home/HeroSection";
import PopularCourse from "@/components/Home/PopularCourse";

import MostPopularBundle from "@/components/Home/MostPopularBundle";
import AllCategory from "@/components/Home/AllCategory";
import BlogTab from "@/components/Home/BlogTab";
import NewAddedCourse from "@/components/Home/NewAddedCourse";
import CompletedAnHour from "@/components/Home/CompletedAnHour";
import QuizBanner from "@/components/Home/QuizBanner";
import CustomerFeedback from "@/components/Home/CustomerFeedback";
import BecomeATeacher from "@/components/Home/BecomeATeacher";
import Partner from "@/components/Home/Partner";



export default function Home() {


    return (
   <div className="">
     <HeroSection />
        <MostPopularBundle />
        <PopularCourse />
        <AllCategory/>
       <BlogTab />
       <NewAddedCourse />
       <CompletedAnHour />
       <QuizBanner />
       <CustomerFeedback />
       <BecomeATeacher />
       <Partner />
   </div>

  );
}
