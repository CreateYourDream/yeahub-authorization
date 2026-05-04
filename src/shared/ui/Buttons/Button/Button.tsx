import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset' 


interface Props {
className?: string;
disabled?: boolean;
text: string;
type?: ButtonType;
onClick?: () => void;
variant?: 'primary' | 'logout';
}

export const Button = ({ className, disabled = false, text, type = 'button', onClick, variant = 'primary' }: Props) => {
  const buttonClass = {
    primary: styles.primary,
    logout: clsx(styles.logout, className),
  }[variant];

    return (
      <button className={clsx(buttonClass, styles.button, className)} disabled={disabled} type={type} onClick={onClick}>
        {text}
      </button>
    );
  };