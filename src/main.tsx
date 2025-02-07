import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { SkeletonLoader } from './common/LoadingSkeleton';

const App = lazy(() => import('./App'));

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<SkeletonLoader />}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
);
