import styles from './RegisterPage.module.scss';
// import { AuthLayout } from "@/app/layouts/AuthLayout/AuthLayout";
import { Logo } from "@/shared/ui/Logo";
import { RegisterForm } from "@/features/auth/ui/RegisterForm";
import { SocialsList } from "@/shared/ui/SocialsList";
import { AuthSwitcher } from "@/shared/ui/AuthSwitcher";

export const RegisterPage = () => {
  return (

      <div className={styles.container}>
        <Logo color='dark' className={styles.logo} />
        <h2 className={styles.title}>Регистрация</h2>
        <RegisterForm />
        <SocialsList className={styles.socials} title="Зарегистрироваться через социальные сети" />
        <AuthSwitcher className={styles.footer} type='login' />
      </div>

  );
};