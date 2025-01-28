import Image from "next/image";

export default function TestimonialCard({image, Name, role, display}: {image:string, Name: string, role:string, display:string}) {
    return (
        <div className={` w-[350px] h-[315px] border-[1px] border-black ${display} md:flex justify-center items-start px-8 flex-col gap-5`}>
            <div className=" flex justify-center items-center">
                <Image src={"/images/Vector.png"} alt="start" height={20} width={20} />
                <Image src={"/images/Vector.png"} alt="start" height={20} width={20} />
                <Image src={"/images/Vector.png"} alt="start" height={20} width={20} />
                <Image src={"/images/Vector.png"} alt="start" height={20} width={20} />
                <Image src={"/images/Vector.png"} alt="start" height={20} width={20} />
            </div>

            <p className="w-[298px] ">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>

            <div className="flex justify-center items-center gap-5">
                <Image src={`/images/our_team/${image}`} alt="image" height={50} width={50} className="rounded-full" />
                <div className="flex flex-col justify-center items-start ">
                    <h2 className="font-roboto font-bold ">{Name}</h2>
                    <p>{role }</p>
                </div>
            </div>
        </div>
    )
}
