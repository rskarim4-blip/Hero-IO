import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6";
import GooglePlay from "../../../assets/GooglePlay.png"
import AppStore from "../../../assets/AppStore.png"
import Hero from "../../../assets/hero.png"



const Banner = () => {
    return (
        <div className=" md:px-20 pt-20 px-5">
            <div className=" text-center max-w-4xl mx-auto">
                <h1 className="font-black md:text-7xl text-5xl ">We Build<br /> <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
                <p className="text-gray-600 pt-4 pb-5">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="space-x-5">
                    <button className="btn ">
                        <img className="w-7" src={GooglePlay} alt="" />
                        <span>Google Play</span></button>
                    <button className="btn ">
                        <img className="w-7" src={AppStore} alt="" />

                        App Store</button>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <img className="lg:w-1/2 md:w-2/3 w-3/4 object-cover" src={Hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;