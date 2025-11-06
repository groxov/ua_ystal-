import "../main.css";
import featuredImage1 from "./imgs/mainfirstimg.png";
import featuredImage2 from "./imgs/mainsecondimg.png";
import featuredImage3 from "./imgs/mainthirdimg.png";
import authorAvatar from "../Header/imgs/headerhuman3.png";

export default function Mainpage() {
    const handleVisitBlog = () => {
    };

    const blogPost = {
        title: "Photographers Who Changed the World forever",
        content: "Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia nulla.",
        author: "Robert Brown",
        date: "September 13, 2019"
    };

    const secondaryPost = {
        date: "Sep 13, 2019",
        title: "7 Things About Photography Your Boss Wants To Know"
    };

    return (
        <main className='w-full h-[1200px]'>
            <div className='w-[60%] h-[700px] ml-[20%] mr-[20%]'>
                <h1 className='w-[500px] text-[52px] ml-[68px] text-graytext'>
                    Recently in our Photography <span className='text-orange underline'>Blog</span>.
                </h1>
                
                <div className='w-[1000px] h-[769px] m-auto md:flex gap-x-[4vh] mt-[3vh]'>
                    <div className='w-[534px] h-[769px]'>
                        <img src={featuredImage1} alt={blogPost.title} />
                        <div className='w-[400px] h-[300px] bg-white relative bottom-[124px] pt-[10px]'>
                            <h2 className='w-[314px] text-purple text-[30px]'>
                                {blogPost.title}
                            </h2>
                            <p className='w-[327px] text-[14px] text-graytext pt-[20px] pb-[20px]'>
                                {blogPost.content}
                            </p>
                            <div className='md:flex items-center gap-x-[10px]'>
                                <img 
                                    src={authorAvatar} 
                                    alt={blogPost.author} 
                                    className='w-[40px] h-[40px]' 
                                />
                                <div className='text-[14px] text-purple'>
                                    <p>{blogPost.author}</p>
                                    <p>on {blogPost.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-fit max-h-fit md:flex-col space-y-[20px]'>
                        <img src={featuredImage2} alt="Blog post" />
                        <img src={featuredImage3} alt="Blog post" />
                        
                        <div className='w-[15%] h-fit text-[18px] bg-white absolute pt-[3vh] top-[206%]'>
                            <p className='text-[12px] text-graytext'>{secondaryPost.date}</p>
                            <p className='w-[222px] text-purple'>{secondaryPost.title}</p>
                        </div>
                        
                        <div className='w-[400px] h-[350px] md:flex-col space-y-[20px] pt-[25%] items-center bg-main-block bg-no-repeat bg-cover bg-center p-[60px] text-white'>
                            <h3 className='text-[28px]'>Visit Full Blog</h3>
                            <p className='text-[14px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button 
                                className='text-[14px] text-orange hover:text-white hover:bg-orange px-3 py-1 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2'
                                onClick={handleVisitBlog}
                                aria-label="Visit full blog"
                            >
                                Visit Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}