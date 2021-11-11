import { useContext, useState } from "react";
import { saveFoodhouse } from "../services/foodhouseServices";
import { FoodhouseAppUIContext } from "../FoodhouseApp/FoodhouseAppUIContext";

function useFoodhouseGeneralSetup() {

    const [ foodhouseName, setFoodhouseName ] = useState('');
    const [ foodhouseDescription, setFoodhouseDescription ] = useState('');
    const {
        setFetchingBackdrop,
        setFetchErrorMessage
    } = useContext(FoodhouseAppUIContext);

    const updateName = (event) => {
        const name = event.target.value;
        setFoodhouseName(name);
    };

    const updateDescription = (event) => {
        const description = event.target.value;
        setFoodhouseDescription(description);
    };

    const submitForm = (event) => {
        event.preventDefault();
        const formData = {
            name: foodhouseName,
            description: foodhouseDescription
        }
        setFetchingBackdrop(true);
        saveFoodhouse(formData)
            .then(() => setFetchingBackdrop(false))
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
                        title: 'Foodhouse exists',
                        description: 'You have already created your foodhouse, now it\'s time to customize it'
                    });
                    setFetchingBackdrop(false);
                }
            });
    };

    return {
        foodhouseName,
        updateName,
        updateDescription,
        submitForm
    }
}

export {
    useFoodhouseGeneralSetup
}