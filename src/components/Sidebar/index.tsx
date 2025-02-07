import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuSection, SidebarHeader } from './SideBarHeader';
import { SidebarDropdown } from './SideBarDropdown';
import { DashboardIcon, ProfileIcon } from '../../assets/sideBarIcons';
import { SidebarItem } from './SideBarItem';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { pathname } = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem('sidebar-expanded') === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebarRef.current || !triggerRef.current) return;
      if (!sidebarOpen || sidebarRef.current.contains(target as Node) || triggerRef.current.contains(target as Node)) 
        return;
      setSidebarOpen(false);
    };

    const keyHandler = ({ key }: KeyboardEvent) => {
      if (sidebarOpen && key === 'Escape') setSidebarOpen(false);
    };

    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    document.body.classList.toggle('sidebar-expanded', sidebarExpanded);
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebarRef}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col bg-black transition-transform duration-300 dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <SidebarHeader 
        sidebarOpen={sidebarOpen}
        triggerRef={triggerRef}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <MenuSection title="MENU">
            <SidebarDropdown
              icon={<DashboardIcon />}
              title="Dashboard"
              isActive={pathname.includes('dashboard')}
              isExpanded={sidebarExpanded}
              onToggle={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <SidebarItem to="/" text="Admin Portal" />
              <SidebarItem to="/users" text="Users" />
            </SidebarDropdown>

            <SidebarItem
              to="/profile"
              icon={<ProfileIcon />}
              text="Profile"
              isActive={pathname.includes('profile')}
            />
          </MenuSection>
        </nav>
      </div>
    </aside>
  );
};
