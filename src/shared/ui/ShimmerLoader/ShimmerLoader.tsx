import styles from "./ShimmerLoader.module.scss";

export const ShimmerLoader = () => {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.shimmer} />
    </div>
  );
};
