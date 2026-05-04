import clsx from "clsx";
import styles from "./HomePage.module.scss";
import { useAppSelector } from "@/app/store/hooks";

interface Props {
  className?: string;
}

export const HomePage = ({ className }: Props) => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <div className={clsx(styles.home, className)}>
      <h1 className={styles.title}>Привет, {username}!</h1>
      <p className={styles.subtitle}>
        Скоро здесь будут отображаться мероприятия сообщества, популярные статьи и
        много еще чего интересного
      </p>
    </div>
  );
};