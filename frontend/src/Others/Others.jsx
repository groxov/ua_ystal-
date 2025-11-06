import "../main.css";
import { PHOTOGRAPHER_TYPES } from "../utils/constants";
import testimonialImage from "./imgs/otherimg.png";
import arrowIcon from "./imgs/otherarrow.png";

export default function Others() {
    const handleMoreStories = () => {
    };

    const handleMoreInformation = (type) => {
    };

    const handleVisitResourceCenter = () => {
    };

    const testimonial = {
        quote: '"I learned so much, even as a professional".',
        text: '"Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."',
        author: "Juan Huang"
    };

    return (
        <section className='w-full h-fit'>
            <div className='w-full h-fit md:flex justify-between'>
                <div className='w-[170%] h-full relative bottom-[8vh] md:flex-col justify-center items-center pl-[20%] p-[30px] bg-white'>
                    <h1 className='text-center text-[28px] pb-[3vh] text-graytext'>
                        What <span className='text-salad underline'>others </span>say
                    </h1>

                    <div className='w-[276px] h-[336px] absolute top-[35vh] p-[10px] space-y-[40px] bg-white'>
                        <h2 className='w-[183px] text-purple3 text-[18px]'>
                            {testimonial.quote}
                        </h2>
                        <p className='w-[212px] text-[13px]'>
                            {testimonial.text}
                        </p>
                        <p className='text-purple3 text-[13px]'>{testimonial.author}</p>
                    </div>
                    
                    <img src={testimonialImage} alt="Testimonial" />
                    
                    <button 
                        className='w-[145px] h-[47px] text-white bg-salad absolute right-[2vh] bottom-[5vh] shadow-xl hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-salad focus:ring-offset-2'
                        onClick={handleMoreStories}
                        aria-label="View more stories"
                    >
                        more stories
                    </button>
                </div>

                <div className='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                    <div className='w-[160%] h-[460px] pt-[20px]'>
                        <h3 className='w-[300px] text-graytext text-[28px] pb-[20px] pt-[10px]'>
                            What kind of photographer <span className='text-salad text-[28px] underline'>are you</span>?
                        </h3>
                        
                        {PHOTOGRAPHER_TYPES.map((type, index) => (
                            <div 
                                key={index}
                                className='md:flex items-center space-y-[20px]'
                            >
                                <div className='space-y-[10px]'>
                                    <p className='text-[20px] text-purple3'>{type.type}</p>
                                    <p className='w-[305] h-fit text-[15px]'>
                                        {type.description}
                                    </p>
                                    <button 
                                        className='text-bluecard hover:text-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bluecard focus:ring-offset-2 rounded px-1'
                                        onClick={() => handleMoreInformation(type.type)}
                                        aria-label={`More information about ${type.type}`}
                                    >
                                        More Information
                                    </button>
                                </div>
                                <img src={arrowIcon} alt="Arrow" />
                            </div>
                        ))}

                        <button 
                            className='text-orange hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-2'
                            onClick={handleVisitResourceCenter}
                            aria-label="Visit resource center"
                        >
                            Visit Resource Center
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}