import clsx from 'clsx';
import styles from './SocialsList.module.scss';
import { Link } from 'react-router';
import { FacebookIcon } from '@shared/assets/icons';
import { GoogleIcon } from '@shared/assets/icons';
import { TelegramIcon } from '@shared/assets/icons';

interface Props {
    className?: string;
    title?: string;
}

export const SocialsList = ({ className, title }: Props) => {
    const socialLinks = [
        {
            name: 'Facebook',
            path: '/login/facebook',
            icon: <FacebookIcon />,
        },
        {
            name: 'Google',
            path: '/login/google',
            icon: <GoogleIcon />,
        },
        {
            name: 'Telegram',
            path: '/login/telegram',
            icon: <TelegramIcon />,
        }
    ]
    
    return (
        <div className={clsx(styles.container, className)}>
            {title && <span className={styles.title}>{title}</span>}
            <ul className={styles.list}>
                {socialLinks.map(({ name, path, icon }) => (
                    <li className={styles.item} key={name}>
                        <Link to={path}>{icon}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};