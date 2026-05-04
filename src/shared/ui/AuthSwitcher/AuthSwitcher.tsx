import { Link } from "react-router";
import styles from './AuthSwitcher.module.scss';
import clsx from "clsx";

interface Props {
    className?: string;
    type?: 'login' | 'register';
}

export const AuthSwitcher = ({ className, type = 'login' }: Props) => {
    const config = {
        register: {
            text: 'Нет аккаунта?',
            link: '/register',
            linkText: 'Зарегистрироваться',
        },
        login: {
            text: 'Уже есть аккаунт?',
            link: '/login',
            linkText: 'Войти',
        },
    }[type]
    
    return (
        <div className={clsx(className)}>
            <span className={styles.text}>{config.text}</span>
            <Link to={config.link} className={styles.link}>
                {config.linkText}
            </Link>
        </div>
    );
};