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
            <div className="new1 news">
                <div className="bloat bloat1"></div>
                <h3>EXTRA!!!</h3>
                <h4> {finalNews[0]}</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, maxime veritatis nihil nam consectetur optio nostrum
                    omnis quos ad velit accusamus recusandae itaque temporibus
                    commodi molestias blanditiis obcaecati. Minima, a.
                </p>
            </div>
            <div className="new2 news">
                <div className="bloat bloat2"></div>
                <h3>DO NOT MISS THIS!!!</h3>
                <h4> {finalNews[1]}</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corporis nostrum dolor eum ab dolorum necessitatibus dicta
                    perspiciatis officia, voluptatibus aut fugiat quos velit,
                    numquam quaerat aliquid debitis odio voluptate. Molestiae.
                </p>
            </div>
        </div>
    );
};
