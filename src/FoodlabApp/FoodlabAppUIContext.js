import { createContext } from "react";

export const FoodlabAppUIContext = createContext({
    showFetchingBackdrop: false,
    setFetchingBackdrop: () => {
    },
    fetchErrorMessage: {
        visible: false,
        title: null,
        description: null
    },
    setFetchErrorMessage: () => {

    }
})