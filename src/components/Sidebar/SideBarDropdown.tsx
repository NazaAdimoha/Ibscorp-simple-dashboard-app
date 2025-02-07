import React from 'react';
import { NavLink } from 'react-router-dom';

export const SidebarDropdown = ({ 
  icon, 
  title, 
  children, 
  isActive, 
  isExpanded, 
  onToggle 
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [open, setOpen] = React.useState(isActive);

  const handleClick = () => {
    setOpen(!open);
    if (!isExpanded) onToggle();
  };

  return (
    <li>
      <NavLink
        to="#"
        onClick={handleClick}
        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 hover:bg-graydark dark:hover:bg-meta-4 ${
          isActive && 'bg-graydark dark:bg-meta-4'
        }`}
      >
        {icon}
        {title}
        <svg
          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open ? 'rotate-180' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" />
        </svg>
      </NavLink>
      <div className={`translate transform overflow-hidden ${!open ? 'hidden' : ''}`}>
        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">{children}</ul>
      </div>
    </li>
  );
};