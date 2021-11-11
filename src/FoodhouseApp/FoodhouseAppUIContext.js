import { createContext } from "react";

export const FoodhouseAppUIContext = createContext({
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