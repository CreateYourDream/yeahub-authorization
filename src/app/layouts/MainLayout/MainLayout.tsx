import { MainHeader } from "@/widgets/MainHeader";
import { ShimmerLoader } from "@/shared/ui/ShimmerLoader";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router";
import styles from './MainLayout.module.scss';

export function MainLayout() {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebarSection} />
      <main className={styles.contentSection}>
        <MainHeader />
        <div className={styles.pageContent}>
          <Suspense fallback={<ShimmerLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  )
}


