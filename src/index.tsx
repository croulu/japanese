import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './component/App';

// TODO composant externe à enlever
import '@fortawesome/fontawesome-free/js/all.js'

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
    <App />
);
