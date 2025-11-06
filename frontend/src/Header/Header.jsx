import "../main.css";
import { HEADER_HELP_LINKS } from "../utils/constants";
import writerImage1 from "./imgs/headerhuman1.png";
import writerImage2 from "./imgs/headerhuman2.png";
import writerImage3 from "./imgs/headerhuman3.png";

export default function Header() {
    const handleBlogClick = () => {
    };

    const handleResourceCenterClick = () => {
    };

    const handleMeetTeamClick = () => {
    };

    return (
        <header className='w-full h-fit'>
            <div className='w-full h-[900px] bg-header-img bg-cover bg-center relative z-[1]'>
                <div className='w-[60%] h-[700px] ml-[20%] mr-[20%]'>
                    <div className='w-full h-[790px] ml-[68px] md:flex items-center'>
                        <div className='w-full h-fit md:flex-wrap'>
                            <h1 className='w-[576px] h-fit text-[49px] leading-[65px] text-graytext'>
                                The <span className='text-salad underline'>most complete </span>Photography resource.
                            </h1>
                            <p className='w-[500px] h-fit text-[19px] mt-[4px] text-graytext'>
                                Welcome at Template Resource. This template is packed with useful features to built out your own resource website.
                            </p>
                            <div className='w-[500px] h-fit md:flex gap-x-[20px] items-center mt-[10vh]'>
                                <button 
                                    className='w-[211px] h-[63px] bg-orange text-white text-[23px] p-[10px] leading-none cursor-pointer hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                                    onClick={handleBlogClick}
                                    aria-label="Visit our blog"
                                >
                                    Visit our Blog <br />
                                    <span className='text-[14px]'>Stories, News & info</span>
                                </button>
                                <button 
                                    className='w-[211px] h-[63px] bg-white text-graytext text-[23px] p-[10px] leading-none cursor-pointer hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                                    onClick={handleResourceCenterClick}
                                    aria-label="Visit resource center"
                                >
                                    Resource Center <br />
                                    <span className='text-[14px]'>Tips, Tricks & Tutorials</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[74%] h-fit ml-[13%] mr-[13%]'>
                <div className='md:flex ml-[68px] items-center justify-between'>
                    <div className='w-[full] h-[fit] md:flex gap-x-[4vh] items-center mt-[51px]'>
                        <h1 className='w-[125px] h-[fit] leading-[44px] text-salad text-[28px]'>
                            How can we help you?
                        </h1>
                        <ul className='w-[260px] h-[fit] leading-[28px] text-[15px] text-purple'>
                            {HEADER_HELP_LINKS.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-[800px] h-[375px] bg-header-block bg-no-repeat bg-cover bg-center bottom-[8vh] left-[21.7vh] relative z-[2] md:flex-col justify-center items-center text-white'>
                        <p className='w-fit h-fit pl-[8vh] pt-[2vh] text-[24px]'>Meet our Writers</p>
                        <p className='w-[306px] h-fit pl-[8vh] pt-[2vh] pb-[1vh] text-[14px]'>
                            We've got a professional team of professional photographers providing you with resources.
                        </p>
                        <div className='w-full h-full md:flex pl-[8vh] mt-[3vh]'>
                            <img 
                                src={writerImage1} 
                                alt="Writer 1" 
                                className='w-[80px] h-[80px] relative z-[3]' 
                            />
                            <img 
                                src={writerImage2} 
                                alt="Writer 2" 
                                className='w-[80px] h-[80px] relative top-3 right-6 z-[4]' 
                            />
                            <img 
                                src={writerImage3} 
                                alt="Writer 3" 
                                className='w-[80px] h-[80px] relative right-10 z-[3]' 
                            />
                            <button 
                                className='w-[146px] h-[50px] box bg-salad text-[15px] relative shadow-2xl right-14 top-5 z-[5] hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                                onClick={handleMeetTeamClick}
                                aria-label="Meet our team"
                            >
                                meet our team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}