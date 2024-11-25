import logo2 from "../assets/images/logo2.png"
import appStore from "../assets/images/22f7b1d4241b66578bf0988b06d33be5.png"
import googleStore from "../assets/images/google.svg"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { PiSnapchatLogo } from "react-icons/pi";


const Footer = () => {
    return(
        <footer className="grid grid-cols-">
            <div className="grid grid-cols-1 bg-backgroundGray gap-8 p-10">
                <div className="flex flex-col gap-4">
                        <img  src={logo2} alt="logo" className="object-contain h-10"/>
                        <div className="flex gap-1 justify-center items-center w-full">
                        <img  src={appStore} alt="logo" className="object-contain h-8"/>
                        <img  src={googleStore} alt="logo" className="object-contain h-8"/>
                        </div>
                        <p className="text-center text-sm">Company # 490039-445, Registered withHouse of companies.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-lg font-bold text-center">Get Exclusive Deals in your Inbox</span>
                    <div className="flex flex-col gap-4">
                        <div className="relative flex  justify-center items-center w-full">
                            <input 
                                type="email"
                                placeholder="youremail@gmail.com"
                                className="bg-[#D9D9D9] rounded-3xl py-2 px-4 text-sm w-full"
                            />
                            <button 
                                className="text-white text-sm absolute bg-backgroundOrange py-2 px-4 rounded-2xl right-0"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-center text-sm">we wont spam, read our email policy</p>
                        <div className="flex justify-center gap-2">
                            <FaFacebook className="text-xl hover:cursor-pointer"/>
                            <AiFillInstagram  className="text-xl hover:cursor-pointer"/>
                            <AiFillTikTok  className="text-xl hover:cursor-pointer"/>
                            <PiSnapchatLogo  className="text-xl hover:cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-lg flex">Legal Pages</span>
                    <p className="text-sm underline">Terms and conditions</p>
                    <p className="text-sm underline">privacy</p>
                    <p className="text-sm underline">Cookie</p>
                    <p className="text-sm underline">Modern Slavery Statement</p>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-lg flex">Important Links</span>
                    <p className="text-sm underline">Get help</p>
                    <p className="text-sm underline">Add your restaurant</p>
                    <p className="text-sm underline">Sign up to deliver</p>
                    <p className="text-sm underline">Create a business account</p>
                </div>
            </div>
            <div className="bg-[#03081F] flex items-center justify-center p-3">
                <p className="text-sm text-white">Order.uk Copyright 2024, All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer