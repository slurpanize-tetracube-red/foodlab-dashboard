import { foodhouseConfiguration } from "../FoodhouseConfiguration";
import axios from "axios";

async function fetchFoodhouseSetupStatus() {
    const url = `${foodhouseConfiguration.apiBaseUrl}/foodhouse/setup/status`;
    const setupStatusResponse = await axios.get(url);
    return setupStatusResponse.data
}

export {
    fetchFoodhouseSetupStatus
};