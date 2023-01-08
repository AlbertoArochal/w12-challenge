import { Header } from './components/Header/header';
import { AppRouter } from './router/AppRouter';
import { MainPage } from './components/main/mainpage';
import { Footer } from './components/Footer/Footer';
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
