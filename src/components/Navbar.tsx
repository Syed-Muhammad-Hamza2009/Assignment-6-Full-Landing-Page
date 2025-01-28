"use client"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {

    const [openSideBar, setOpenSideBar] = useState("hidden")
    return (
        <>
            {/* num, mail and icons */}
            <div className="hidden bg-[#F7F7F7]  md:flex justify-between items-center py-5 px-20 border-b-[1px] border-black">
                <div className="phone-mail hidden  md:flex  justify-center items-center font-roboto ">
                    <p>Phone Number: 956 742 455 678</p>
                    <p className="w-[1px] h-8 bg-gray-500 mx-3"></p>
                    <p>Email:info@ddsgnr.com</p>
                </div>
                <div className="icons flex justify-center items-center gap-4">
                    <Image src={"/images/facebook-app-symbol.png"} alt="fb" height={20} width={20} />
                    <Image src={"/images/instagram.png"} alt="insta" height={20} width={20} />
                    <Image src={"/images/twitter.png"} alt="fb" height={20} width={20} />
                    <Image src={"/images/linkedin-logo.png"} alt="fb" height={20} width={20} />
                </div>
            </div>

            {/* Main navbar starts */}
            <div className="flex md:mt-6 bg-[#F7F7F7] justify-between md:justify-evenly items-center px-6 md:px-0 py-5 border-b-[1px] border-[#000] ">
                <Image src={"/images/Ddsgnr.png"} alt="logo" height={40} width={130} />
                <div className="hidden bg-white md:flex justify-center items-center gap-14 px-2">
                    <p className="border-b-[1px] border-black py-3">Home</p>
                    <p>Courses</p>
                    <p>Services</p>
                    <p>Achievement</p>
                    <p>About Us</p>
                    <p>Testimonial</p>

                    <div className="flex justify-center items-center gap-3">
                        <button className="w-20 h-10 border-[1px] font-roboto border-black rounded-md">Login</button>
                        <button className="w-20 h-10 bg-black font-roboto text-white rounded-md">Sign  Up</button>
                    </div>
                </div>
                <Image onClick={()=> setOpenSideBar("block")} src={"/images/menu.svg"} alt="hamburger" height={30} width={30} className=" block md:hidden" />
            </div>


            {/* responsive navbar */}
            <div className={`${openSideBar}  md:hidden bg-white/60 backdrop-blur-md absolute top-20 w-screen border-black border-[1px]`}>
                <div className={`flex flex-col  md:hidden justify-between items-center py-5 px-20`}>
                    
                    <div className="icons flex justify-center items-center gap-4">
                        <Image src={"/images/facebook-app-symbol.png"} alt="fb" height={20} width={20} />
                        <Image src={"/images/instagram.png"} alt="insta" height={20} width={20} />
                        <Image src={"/images/twitter.png"} alt="fb" height={20} width={20} />
                        <Image src={"/images/linkedin-logo.png"} alt="fb" height={20} width={20} />
                    </div>
                </div>
                <div className={`flex flex-col py-3  md:hidden justify-start items-center gap-14`}>
                    <p className="border-b-[1px] border-black py-3">Home</p>
                    <p>Courses</p>
                    <p>Services</p>
                    <p>Achievement</p>
                    <p>About Us</p>
                    <p>Testimonial</p>

                    <div className="flex justify-center items-center gap-3">
                        <button className="w-20 h-10 border-[1px] font-roboto border-black rounded-md">Login</button>
                        <button className="w-20 h-10 bg-black font-roboto text-white rounded-md">Sign  Up</button>
                    </div>
                </div>
                <Image onClick={()=> setOpenSideBar("hidden")} src={"/images/close.svg"} alt="close" height={30} width={30} className="absolute top-4 right-5 bg-gray-300 rounded-full"/>
            </div>
        </>
    )
}
