import { FetchNews } from './FetchNews';
import { BestEmployee } from '../BestEmployee/BestEmployee';
export type NewsType = string;
export const News = () => {
    return (
        <div className="NewsSection">
            <div className="BestEmp">
                <BestEmployee />
            </div>
            <div className="NewsForm">
                <FetchNews />
            </div>
        </div>
    );
};
