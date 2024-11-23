import './App.css'
import ReactQueryClientProvider from "@src/providers/ReactQueryClientProvider.tsx";
import {Global} from "@emotion/react";
import {globalStyles} from "@styles/global.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Suspense} from "react";

import GlobalErrorBoundary from "@src/errors/errors.tsx";
import HomePage from "@src/components/pages/HomePage.tsx";
import TokenPage from "@src/components/pages/TokenPage.tsx";
import NotFound from "@src/components/pages/NotFound.tsx";
import TokenDetailPage from "@src/components/pages/TokenDetailPage.tsx";

function App() {

  return (
    <ReactQueryClientProvider>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <GlobalErrorBoundary>
          <Suspense fallback={<div>Loading</div>}/>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="token">
              <Route index element={<TokenPage />}/>
              <Route path={":ca"} element={<TokenDetailPage />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalErrorBoundary>
      </BrowserRouter>
    </ReactQueryClientProvider>

  )
}

export default App
