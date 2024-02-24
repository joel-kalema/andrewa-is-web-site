import Image from "next/image";
import { Bodoni_Moda } from 'next/font/google';
import { BsArrowRight } from "react-icons/bs";

const font = Bodoni_Moda({
    subsets: ['latin'],
    weight: '400',
})

const Media = () => {
    return (
        <div className="pt-40 bg-[#ffffff]">

            <div className='flex flex-col items-center'>
                <h1 className={`${font.className} text-6xl text-[#000000] mb-4`}>Medias</h1>
                <div className="w-[5rem] h-[.2rem] bg-[#e6d32d] mb-20"></div>
            </div>
            <div className="flex relative">
                <div className="opacity-50 cursor-pointer mt-16 w-2/5">
                    <Image
                        src="/media.png"
                        alt="andrew's logo"
                        className="animate"
                        // className="dark:invert"
                        width={700}
                        height={700}
                        priority
                    />
                </div>

                <div className="pl-24 w-2/4 flex z-50 justify-between">
                    <div className="w-[47%] h-[26rem] bg-[#fff] rounded-[.5rem] p-1 border-solid border-[1px] border-[#dedede]">
                        <div className="bg-[#ededed] w-6/6 h-[100%] rounded-[.3rem]">

                        </div>
                    </div>

                    <div className="w-[47%] h-[26rem] bg-[#fff] rounded-[.5rem] p-1 border-solid border-[1px] border-[#e0e0e0]">
                        <div className="bg-[#e9e9e9] w-6/6 h-[100%] rounded-[.3rem]">

                        </div>
                    </div>
                </div>
                <div className="ombre h-[40dvh]"></div>
            </div>

            <div className="px-32 ml-32 py-28 flex justify-between items-center">
                <h1 className={`${font.className} text-6xl text-[#464646] mb-4`}>FOLLOW US ON <br />INSTAGRAM</h1>
                <div className="w-2/5">
                    <p>Follow @andrewaggreyy on Instagram to continue to stay up to date on our gatherings!</p>
                    <p className="flex items-center font-extrabold mt-4">FOLLOW US <BsArrowRight className="ml-2"/></p>
                </div>
            </div>

            <div className="flex justify-between items-center px-32 py-40">
                <div className="w-2/5">
                    <h1 className="text-3xl font-extrabold text-[#1d1d1d] mb-4">FAITHFULNESS IN CHANGE: <br />A TESTIMONY OF UNWAVERING LOVE</h1>
                    <p>These past two years haven’t always been the easiest but one person who has always remained the same is Jesus . Seasons change , people change, but you Lord are always faithful. I love how God finds us in our lowest place and He doesn’t leave us where He found us.</p>
                </div>
                <div className="w-3/6">
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>


        </div>
    )
}

export default Media;