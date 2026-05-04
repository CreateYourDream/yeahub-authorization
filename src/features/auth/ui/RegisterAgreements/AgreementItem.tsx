import type { ReactNode } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { RegisterFormData } from "@/features/auth/ui/RegisterForm/types";
import styles from "./RegisterAgreements.module.scss";

type AgreementName = "agreePersonalData" | "agreeOffer" | "agreeMarketing";
export type { AgreementName };

type AgreementItemProps = {
  name: AgreementName;
  text: ReactNode;
  register: UseFormRegister<RegisterFormData>;
  disabled?: boolean;
  required?: boolean;
};

const REQUIRED_MESSAGE = "Подтвердите согласия для продолжения регистрации";

export function AgreementItem({
  name,
  text,
  register,
  disabled = false,
  required = false,
}: AgreementItemProps) {
  return (
    <label className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        disabled={disabled}
        {...register(name, required ? { required: REQUIRED_MESSAGE } : undefined)}
      />
      <span className={styles.text}>{text}</span>
    </label>
  );
}
