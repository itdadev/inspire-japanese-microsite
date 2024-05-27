import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@emotion/react";

import AppTheme from "@/theme";

import RootLayout from "@/_root/RootLayout";

import {Header} from "@/components/shared/header";
import {Home} from "@/_root/pages/home";
import {NetworkError, NotFound} from "@/_root/pages";
import {BlogDetail} from "@/_root/pages/blog";
import {LoadingScreen} from "@/components/ui/loading";
import {createTheme} from "@mui/material";
import {QueryErrorResetBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {FallbackRender} from "@/lib/react-error-boundary/FallbackRender";

function App() {
  const customMuiTheme = createTheme(AppTheme);

  return (
    <ThemeProvider theme={customMuiTheme}>
      <div>
        <Header />

        <QueryErrorResetBoundary>
          {() => (
            <ErrorBoundary fallbackRender={FallbackRender}>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  {/* NOTE: 로그인없이 접근할 수 있는 페이지 */}
                  <Route element={<RootLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/news/:blogAlias" element={<BlogDetail/>}/>
                  </Route>

                  <Route path="*" element={<NotFound/>}/>
                  <Route path="/network-error" element={<NetworkError />}/>
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
