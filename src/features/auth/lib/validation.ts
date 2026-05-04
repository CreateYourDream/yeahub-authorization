import type { UseFormWatch } from "react-hook-form";
export const emailValidation = {
    required: 'Укажите email',
    pattern: {
        value: /^[A-Za-z0-9][A-Za-z0-9_+&*-]*(?:\.[A-Za-z0-9_+&*-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/,
        message: 'Неверный формат электронной почты',
    },
} as const;
export const passwordValidation = {
    required: 'Пароль обязателен',
    minLength: {
        value: 6,
        message: 'Пароль должен содержать минимум 6 символов',
    },
    pattern: {
    value: /(?=.*[A-Z])/,
    message: "Пароль должен содержать минимум одну заглавную букву"
  }
} as const;
export const nicknameValidation = {
    required: 'Укажите никнейм',
    minLength: {
      value: 5,
      message: 'Минимум 5 символов',
    },
  }
 export const confirmPasswordValidation = (watch: UseFormWatch<any>) =>({
    required: "Подтвердите пароль",
    validate: (value: unknown) => {
      const watchedPassword = watch("password");
      return String(value) === String(watchedPassword) || "Пароли не совпадают";
    }
  }) ;