
import { NavLink } from 'react-router-dom';

export const SidebarItem = ({ 
  to, 
  icon, 
  text, 
  isActive 
}: {
  to: string;
  icon?: React.ReactNode;
  text: string;
  isActive?: boolean;
}) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive: linkActive }) =>
        `group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 hover:bg-graydark dark:hover:bg-meta-4 ${
          (isActive || linkActive) ? 'bg-graydark dark:bg-meta-4' : ''
        }`
      }
    >
      {icon && <span className="fill-current">{icon}</span>}
      {text}
    </NavLink>
  </li>
);