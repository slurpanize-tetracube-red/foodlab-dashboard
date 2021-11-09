import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useFoodhouseInit() {

    const [ shouldInitialized, setShouldInitialized ] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        if (shouldInitialized) {
            navigation('/setup/general-setup')
        } else {
            navigation('/')
        }
    }, [ navigation, shouldInitialized ]);

    useEffect(() => {
    }, []);

    return {
        shouldInitialized
    };
}

function useUserAuthenticated(shouldInitialized) {

    const [ userIsAuthenticated, setUserAuthenticated ] = useState(false);
    const navigation = useNavigate();

    const redirectUser = useCallback(() => {
        if (shouldInitialized.shouldInitialized) {
            return;
        }

        if (!userIsAuthenticated) {
            navigation('/user/login');
        } else {
            navigation('/');
        }
    }, [navigation, shouldInitialized.shouldInitialized, userIsAuthenticated]);

    useEffect(() => {
        const authToken = window.localStorage.getItem('auth-token');
        setUserAuthenticated(authToken !== null && authToken.trim() !== '');

    }, []);

    useEffect(() => {
        redirectUser();
    }, [redirectUser, userIsAuthenticated]);

    return {
        userIsAuthenticated
    };
}

export {
    useFoodhouseInit,
    useUserAuthenticated
}