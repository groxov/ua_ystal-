import "../main.css";
import { FOOTER_LINKS } from "../utils/constants";
import footerLogo from "./imgs/logofooter.png";

export default function Footer() {
    const footerDescription = "Welcome at Template Resource. This template is packed with useful features to built out your own resource website.";
    
    const copyrightText = {
        copyright: "Copyright ©",
        studio: "Studio Corvus",
        poweredBy: "Powered by",
        template: "Webflow Template Licensing Info"
    };

    const handleLinkClick = (link) => {
        console.log("Navigating to:", link);
    };

    return (
        <footer className='w-full h-[fit] bg-footer-section bg-purple4'>
            <div className='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                <div className='w-full h-full md:flex justify-between pt-[10%]'>
                    <div className='text-white space-y-[20px]'>
                        <img src={footerLogo} alt="Footer logo" />
                        <p className='w-[300px]'>{footerDescription}</p>
                    </div>

                    <div className='w-[40%] md:flex items-center gap-x-[40px]'>
                        <ul className='space-y-[10px]'>
                            <li className='w-[84px] text-white text-[18px]'>
                                {FOOTER_LINKS.ABOUT_US.title}
                            </li>
                            {FOOTER_LINKS.ABOUT_US.items.map((item, index) => (
                                <li 
                                    key={index}
                                    className='w-[130px] text-purple5 text-[14px] cursor-pointer hover:text-white transition-colors'
                                    onClick={() => handleLinkClick(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <ul className='space-y-[10px]'>
                            <li className='w-[84px] text-white text-[18px]'>
                                {FOOTER_LINKS.INFORMATION.title}
                            </li>
                            {FOOTER_LINKS.INFORMATION.items.map((item, index) => (
                                <li 
                                    key={index}
                                    className='w-[130px] text-purple5 text-[14px] cursor-pointer hover:text-white transition-colors'
                                    onClick={() => handleLinkClick(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <ul className='space-y-[10px]'>
                            <li className='w-[84px] text-white text-[18px]'>
                                {FOOTER_LINKS.CONTACT.title}
                            </li>
                            {FOOTER_LINKS.CONTACT.items.map((item, index) => (
                                <li 
                                    key={index}
                                    className='w-[130px] text-purple5 text-[14px] cursor-pointer hover:text-white transition-colors'
                                    onClick={() => handleLinkClick(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p className='text-white text-[12px] pt-[9vh] pb-[9vh]'>
                    {copyrightText.copyright}{' '}
                    <span className='text-orange'>{copyrightText.studio}</span>{' '}
                    {copyrightText.poweredBy}{' '}
                    <span className='text-orange'>{copyrightText.template}</span>
                </p>
            </div>
        </footer>
    );
}