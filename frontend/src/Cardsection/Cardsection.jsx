import "../main.css";
import { useState, useEffect } from "react";
import { fetchCards, recordPurchase } from "../utils/api";
import instantIcon from "./imgs/instant.png";

export default function Cardsection() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [purchasingCardId, setPurchasingCardId] = useState(null);

    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = async () => {
        try {
            setLoading(true);
            const cardsData = await fetchCards();
            setCards(cardsData);
            setError(null);
        } catch (err) {
            setError('Failed to load cards');
            console.error('Error loading cards:', err);
        } finally {
            setLoading(false);
        }
    };

    const handlePurchase = async (card) => {
        if (purchasingCardId) return;
        
        try {
            setPurchasingCardId(card.id);
            await recordPurchase({
                card_id: card.id,
                period: card.period,
                price: card.price
            });
            console.log('Purchase recorded successfully');
            setTimeout(() => {
                setPurchasingCardId(null);
            }, 1000);
        } catch (err) {
            console.error('Error recording purchase:', err);
            setPurchasingCardId(null);
        }
    };

    const handleLearnMore = () => {
    };

    const instantAccessInfo = {
        title: "Instant Access",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    };

    if (loading) {
        return (
            <section className='w-full h-fit bg-purple2 bg-card-section'>
                <div className='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                    <p className='text-center text-white pt-[30vh]'>Loading...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className='w-full h-fit bg-purple2 bg-card-section'>
                <div className='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                    <p className='text-center text-white pt-[30vh]'>{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className='w-full h-fit bg-purple2 bg-card-section'>
            <div className='w-[60%] h-[fit] ml-[20%] mr-[20%]'>
                <h1 className='text-[52px] pt-[30vh] text-center text-white'>
                    Get full accesses. Today
                </h1>
                
                <div className='w-full h-fit md:flex justify-around pt-20'>
                    {cards.map((card) => (
                        <div 
                            key={card.id} 
                            className='w-[287px] h-[429px] bg-white p-5 space-y-[20px] transition-all duration-500 ease-in-out transform hover:scale-105 hover:h-[449px] hover:-translate-y-4 shadow-lg hover:shadow-xl'
                        >
                            <p className='text-left text-[15px] period'>{card.period}</p>
                            <h2 className='w-full h-fit md:flex items-center gap-x-4 text-[55px]'>
                                {card.price}
                                <span className='text-[14px]'>{card.month}</span>
                            </h2>
                            <ul className='custom-check-list'>
                                <li>{card.point_first}</li>
                                <li>{card.point_second}</li>
                                <li>{card.point_third}</li>
                            </ul>
                            <button 
                                className='w-[112px] h-[47px] bg-salad text-white cursor-pointer hover:bg-orange transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
                                onClick={() => handlePurchase(card)}
                                disabled={purchasingCardId === card.id}
                                aria-label={`Buy ${card.period} plan`}
                            >
                                {purchasingCardId === card.id ? 'Processing...' : 'Buy Now'}
                            </button>
                            <p className='w-[193px] text-description text-[11px]'>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className='w-full h-fit md:flex items-center m-auto justify-around pb-[20vh] mt-[9vh] text-white'>
                    <div>
                        <div className='md:flex items-center pb-[20px] gap-x-[10px]'>
                            <img 
                                src={instantIcon} 
                                alt="Instant access" 
                                className='w-[20px] h-[20px]'
                            />
                            <h3 className='text-[21px]'>{instantAccessInfo.title}</h3>
                        </div>
                        <p className='w-[537px]'>{instantAccessInfo.description}</p>
                    </div>
                    <button 
                        onClick={handleLearnMore}
                        className='hover:text-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded px-2'
                        aria-label="Learn more about instant access"
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
}