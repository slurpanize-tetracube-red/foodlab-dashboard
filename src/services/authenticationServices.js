import { foodhouseConfiguration } from "../FoodhouseConfiduration";
import Keycloak from "keycloak-js";

function initializeAuthService() {
    const initOptions = {
        url: `${foodhouseConfiguration.apiBaseUrl}/auth`,
        realm: 'slurpanize',
        clientId: 'foodhouse-dashboard-web',
    }

    let keycloak = Keycloak(initOptions);
    keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
        if (!auth) {
            window.location.reload();
        } else {
            console.debug("Authenticated");
            console.debug(auth);
        }
    });
}

export {
    initializeAuthService
};