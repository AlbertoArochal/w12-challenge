import { Header } from '../Header/header';
import { UpgradeForm, ComponentType } from './upgradeForm';
export const UpgraderPage = () => {
    const handleSubmit = (components: ComponentType[]) => {
        console.log(components);
    };

    return (
        <div>
            <Header />
            <UpgradeForm onSubmit={handleSubmit} />
        </div>
    );
};
