import { NavLink } from "react-router-dom";

export const SidebarHeader = ({ sidebarOpen, triggerRef, setSidebarOpen }: {
    sidebarOpen: boolean;
    triggerRef: React.RefObject<HTMLButtonElement>;
    setSidebarOpen: (open: boolean) => void;
  }) => (
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <NavLink to="/" className="text-2xl font-satoshi font-semibold text-whiten">
        My Admin
      </NavLink>
      
      <button
        ref={triggerRef}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
        className="block lg:hidden"
      >
        <svg className="fill-current" width="20" height="18" viewBox="0 0 20 18">
          <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" />
        </svg>
      </button>
    </div>
  );

  export const MenuSection = ({ title, children }: { title?: string; children: React.ReactNode }) => (
    <div className="mb-6">
      {title && <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">{title}</h3>}
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </div>
  );