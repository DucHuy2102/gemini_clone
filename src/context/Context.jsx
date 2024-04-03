import React, { createContext, useState } from 'react';
import runChat from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {
    const [search, setSearch] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const onSent = async (prompt) => {
        setData('');
        setLoading(true);
        setShowResult(true);
        let responseData;
        if (prompt !== undefined) {
            responseData = await runChat(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts((prev) => [...prev, search]);
            setRecentPrompt(search);
            responseData = await runChat(search);
        }
        let resArray = responseData.split('**');
        let newResponse = '';
        for (let i = 0; i < resArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += resArray[i];
            } else {
                newResponse += '<b>' + resArray[i] + '</b>';
            }
        }
        let responseJoin = newResponse.split('*').join('</br>');
        let responseArray = responseJoin.split(' ');
        for (let i = 0; i < responseArray.length; i++) {
            delayPara(i, responseArray[i] + ' ');
        }
        setLoading(false);
        setSearch('');
    };
    // onSent('Do you know Cristiano Ronaldo?');

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        data,
        search,
        setSearch,
        newChat,
    };
    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
