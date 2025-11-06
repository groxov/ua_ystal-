import "../main.css";
import backgroundImage from "./imgs/secbgimg.png";
import arrowIcon from "./imgs/secimgarrow.png";

export default function Secimg() {
    const handleResourceCenterClick = () => {
    };

    const ctaContent = {
        title: "Inspired to get your photography to the next level?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttonText: "Resource Center",
        buttonSubtext: "Packed with useful tips & tutorials"
    };

    return (
        <section className='w-full h-[460px]'>
            <div className='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                <div className='w-full h-fit relative z-[9]'>
                    <img 
                        src={backgroundImage} 
                        alt="Photography inspiration" 
                        className='w-[1100px] h-[660px]'
                    />
                    <div className='w-[500px] max-h-[469px] bg-purple2 p-10 space-y-[20px] text-white absolute z-[10] top-[191px]'>
                        <h4 className='w-[370px] text-[44px]'>
                            {ctaContent.title}
                        </h4>
                        <p className='text-[15px]'>
                            {ctaContent.description}
                        </p>
                        <button 
                            className='w-[335px] h-[68px] bg-salad text-white md:flex justify-center mt-[60px] items-center text-[23px] text-left space-x-[30px] p-4 cursor-pointer hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                            onClick={handleResourceCenterClick}
                            aria-label="Visit resource center"
                        >
                            <img src={arrowIcon} alt="Arrow" />
                            <div>
                                {ctaContent.buttonText} <br />
                                <span className='text-[14px]'>{ctaContent.buttonSubtext}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}