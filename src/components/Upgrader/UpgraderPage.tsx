import { Header } from '../Header/header';
import { UpgradeForm } from './upgradeForm';
import { ComponentType } from './upgradeForm';
export const UpgraderPage = () => {
    const handleSubmit = (components: ComponentType[]) => {
        console.log(components);
    };

    return (
        <>
            <Header />
            <UpgradeForm onSubmit={handleSubmit} />
        </>
    );
};
