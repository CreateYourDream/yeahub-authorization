import { Providers, router } from '../providers';
import { RouterProvider } from 'react-router';



export function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}
