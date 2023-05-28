import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { SiteHeaderComponent } from './header';

export function SiteRoutesComponent() {
    const translate = useTranslation();

    return (
        <>
            <div className="site-content">
                <SiteHeaderComponent/>
                <Outlet context={[translate]} />
            </div>
        </>
    );
}