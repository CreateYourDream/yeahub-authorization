import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import styles from "./RouteErrorPage.module.scss";

export const RouteErrorPage = () => {
  const error = useRouteError();

  const title = isRouteErrorResponse(error)
    ? `Ошибка ${error.status}`
    : "Что-то пошло не так";

  const description = isRouteErrorResponse(error)
    ? error.statusText || "Произошла ошибка при обработке маршрута."
    : "Ошибка. Попробуйте чуть позже.";

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <p className={styles.code}>Ошибка</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Link to="/home" className={styles.primaryAction}>
          На главную страницу
        </Link>
      </div>
    </section>
  );
};
