import { Header } from './Components/Header/header';
import { AppRouter } from './router/AppRouter';
import { MainPage } from './Components/main/mainpage';
import { Footer } from './Components/Footer/Footer';
export const RoboStore = () => {
    return (
        <>
            <AppRouter />
            <Header />
            <MainPage />
            <Footer />
        </>
    );
};
