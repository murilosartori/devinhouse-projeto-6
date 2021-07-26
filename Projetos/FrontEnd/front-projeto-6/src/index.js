import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { keycloak } from './auth';

// let initOptions = {
//   url: 'https://training.dev.delivery/auth', realm: 'murilo', clientId: 'projeto6-front', onLoad: 'login-required'
// }
// let keycloak = Keycloak(initOptions);

// keycloak.init({ onLoad: 'login-required' }).success((auth) => {
//   if (!auth) {
//     window.location.reload();
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
