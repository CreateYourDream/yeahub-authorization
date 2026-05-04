// import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FormField } from '@/shared/ui/FormField';
import type { LoginCredentials } from '@/features/auth/api/type';
import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { emailValidation, passwordValidation } from '@/features/auth/lib';
import clsx from 'clsx';
import { Button } from '@/shared/ui/Buttons/Button';
import { useLoginMutation } from '@/features/auth/api/auth-api';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import { handleFormError } from '@/shared/lib/errorMessage/handleFormError';
import type { ApiErrorResponse } from '@/shared/lib/errorMessage/handleFormError';
import { FormPasswordField } from '@/shared/ui/FormPasswordField';

type LoginFormProps = {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm<LoginCredentials>({
        mode: 'onChange',
        defaultValues: { username: '', password: '' }
    });
    const [login, { isLoading }] = useLoginMutation();

    const submitHandler: SubmitHandler<LoginCredentials> = async (data) => {
        try {
            await login(data).unwrap();
            navigate('/home');
        } catch (caughtError) {
            handleFormError(caughtError as ApiErrorResponse, setError);
        }
    };

    return (
        <form className={clsx(styles.loginForm, className)} onSubmit={handleSubmit(submitHandler)}>
            <FormField
                label="Электронная почта"
                className={styles.emailField}
                name="username"
                type="text"
                placeholder="Введите электронную почту"
                register={register}
                disabled={isLoading}
                registerOptions={emailValidation}
                error={errors.username}
            />
            <FormPasswordField
                label="Пароль"
                name="password"
                placeholder="Введите пароль"
                disabled={isLoading}
                register={register}
                registerOptions={passwordValidation}
                error={errors.password}
            />
            <ErrorMessage
                as="p"
                className={styles.error}
                message={errors.root?.serverError?.message}
            />
            <Link to="/forgot-password" className={styles.forgotLink}>
                Забыли пароль?
            </Link>
            <Button text="Вход" type="submit" className={styles.submitButton} disabled={!isValid || isLoading} />
        </form>
    );
};

