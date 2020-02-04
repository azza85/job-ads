import React from 'react';
import 'braid-design-system/reset';
import { BraidLoadableProvider } from 'braid-design-system';

import { Router, Link } from "@reach/router"
import NextSteps from './NextSteps';

interface AppProps {
  site: string;
}

let Home = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="dashboard">Dashboard</Link>
    </nav>
    <NextSteps />
  </div>
)
let Dash = () => <div>Dash</div>

export default ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <Router>
    <Home path="/" />
    <Dash path="dashboard" />
      </Router>
  </BraidLoadableProvider>
);
