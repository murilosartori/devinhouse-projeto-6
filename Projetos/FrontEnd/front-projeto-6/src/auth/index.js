import Keycloak from 'keycloak-js';

const keycloakJson = JSON.parse(process.env.REACT_APP_KEYCLOAK);

export const keycloak = Keycloak({
    url: keycloakJson['auth-server-url'],
    realm: keycloakJson['realm'],
    clientId: keycloakJson['resource'],
    onLoad: 'login-required'
});
