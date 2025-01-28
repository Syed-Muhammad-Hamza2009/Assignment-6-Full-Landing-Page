import AchievementDiv from "@/components/achievementDiv";
import CategoryCard from "@/components/categoryCard";
import CourseCard from "@/components/CourseCard";
import HeroSection from "@/components/HeroSection";
import TeamMemberCard from "@/components/TeamMemberCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
export default function Home() {
  return (
    <div className="max-w-screen-xl overflow-x-hidden">
      <HeroSection />
      {/* Trusted by sec */}
      <div className="w-full p-5 md:px-2  md:h-44 flex flex-col md:flex-row justify-between items-center bg-[#F7F7F7] ">
        <h1 className="font-roboto font-bold my-6 md:my-0 md:text-2xl w-80">Trusted by 2000+ companies worldwide.</h1>

        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-5 md:gap-2 ">
          {/* brand logos */}
          <Image src={"/images/logo1.png"} alt="logo1" height={150} width={150}></Image>
          <Image src={"/images/logo2.png"} alt="logo2" height={150} width={150}></Image>
          <Image src={"/images/logo3.png"} alt="logo3" height={150} width={150}></Image>
          <Image src={"/images/logo4.png"} alt="logo4" height={150} width={150}></Image>
          <Image src={"/images/logo5.png"} alt="logo5" height={150} width={150}></Image>
          <Image src={"/images/logo6.png"} alt="logo6" height={150} width={150}></Image>
        </div>
        <div>

        </div>
      </div>

      <div className="w-screen flex justify-center items-center flex-col mt-20">
        <h1 className="w-[320px] md:w-[768px] font-bold font-roboto mb-10 md:mb-5 text-4xl">Explore Courses By Category</h1>
        <p className="w-[320px] md:w-[768px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>

      {/* categories */}
      <div className="w-screen flex justify-center items-center flex-wrap gap-6 my-20">
        <CategoryCard imageName="pen-tool-2.png" CategoryName="Design & Development" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="volume-high.png" CategoryName="Marketing" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="group.png" CategoryName="Development" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="microphone.png" CategoryName="Communication" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="link.png" CategoryName="Digital Marketing" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="arrow-2.png" CategoryName="Self Development" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="briefcase.png" CategoryName="Business" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="book.png" CategoryName="Finance" CoursesInCategory="50+ courses Available" />

        <CategoryCard imageName="book2.png" CategoryName="Consulting" CoursesInCategory="50+ courses Available" />

      </div>
      <div className="w-screen flex justify-center items-center ">

        <button className="w-36 h-12 rounded-md border-[1px] border-black">View All Courses</button>
      </div>

      {/* Achievements */}
      <div className="w-screen flex justify-center items-center flex-col mt-32 mb-24">
        <h1 className="font-roboto font-bold text-4xl mb-5">Our Achivements</h1>
        <p className="w-[362px] text-center  md:w-[1000px] mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

        <div className="flex justify-evenly items-center w-full flex-wrap ">
          <AchievementDiv Achievement="+200" achievementName="Courses" />
          <AchievementDiv Achievement="50K" achievementName="Mentors" />
          <AchievementDiv Achievement="370K" achievementName="Students" />
          <AchievementDiv Achievement="100+" achievementName="Recognition" />
        </div>

      </div>

      {/* Courses */}
      <div className="w-screen flex justify-center items-center flex-col mb-24">
        <h1 className="font-roboto font-bold text-4xl mb-3">Courses</h1>
        <p className="font-roboto font-medium">Your Ultimate Guide to learning</p>

        {/* course Categories */}
        <div className="flex justify-center items-center font-roboto font-medium gap-5 mt-14 mb-9">
          <p className="border-b-[1px] border-black">Popular</p>
          <p>Recommended</p>
          <p>Best Price</p>
        </div>

        <div className="w-screen flex  flex-wrap justify-center items-center gap-10">
          <CourseCard ImageName="Image.png" Category="Design" CourseTitle="UX/UI Design 201" />

          <CourseCard ImageName="Image2.png" Category="Programming" CourseTitle="Introduction to Python" />

          <CourseCard ImageName="Image3.png" Category="Business" CourseTitle="Data Analysis for Beginners" />

          <CourseCard ImageName="Image4.png" Category="Art" CourseTitle="Art Specialization" />

          <CourseCard ImageName="Image5.png" Category="Law" CourseTitle="Rule of Law" />

          <CourseCard ImageName="Image6.png" Category="Tech" CourseTitle="Introduction to webflow" />

        </div>
        <button className="w-[152px] h-[40px] border-[1px] mt-20 border-black rounded-md">View All Courses</button>
      </div>


      {/* Our Team */}
      <div className="bg-[#f7f7f7]  flex justify-center items-center flex-col">
        <h1 className="mt-14 font-robot font-bold text-4xl mb-4">Our team</h1>
        <p className="font-roboto font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="w-screen flex justify-evenly items-center flex-wrap gap-32 mt-20">
          <TeamMemberCard image="Image.png" MemberName="James Nduku" Role="Marketing Coordinator" />

          <TeamMemberCard image="Image2.png" MemberName="Joseph Munyambu" Role="Nursing Assistant" />

          <TeamMemberCard image="Image3.png" MemberName="Joseph Ngumbau" Role="Medical Assistant" />

          <TeamMemberCard image="Image4.png" MemberName="Erick Kipkemboi" Role="Web Designer" />

          <TeamMemberCard image="Image5.png" MemberName="Stephen Kerubo" Role="President of Sales" />

          <TeamMemberCard image="Image6.png" MemberName="John Leboo" Role="Dog Trainer" />


        </div>

      </div>

      {/* Customer Testimonials */}
      <div className="bg-[#f7f7f7] w-full flex justify-center items-center flex-col mt-20">

        <div className="my-14 w-full flex justify-center ml-[25%] md:ml-0 md:items-center flex-col">
          <h1 className="hidden md:block md:w-[560px] font-roboto font-bold text-4xl ">Customer testimonials</h1>
          <h1 className="md:hidden text-2xl font-roboto font-bold w-[315px] ">What Our Student Say</h1>
          <p className="w-[315px] md:w-[560px] font-roboto font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* testimonial cards */}
        <div className="cards flex flex-wrap justify-center items-center gap-5">
          <TestimonialCard image="Image.png" Name="Erick Kipkemboi" role="Scrum Master" display="flex" />

          <TestimonialCard image="Image2.png" Name="James Nduku" role="Software Developer" display="hidden" />
          <TestimonialCard image="Image3.png" Name="Stephen Kerubo" role="UI/UX Designer" display="hidden" />
        </div>
        
        <div className="w-screen flex justify-between items-center px-[5%] mt-5 mb-5">
          <Image src={"/images/SliderDots.png"} alt="image" height={50} width={50}/>
          <Image src={"/images/SliderButtons.png"} alt="image" height={80} width={80}/>
        </div>

      </div>


    </div>
  );
}