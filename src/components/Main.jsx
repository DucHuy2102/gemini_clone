import React, { useContext } from 'react';
import { assets } from '../assets/exportAssets';
import './Main.css';
import { Context } from '../context/Context';
import DOMPurify from 'dompurify';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, data, search, setSearch } = useContext(Context);

    return (
        <div className='flex-1 min-h-[100vh] pb-[15vh] relative'>
            {/* nav */}
            <div className='flex items-center justify-between p-[20px] text-[22px] text-[#585858]'>
                <p>Gemini</p>
                <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt='' />
            </div>

            {/* container */}
            <div className='max-w-[900px] m-auto'>
                {!showResult ? (
                    <>
                        {/* say hi */}
                        <div className='greet text-[56px] text-[#c4c7c5] font-[500] p-[20px]'>
                            <p>
                                <span>Hello, Duc Huy.</span>
                            </p>
                            <p>How I can help you today?</p>
                        </div>

                        {/* 4 cards */}
                        <div className='cards'>
                            <div className='card'>
                                <p>Cristiano Ronaldo comeback to Man Utd</p>
                                <img src={assets.compass_icon} alt='' />
                            </div>
                            <div className='card'>
                                <p>4 tricks to master your English speaking skill</p>
                                <img src={assets.bulb_icon} alt='' />
                            </div>
                            <div className='card'>
                                <p>The future of AI. What is happened with OpenAI</p>
                                <img src={assets.message_icon} alt='' />
                            </div>
                            <div className='card'>
                                <p>How long to learn a new programming language?</p>
                                <img src={assets.code_icon} alt='' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt='' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-content'>
                            <img src={assets.gemini_icon} alt='' />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}></p>
                            )}
                        </div>
                    </div>
                )}

                {/* search */}
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type='text'
                            placeholder='Enter a prompt here'
                        />
                        <div className='flex gap-3'>
                            <img src={assets.gallery_icon} alt='' />
                            <img src={assets.mic_icon} alt='' />
                            <img onClick={() => onSent()} src={assets.send_icon} alt='' />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your
                        privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
