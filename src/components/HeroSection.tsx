import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center flex-col md:flex-row overflow-hidden">
            <div className="flex flex-col justify-center items-center md:items-start md:w-[50%] px-4 md:px-8 py-12">
                <div className="flex flex-col justify-center items-center md:items-start gap-5">
                    <h1 className="font-roboto font-bold text-3xl md:text-4xl max-w-[72ch]">
                        Learn new skills online with ease
                    </h1>
                    <p className="font-roboto font-medium max-w-[72ch] md:max-w-[400px]">
                        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                    </p>
                </div>

                <div className="mt-6 px-4 flex justify-center items-center gap-2 md:gap-4">
                    <button className="w-[150px] font-roboto md:w-[178px] h-[48px] bg-black text-white rounded-md">
                        Start learning now
                    </button>
                    <button className="w-[150px] md:w-[178px] font-roboto h-[48px] border-[1px] border-black rounded-md">
                        Explore Courses
                    </button>
                </div>
            </div>

            <div className="md:w-[50%] h-96 md:h-[600px]">
                <Image
                    src="/images/Hero_image.png"
                    alt="hero image"
                    height={900}
                    width={400}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
