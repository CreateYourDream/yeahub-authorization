import styles from './AuthLayout.module.scss';
import { ShimmerLoader } from "@/shared/ui/ShimmerLoader";
import { Hero } from "@/widgets/Hero";
import { Suspense } from "react";
import { Outlet } from 'react-router';




export const AuthLayout = () => {
  return (
    <div className={styles.container}>
      <Hero className={styles.heroSection} />
      <div className={styles.authSection}>
        <Suspense fallback={<ShimmerLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};