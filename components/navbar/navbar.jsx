import Image from "next/image";

import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs";


const Nav = () => {
    return (
        <div>
            <div className="flex px-32 py-10 justify-between items-center text-[#fff]">
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
                <div className="flex text-xl items-center">
                    <div className="w-[2rem] h-[.2rem] bg-[#e6d32d]"></div>
                    <LuInstagram className="ml-4" />
                    <FaTiktok className="ml-4" />
                    <RiFacebookFill className="ml-4" />
                </div>

                <div className="text-2xl">
                    <BsFilterLeft />
                </div>
            </div>
        </div>
    )
}

export default Nav
