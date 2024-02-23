import Image from 'next/image';

import { Bodoni_Moda } from 'next/font/google';

import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";

const font = Bodoni_Moda({
    subsets: ['latin'],
    weight: '400',
})

const About = () => {
    return (
        <div className="text-[#fff]">
            <div className='about-content py-60'>

                <div className='flex flex-col items-center'>
                    <h1 className={`${font.className} text-6xl text-[#bbbaba] mb-4`}>About</h1>
                    <div className="w-[5rem] h-[.2rem] bg-[#e6d32d] mb-20"></div>
                </div>

                <div className='w-5/6 mx-auto flex'>
                    <div className="w-2/4 pl-24 text-[#fff] py-20">
                        <h1 className="font-extrabold text-4xl mb-8">ANDREW AGGREYY</h1>
                        <h2 className="font-extrabold text-[#bbbaba] text-2xl mb-16">+I Help Christians GROW Their Instagram & Coaching Business</h2>
                        <p className='mb-16'>I know some people probably won’t like this post but I refuse to remain silent about the truth of God’s word . Jesus did not come to bring another religion He came to bring the kingdom . We have to stop limiting what God can do !</p>

                        <div className="flex text-xl items-center space-x-4">
                            <div className="w-[2rem] h-[.2rem] bg-[#e6d32d]"></div>
                            <LuInstagram />
                            <FaTiktok />
                            <SlSocialYoutube />
                            <RiFacebookFill />
                        </div>
                    </div>

                    <div className='pl-14'>
                        <Image
                            src="/andrew.jpg"
                            alt="andrew's about picture"
                            // className="dark:invert"
                            width={450}
                            height={450}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;