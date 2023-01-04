import { NewsType, News } from './News';
import { phrases } from './newsModel';
import { useState, useEffect } from 'react';
export const FetchNews = () => {
    const news: NewsType[] = phrases;
    const randomNews = () => Math.floor(Math.random() * 20);
    const pickNews = () => {
        return [news[randomNews()], news[randomNews()]];
    };
    const finalNews = pickNews();

    return (
        <div className="NewsContainer">
            <h3>EXTRA!!!</h3>
            <p> {finalNews[0]}</p>
            <h3>DO NOT MISS THIS!!!</h3>
            <p> {finalNews[1]}</p>
        </div>
    );
};
