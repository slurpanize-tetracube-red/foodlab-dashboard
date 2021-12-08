import axios from "axios";
import { foodlabConfiguration } from "../FoodlabConfiguration";

async function fetchFoodlabSetupStatus() {
    const url = `${foodlabConfiguration.apiBaseUrl}/foodlab-api/foodlab/setup/status`;
    const setupStatusResponse = await axios.get(url);
    return setupStatusResponse.data
}

async function saveFoodlab(formData) {
    const url = `${foodlabConfiguration.apiBaseUrl}/foodlab-api/foodlab/setup/create`;
    const setupStatusResponse = await axios.post(url, formData);
    return setupStatusResponse.data
}

export {
    fetchFoodlabSetupStatus,
    saveFoodlab
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