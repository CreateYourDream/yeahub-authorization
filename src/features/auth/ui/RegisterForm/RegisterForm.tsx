import { Button } from '@/shared/ui/Buttons/Button';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { FormField } from '@/shared/ui/FormField';
import { useRegisterMutation } from '@/features/auth/api/auth-api';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import styles from './RegisterForm.module.scss';
import { confirmPasswordValidation, emailValidation, nicknameValidation, passwordValidation } from '@/features/auth/lib';
import { FormPasswordField } from '@/shared/ui/FormPasswordField';
import { RegisterAgreements } from '@/features/auth/ui/RegisterAgreements';
import type { RegisterFormData } from './types';
import { logger } from '@/shared/lib/logger';

export const RegisterForm = () => {
  const [registerUser, { isLoading, error: registerError }] = useRegisterMutation();

  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<RegisterFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      agreeMarketing: false,
      agreeOffer: false,
      agreePersonalData: false,
    },
  });

  const submitHandler: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap();
    } catch (error) {
      logger.error('Ошибка регистрации', error);
    }
  };



  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(submitHandler)} noValidate>
      <FormField
        label="Никнейм"
        name="username"
        type="text"
        placeholder="Введите никнейм"
        className={styles.FormField}
        disabled={isLoading}
        register={register}
        registerOptions={nicknameValidation}
        error={errors.username}
      />
      <FormField
        label="Электронная почта"
        name="email"
        type="text"
        placeholder="Введите электронную почту"
        className={styles.FormField}
        disabled={isLoading}
        register={register}
        registerOptions={emailValidation}
        error={errors.email}
      />

      <FormPasswordField
        label="Пароль"
        name="password"
        placeholder="Введите пароль"
        className={styles.FormField}
        disabled={isLoading}
        register={register}
        registerOptions={passwordValidation}
        error={errors.password}
      />
      <FormPasswordField
        label="Повторите пароль"
        name="confirmPassword"
        placeholder="Повторите пароль"
        className={styles.FormField}
        disabled={isLoading}
        register={register}
        registerOptions={confirmPasswordValidation(watch)}
        error={errors.confirmPassword}
      />
      <ErrorMessage
        as="p"
        className={styles.error}
        message={registerError ? 'Не удалось зарегистрироваться' : undefined}
      />
      <RegisterAgreements
        className={styles.agreements}
        register={register}
        errors={errors}
        disabled={isLoading}
      />
      <Button
        text="Зарегистрироваться"
        type="submit"
        className={styles.submitButton}
        disabled={!isValid || isLoading}
      />
    </form>
  );
};
