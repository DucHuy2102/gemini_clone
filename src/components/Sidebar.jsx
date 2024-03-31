import React, { useState } from 'react';
import { assets } from '../assets/exportAssets';

// css
const sidebar_Style = 'min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] p-[25px]';
const new_Chat_Style =
    'mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] text-black cursor-pointer rounded-[50px] text-[14px]';
const recent_Entry_Style =
    'flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]';

const bottom_Item_Style = 'pr-[10px] cursor-pointer';

const Sidebar = () => {
    const [isClickExtended, setIsClickExtended] = useState(false);
    return (
        <div className={`${sidebar_Style}`}>
            {/* top sidebar */}
            <div>
                <img
                    onClick={() => setIsClickExtended(!isClickExtended)}
                    className='w-[20px] ml-[15px] cursor-pointer'
                    src={assets.menu_icon}
                    alt='Menu Icon'
                />

                {/* new chat */}
                <div className={`${new_Chat_Style}`}>
                    <img className='w-[20px]' src={assets.plus_icon} alt='' />
                    {isClickExtended ? <p>New Chat</p> : null}
                </div>

                {/* history chat */}
                {isClickExtended ? (
                    <div className='flex flex-col'>
                        <p className='mt-[30px] mb-[20px]'>Recent</p>
                        <div className={`${recent_Entry_Style}`}>
                            <img className='w-[20px]' src={assets.message_icon} alt='' />
                            <p>What is Reactjs?</p>
                        </div>
                    </div>
                ) : null}
            </div>

            {/* bottom sidebar */}
            <div className='flex flex-col'>
                {/* help */}
                <div className={`${bottom_Item_Style} ${recent_Entry_Style}`}>
                    <img className='w-[20px]' src={assets.question_icon} alt='' />
                    {isClickExtended ? <p>Help</p> : null}
                </div>

                {/* activity */}
                <div className={`${bottom_Item_Style} ${recent_Entry_Style}`}>
                    <img className='w-[20px]' src={assets.history_icon} alt='' />
                    {isClickExtended ? <p>Activity</p> : null}
                </div>

                {/* settings */}
                <div className={`${bottom_Item_Style} ${recent_Entry_Style}`}>
                    <img className='w-[20px]' src={assets.setting_icon} alt='' />
                    {isClickExtended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
