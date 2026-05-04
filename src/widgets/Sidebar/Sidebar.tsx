import { Logout } from "@/features/auth/ui/Logout";
import { Logo } from "@/shared/ui/Logo";
import clsx from "clsx";
import { Link, NavLink } from "react-router";
import styles from "./Sidebar.module.scss";
import { HouseIcon, UsersIcon, UserIcon, BookIcon, BlogIcon } from "@/shared/assets/icons";

interface Props {
  className?: string;
}

const menuItems = [
  { to: '/home', label: 'Главная', icon: <HouseIcon />},  
  { to: '/user', label: 'Мой профиль', icon: <UserIcon /> },
  { to: '/learning', label: 'Обучение', icon: <BookIcon /> },
  { to: '/blog', label: 'Блог', icon: <BlogIcon /> },
  { to: '/mentors', label: 'Менторы', icon: <UsersIcon /> },
];

export function Sidebar({ className }: Props) {
  return (
    <aside className={clsx(styles.sidebar, className)}>
      <div className={styles.sidebarTop}>
        <Logo className={styles.logo} color="dark" />
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item) => ((
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => clsx(styles.navItem, isActive && styles.active)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ) 
        ))}
      </nav>
      <div className={styles.sidebarActions}>
        <Link to="/home" className={clsx(styles.actionButton, styles.supportButton)}>
          Поддержка
        </Link>
        <Logout className={clsx(styles.actionButton, styles.logoutButton)} />
      </div>
    </aside>
  );
}
