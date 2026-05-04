import clsx from 'clsx';
import type { ReactNode } from 'react';
import { ErrorMessage } from '@/shared/ui/ErrorMessage';
import type { RegisterFormData } from '@/features/auth/ui/RegisterForm/types';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './RegisterAgreements.module.scss';
import { AgreementItem, type AgreementName } from './AgreementItem';

type RegisterAgreementsProps = {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
  disabled?: boolean;
  className?: string;
};

type AgreementConfig = {
  name: AgreementName;
  text: ReactNode;
  required?: boolean;
};

export const RegisterAgreements = ({ register, errors, disabled = false, className }: RegisterAgreementsProps) => {
  const hasError = !!errors.agreePersonalData || !!errors.agreeOffer;
  const agreements: AgreementConfig[] = [
    {
      name: 'agreePersonalData',
      required: true,
      text: (
        <>
          Даю согласие на <a href="#" className={styles.link}>обработку ПД</a>, в соответствии с{' '}
          <a href="#" className={styles.link}>Политикой в отношении ПД</a>
        </>
      ),
    },
    {
      name: 'agreeOffer',
      required: true,
      text: 'Я подтверждаю что ознакомился(-ась) с Договором-офертой',
    },
    {
      name: 'agreeMarketing',
      text: 'Даю согласие на получение рекламных и информационных рассылок',
    },
  ];

  return (
    <div className={clsx(styles.root, className)}>
      {agreements.map((agreement) => (
        <AgreementItem
          key={agreement.name}
          name={agreement.name}
          register={register}
          disabled={disabled}
          required={agreement.required}
          text={agreement.text}
        />
      ))}

      <ErrorMessage
        className={styles.error}
        message={hasError ? 'Для регистрации нужно принять обязательные условия' : undefined}
      />
    </div>
  );
};
