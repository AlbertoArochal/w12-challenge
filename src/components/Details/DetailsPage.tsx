import { Header } from '../Header/header';
import { DetailsLoader } from './DetailsLoader';
export const Details = (props: any) => {
    return (
        <div>
            <Header />
            {<DetailsLoader />}
        </div>
    );
};
