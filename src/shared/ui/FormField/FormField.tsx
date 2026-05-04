import clsx from 'clsx';
import styles from './FormField.module.scss';
import type { HTMLInputTypeAttribute } from 'react';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import { Input } from '@/shared/ui/Input';
import type {
    FieldError,
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from 'react-hook-form';

export type FormFieldProps<T extends FieldValues> = {
    name: Path<T>;
    type?: HTMLInputTypeAttribute;
    className?: string;
    labelClassName?: string;
    errorClassName?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    inputClassName?: string;
    register: UseFormRegister<T>;
    registerOptions?: RegisterOptions<T, Path<T>>;
    error?: FieldError;
    renderAfter?: React.ReactNode;
};

export const FormField = <T extends FieldValues>({
    className,
    labelClassName,
    errorClassName,
    label,
    name,
    type = 'text',
    placeholder,
    disabled = false,
    inputClassName,
    register,
    registerOptions,
    error,
    renderAfter,
}: FormFieldProps<T>) => {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={name} className={clsx(styles.formLabel, labelClassName)}>
                    {label}
                </label>
            )}
            <Input
                id={name}
                type={type}
                className={inputClassName}
                hasError={!!error}
                placeholder={placeholder}
                disabled={disabled}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
                {...register(name, registerOptions)}
            />
            <ErrorMessage
                id={error ? `${name}-error` : undefined}
                className={clsx(styles.errorText, errorClassName)}
                message={error?.message}
            />
            {renderAfter}
        </div>
    );
};
