import Image from "next/image";

const HomePage = () => {
    return (
        <div className="flex w-5/6 mx-auto pb-60">
            <div>
                <Image
                    src="/home.png"
                    alt="andrew's logo"
                    // className="dark:invert"
                    width={500}
                    height={500}
                    priority
                />
            </div>

            <div className="w-2/4 pl-24 text-[#fff] py-20">
                <div className="w-3/5 h-[.2rem] bg-[#e6d32d] mb-20"></div>
                <h1 className="font-extrabold text-4xl mb-8">ANDREW AGGREYY</h1>
                <h2 className="font-extrabold text-[#bbbaba] text-2xl mb-16">+I Help Christians GROW Their Instagram & Coaching Business</h2>
                <p>I know some people probably won’t like this post but I refuse to remain silent about the truth of God’s word . Jesus did not come to bring another religion He came to bring the kingdom . We have to stop limiting what God can do !</p>
            </div>
        </div>
    )
}

export default HomePage;