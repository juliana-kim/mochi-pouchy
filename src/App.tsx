import {Global} from "@emotion/react";
import {globalStyles} from "@styles/global.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Suspense} from "react";

import ReactQueryClientProvider from "@providers/ReactQueryClientProvider";
import GlobalErrorBoundary from "@errors/errors";
import HomePage from "@components/pages/HomePage";
import TokenPage from "@components/pages/TokenPage";
import NotFound from "@components/pages/NotFound";
import TokenDetailPage from "@components/pages/TokenDetailPage";
import NFTPage from "@components/pages/NFTPage";
import NFTDetailPage from "@components/pages/NFTDetailPage";

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
              <Route path=":ca" element={<TokenDetailPage />}/>
            </Route>
            <Route path="nft">
              <Route index element={<NFTPage />} />
              <Route path=":ca" element={<NFTDetailPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalErrorBoundary>
      </BrowserRouter>
    </ReactQueryClientProvider>

  )
}

export default App
