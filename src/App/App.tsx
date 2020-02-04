import React from "react";
import "braid-design-system/reset";
import { BraidLoadableProvider } from "braid-design-system";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import AdJob from "./pages/AddJob"
import { AdsProvider } from "./providers/AdsProvider";

interface AppProps {
  site: string;
}


export default ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <AdsProvider>
        <Router>
          <AdJob path="/addjob" />
          <Home default path="/" />
        </Router>
    </AdsProvider>
  </BraidLoadableProvider>
);
