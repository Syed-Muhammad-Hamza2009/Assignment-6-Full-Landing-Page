import Image from "next/image"
export default function Footer() {
    return (
        <div className="w-full mt-20 px-5 md:px-10">

            {/* Newsleter */}
            <div className="pl-3 md:px-0 max-w-full flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center md:justify-between items-center overflow-x-hidden">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="font-roboto font-bold md:w-[500px]">Subscribe to our newsletter</h2>
                    <p className="font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="flex flex-col justify-center items-center mt-5 md:mt-16 gap-5 ">
                    <div className="flex flex-wrap md:flex-nowrap md:justify-center items-center gap-5">
                        <input type="text" placeholder="Enter your email" className="pl-5 outline-none w-[265px] h-[48px] border-[1px] border-black rounded-md" />
                        <button className="w-[265px] md:w-[119px] h-[48px] border-[1px] border-black rounded-md">Subscribe</button>
                    </div>
                    <p className="font-roboto w-[350px]">By subscribing you agree to with our <u>Privacy Policy</u></p>
                </div>
            </div>

            {/* links */}
            <div className="relative w-full mt-20 flex flex-col  md:flex-row  justify-center md:justify-evenly items-center  gap-10 md:gap-0">
                <Image src={"/images/Ddsgnr.png"} alt="logo" height={100} width={100} className="md:absolute top-0 left-0"/>
                <div className="flex flex-col gap-5">
                    <p className="font-roboto font-bold font-lg">Courses</p>
                    <p>Business</p>
                    <p>Development</p>
                    <p>Technology</p>
                    <p>Design</p>
                    <p>Programming</p>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="font-roboto font-bold font-lg">Resources</p>
                    <p>Career</p>
                    <p>Resume</p>
                    <p>Learning</p>
                    <p>Interview Preparation</p>
                    <p>Jobs</p>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="font-roboto font-bold font-lg">About Us</p>
                    <p>Contact</p>
                    <p>Help/Support</p>
                    <p>FAQ</p>
                    <p>Terms and Conditions</p>
                    <p>Partners</p>
                </div>
            </div>
            <hr className="bg-black my-10" />

            <div className="flex flex-col md:flex-row justify-between items-center mb-32">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <p>2023 Ddsgnr. All right reserved.</p>
                    <p><u>Privacy Policy</u></p>
                    <p><u>Terms of Service</u></p>
                    <p><u>Cookies Settings</u></p>
                </div>

                
                <div className="icons flex justify-center items-center gap-4 mt-8 md:mt-0`">
                    <Image src={"/images/facebook-app-symbol.png"} alt="fb" height={20} width={20} />
                    <Image src={"/images/instagram.png"} alt="insta" height={20} width={20} />
                    <Image src={"/images/twitter.png"} alt="fb" height={20} width={20} />
                    <Image src={"/images/linkedin-logo.png"} alt="fb" height={20} width={20} />
                </div>
                
            </div>

        </div>
    )
}
