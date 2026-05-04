import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './Input.module.scss';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  hasError?: boolean;
};

export const Input = ({ className, hasError = false, ...props }: InputProps) => {
  return (
    <input
      className={clsx(styles.input, hasError && styles.inputError, className)}
      {...props}
    />
  );
};

export type { InputProps };
