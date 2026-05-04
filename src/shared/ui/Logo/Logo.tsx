import { Link } from "react-router";
import styles from './Logo.module.scss';
import clsx from "clsx";

interface Props {
    className?: string;
    color?: 'dark' | 'light';
}

export const Logo = ({ className, color = 'dark' }: Props) => {
    return (
        <Link to="/" className={clsx(styles.logo, className)} data-color={color}/>
    );
};