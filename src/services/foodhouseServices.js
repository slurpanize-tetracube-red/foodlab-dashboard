import axios from "axios";
import { foodhouseConfiguration } from "../FoodhouseConfiduration";

async function fetchFoodhouseSetupStatus() {
    const url = `${foodhouseConfiguration.apiBaseUrl}/foodhouse-api/foodhouse/setup/status`;
    const setupStatusResponse = await axios.get(url);
    return setupStatusResponse.data
}

async function saveFoodhouse(formData) {
    const url = `${foodhouseConfiguration.apiBaseUrl}/foodhouse-api/foodhouse/setup/create`;
    const setupStatusResponse = await axios.post(url, formData);
    return setupStatusResponse.data
}

export {
    fetchFoodhouseSetupStatus,
    saveFoodhouse
};

/*

    const formFields = new FormData();
    formFields.append('name', formData.name);
    formFields.append('logo', formData.logo);
    const config = {
        headers: {
            'content-type': 'appl'
        }
    }
 */