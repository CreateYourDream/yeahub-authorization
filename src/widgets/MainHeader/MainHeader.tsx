import styles from "./MainHeader.module.scss";
import { CogIcon, UserIcon } from "@/shared/assets/icons";

export function MainHeader() {
  return (
    <header className={styles.header}>
      <button className={styles.settingsButton} type="button" aria-label="Настройки">
      <CogIcon />
      </button>
      <button className={styles.avatarButton} type="button" aria-label="Профиль">
        <UserIcon />
      </button>
    </header>
  );
}
