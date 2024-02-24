import Image from "next/image";

import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { BsFilterLeft } from "react-icons/bs";

// import { Input } from "@material-tailwind/react";
import { Bodoni_Moda } from 'next/font/google';


const font = Bodoni_Moda({
    subsets: ['latin'],
    weight: '400',
})


const Footer = () => {
    return (
        <div className="px-32 py-20">
            <div className="flex border-b-[2px] pb-10 border-[#454545] justify-between items-center text-[#fff]">
                <div>
                    <Image
                        src="/logo.png"
                        alt="andrew's logo"
                        // className="dark:invert"
                        width={150}
                        height={50}
                        priority
                    />
                </div>

                <h1 className="font-extrabold text-2xl">ANDREW AGGREYY</h1>
            </div>

            <div>
                <div className="py-10">
                    <h1 className={`${font.className} text-2xl text-[#ffffff]`}>STAY UP TO DATE WITH PASSION</h1>
                    {/* <Input variant="standard" label="Standard" placeholder="Standard"/> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;