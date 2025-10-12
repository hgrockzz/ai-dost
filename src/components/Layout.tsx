import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNavigation, { type TabType } from './BottomNavigation';

interface LayoutProps {
    children: React.ReactNode;
    showBottomNavigation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    showBottomNavigation = true
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const getActiveTab = (): TabType => {
        const path = location.pathname;
        if (path === '/') return 'home';
        if (path === '/chat') return 'chat';
        if (path === '/settings') return 'settings';
        return 'home';
    };

    const handleTabChange = (tab: TabType) => {
        switch (tab) {
            case 'home':
                navigate('/');
                break;
            case 'chat':
                navigate('/chat');
                break;
            case 'settings':
                navigate('/settings');
                break;
            default:
                navigate('/chat');
        }
    };

    return (
        <div className="min-h-screen bg-background-light flex flex-col">
            {children}

            {showBottomNavigation && (
                <BottomNavigation
                    activeTab={getActiveTab()}
                    onTabChange={handleTabChange}
                />
            )}
        </div>
    );
};

export default Layout;
