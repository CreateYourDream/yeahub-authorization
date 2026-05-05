import { Link } from "react-router";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.description}>
          Возможно, адрес введен неверно или страница была перемещена.
        </p>
        <Link to="/home" className={styles.primaryAction}>
          На главную страницу
        </Link>
       
      </div>
    </section>
  );
};
