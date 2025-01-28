import Image from "next/image"

export default function TeamMemberCard({image, MemberName, Role}: {image:string, MemberName:string, Role:string}) {
  return (
    <div className="w-[300px] flex justify-center items-center flex-col">
        <Image src={`/images/our_team/${image}`} alt="member" width={80} height={80}/>

        <div className=" flex justify-center items-center flex-col mt-5">
            <h1 className="font-roboto font-bold text-lg">{MemberName}</h1>
            <p className="font-roboto font-medium">{Role}</p>
            <div className="mt-5 flex justify-center items-center gap-2">
                <Image  src={"/images/linkedin-logo.png"} alt="linkedin" height={15} width={15}/>
                <Image  src={"/images/twitter.png"} alt="twitter" height={15} width={15}/>
                <Image  src={"/images/our_team/Dribble.png"} alt="website" height={15} width={15}/>
            </div>

        </div>

    </div>
  )
}
