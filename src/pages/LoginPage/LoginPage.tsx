import styles from './LoginPage.module.scss';
// import { AuthLayout } from "@/app/layouts/AuthLayout/AuthLayout";
import { LoginForm } from "@/features/auth/ui/LoginForm";
import { Logo } from "@/shared/ui/Logo";
import { SocialsList } from "@/shared/ui/SocialsList";
import { AuthSwitcher } from "@/shared/ui/AuthSwitcher";

export const LoginPage = () => {
  return (
    // <AuthLayout>
      <div className={styles.container}>
        <Logo color='dark' className={styles.logo} />
        <h2 className={styles.title}>Вход в личный кабинет</h2>
        <LoginForm />
        <SocialsList className={styles.socials} title="Зарегистрироваться через социальные сети" />
        <AuthSwitcher className={styles.footer} type='register' />
      </div>
    // </AuthLayout>
  );
};