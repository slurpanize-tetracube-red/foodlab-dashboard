import { useContext, useState } from "react";
import { saveFoodlab } from "../services/foodlabServices";
import { FoodlabAppUIContext } from "../FoodlabApp/FoodlabAppUIContext";

function useFoodlabGeneralSetup() {

    const [ foodlabName, setFoodlabName ] = useState('');
    const [ foodlabDescription, setFoodlabDescription ] = useState('');
    const {
        setFetchingBackdrop,
        setFetchErrorMessage
    } = useContext(FoodlabAppUIContext);

    const updateName = (event) => {
        const name = event.target.value;
        setFoodlabName(name);
    };

    const updateDescription = (event) => {
        const description = event.target.value;
        setFoodlabDescription(description);
    };

    const submitForm = (event, whenFoodlabSetupCompletedFn) => {
        event.preventDefault();
        const formData = {
            name: foodlabName,
            description: foodlabDescription
        }
        setFetchingBackdrop(true);
        saveFoodlab(formData)
            .then(response => {
                setFetchingBackdrop(false);
                whenFoodlabSetupCompletedFn(false);
                window.localStorage.setItem('createdFoodlab', JSON.stringify(response));
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    setFetchErrorMessage({
                       visible: true,
                       title: 'Validation Error',
                       description: 'There is some field that is not valid'
                    });
                    setFetchingBackdrop(false);
                } else  if (error.response && error.response.status === 409) {
                    setFetchErrorMessage({
                        visible: true,
                        title: 'Foodlab exists',
                        description: 'You have already created your foodlab, now it\'s time to customize it'
                    });
                    setFetchingBackdrop(false);
                }
            });
    };

    return {
        foodlabName,
        updateName,
        updateDescription,
        submitForm
    }
}

export {
    useFoodlabGeneralSetup
}