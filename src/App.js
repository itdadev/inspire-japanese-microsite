import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@emotion/react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { createTheme } from '@mui/material';
import { FallbackRender } from '@/lib/react-error-boundary/FallbackRender';

import AppTheme from '@/theme';

import { Header } from '@/components/shared/header';
import { RootLayout } from '@/_root';
import { NetworkError, NotFound } from '@/_root/pages';
import { BlogDetail } from '@/_root/pages/blog';
import { Home } from '@/_root/pages/home';
import { Suspense } from 'react';
import { LoadingScreen } from '@/components/ui/loading';

function App() {
  const customMuiTheme = createTheme(AppTheme);

  return (
    <ThemeProvider theme={customMuiTheme}>
      <div>
        <Header />

        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} fallbackRender={FallbackRender}>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/news/:blogAlias" element={<BlogDetail />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/network-error" element={<NetworkError />} />
                  </Route>
                </Routes>
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;
