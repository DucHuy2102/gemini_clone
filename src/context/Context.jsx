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

    const onSent = async (prompt) => {
        setData('');
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(search);
        const res = await runChat(search);
        setData(res);
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
    };
    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
