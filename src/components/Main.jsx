import React from 'react';
import { assets } from '../assets/exportAssets';

const Main = () => {
    return (
        <div className='flex-1 min-h-[100vh] pb-[15vh] relative'>
            {/* nav */}
            <div className='flex items-center justify-between p-[20px] text-[22px] text-[#585858]'>
                <p>Gemini</p>
                <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt='' />
            </div>

            {/* container */}
            <div>
                {/* say hi */}
                <div>
                    <p>
                        <span>Hello, Duc Huy.</span>
                    </p>
                    <p>How I can help you today?</p>
                </div>

                {/* 4 cards */}
                <div>
                    <p>Cristiano Ronaldo comeback to Man Utd</p>
                    <img src={assets.compass_icon} alt='' />
                </div>
                <div>
                    <p>4 tricks to master your English speaking skill</p>
                    <img src={assets.bulb_icon} alt='' />
                </div>
                <div>
                    <p>The future of AI. What is happened with OpenAI</p>
                    <img src={assets.message_icon} alt='' />
                </div>
                <div>
                    <p>How long to learn a new programming language?</p>
                    <img src={assets.code_icon} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Main;
