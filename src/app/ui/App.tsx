import { Providers, router } from '../providers';
import { RouterProvider } from 'react-router';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';



export function App() {
  return (
    <Providers>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Providers>
  );
}
