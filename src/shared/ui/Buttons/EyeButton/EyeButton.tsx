import clsx from 'clsx';
import styles from './EyeButton.module.scss';
import type { FieldError } from 'react-hook-form';


type EyeButtonProps = {
    onClick: () => void;
    isVisible: boolean;
    error?: FieldError;
    className?: string;

}



export const EyeButton = ({ onClick, isVisible = true, error, className }: EyeButtonProps) => {
    const errorClass = error ? styles.error : '';
    const showIconClass = isVisible ? styles.showIcon : styles.hideIcon;

    return (
        <button type="button" className={clsx(styles.button, className)} onClick={onClick}>
            <span className={clsx(styles.eyeIcon, showIconClass, errorClass)} />
        </button>
    );
};