import { Header } from '../Header/header';
import { DetailsLoader } from './DetailsLoader';
export const Details = (props: any) => {
    return (
        <>
            <Header />
            {<DetailsLoader />}
        </>
    );
};
