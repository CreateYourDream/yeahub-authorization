// widgets/Hero/Hero.tsx
import { Logo } from '@/shared/ui/Logo';
import clsx from 'clsx';
import styles from './Hero.module.scss';


interface Props {
  className?: string;
}

export function Hero({ className }: Props) {
  const benefits = [
    'Пошаговый план обучения',
    'Карьерный рост',
    'Большое сообщество специалистов',
    'Обучение с ментором',
    'Возможность прохождения стажировки',
  ];

  return (
    <section className={clsx(styles.hero, className)}>
      <div className={styles.heroContent}>
        <Logo color='light'/>
        <h1 className={styles.title}>
          Yeahub объединяет IT-специалистов
        </h1>

      </div>
      <div className={styles.benefitsContainer}>
        <p className={styles.subtitle}>
          Стань частью сообщества Yeahub и получи:
        </p>
        <ul className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <li key={index} className={styles.benefitItem}>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
