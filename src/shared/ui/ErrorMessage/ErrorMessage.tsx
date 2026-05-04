import styles from './ErrorMessage.module.scss';
import clsx from 'clsx';

type FormErrorProps = {
    message?: string;
    className?: string;
    id?: string;
    as?: 'span' | 'p' | 'div';
};

export const ErrorMessage = ({ message, className, id, as = 'span' }: FormErrorProps) => {
    if (!message) {
        return null;
    }

    const Component = as;

    return (
        <Component id={id} className={clsx(styles.message, className)} role="alert">
            {message}
        </Component>
    );
};
