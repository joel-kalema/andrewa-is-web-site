import Image from "next/image";

import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";


const Footer = () => {
    return (
        <div className="px-32 py-20">
            <div className="flex border-b-[2px] pb-14 border-[#454545] justify-between items-center text-[#fff]">
                <div>
                    <Image
                        src="/logo.png"
                        alt="andrew's logo"
                        // className="dark:invert"
                        width={200}
                        height={50}
                        priority
                    />
                </div>
            
                <h1 className="font-extrabold text-4xl mb-8">ANDREW AGGREYY</h1>
                
            </div>
        </div>
    )
}

export default Footer;