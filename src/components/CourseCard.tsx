import Image from "next/image";

export default function CourseCard({ImageName, Category, CourseTitle}: {ImageName:string, Category:string, CourseTitle: string}) {
    return (
        <div className="bg-[#f7f7f7] w-[360px] h-[515px] flex flex-col justify-center items-center">
            <div className="mb-8">
                <Image src={`/images/courses/${ImageName}`} alt="course img" height={400} width={500}  />
            </div>

            {/* Category and rating */}
            <div className=" w-full flex justify-between items-center px-4">
                <p className="font-roboto font-medium">{Category}</p>

                <div className="flex justify-center items-center gap-2">
                    <Image src={"/images/courses/Star.png"} alt="start" height={15} width={15} />
                    <p className="font-roboto font-medium">5.0</p>
                </div>
            </div>


            <div className=" mt-5 flex flex-col justify-center items-start px-4">
                <h1 className="font-roboto font-bold text-xl mb-3">{CourseTitle}</h1>
                <p className="mb-3 font-roboto w-[340px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                <div className="mt-5 flex justify-center items-center gap-8">
                    <button className="w-[117px] h-[40px] border-[1px] border-black rounded-md">Enroll Now</button>
                    <p>$400</p>
                </div>
            </div>
        </div>
    )
}
