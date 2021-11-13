import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFoodhouseSetupStatus } from "../services/foodhouseServices";

function useFoodhouseInit() {

    const [ shouldInitialized, setShouldInitialized ] = useState(false);
    const [ adminInitialized, setAdminInitialized ] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        fetchFoodhouseSetupStatus()
            .then(foodhouseSetupStatus => {
                const {setupCompleted} = foodhouseSetupStatus;
                setShouldInitialized(!setupCompleted);
            });
    }, []);

    useEffect(() => {
        if (shouldInitialized) {
            navigation('/setup/general-setup')
        } else if (!adminInitialized) {
            navigation('/users/create')
        } else {
            navigation('/')
        }
    }, [ navigation, shouldInitialized, adminInitialized ]);

    useEffect(() => {
    }, []);

    return {
        shouldInitialized,
        setShouldInitialized,
        adminInitialized
    };
}

function useUserAuthenticated(shouldInitialized, adminInitialized) {

    const [ userIsAuthenticated, setUserAuthenticated ] = useState(false);
    const navigation = useNavigate();

    const redirectUser = useCallback(() => {
        if (shouldInitialized || !adminInitialized) {
            return;
        }

        if (!userIsAuthenticated) {
            navigation('/user/login');
        } else {
            navigation('/');
        }
    }, [ navigation, shouldInitialized, userIsAuthenticated, adminInitialized ]);

    useEffect(() => {
        const authToken = window.localStorage.getItem('auth-token');
        setUserAuthenticated(authToken !== null && authToken.trim() !== '');

    }, []);

    useEffect(() => {
        redirectUser();
    }, [ redirectUser ]);

    return {
        userIsAuthenticated
    };
}

function useUIStateManagement() {
    const [ showFetchingBackdrop, setFetchingBackdrop ] = useState(false);
    const [ fetchErrorMessage, setFetchErrorMessage ] = useState({
        visible: false,
        title: null,
        description: null
    });

    return {
        showFetchingBackdrop,
        setFetchingBackdrop,
        fetchErrorMessage,
        setFetchErrorMessage
    };
}

export {
    useFoodhouseInit,
    useUserAuthenticated,
    useUIStateManagement
}