import { Route, Routes } from "react-router-dom";
import FoodhouseGeneralSetup from "./FoodhouseInitializer/FoodhouseGeneralSetup";
import Dashboard from "./Dashboard/Dashboard";
import { useFoodhouseInit, useUIStateManagement, useUserAuthenticated } from "./FoodhouseApp/FoodhouseAppHooks";
import { FoodhouseAppUIContext } from "./FoodhouseApp/FoodhouseAppUIContext";
import { Alert, AlertTitle, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { theme } from "./FoodhouseConfiduration";
import { ThemeProvider } from "@emotion/react";

function FoodhouseDashboardApp() {

    const shouldInitialized = useFoodhouseInit()
    useUserAuthenticated(shouldInitialized)
    const uiStateManagement = useUIStateManagement();

    return (
        <ThemeProvider theme={theme}>
            <FoodhouseAppUIContext.Provider value={uiStateManagement}>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={uiStateManagement.showFetchingBackdrop}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>

                <Snackbar
                    onClose={() => uiStateManagement.setFetchErrorMessage({
                        visible: false,
                        title: null,
                        description: null
                    })}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={uiStateManagement.fetchErrorMessage.visible}>
                    <Alert severity="error">
                        <AlertTitle>{uiStateManagement.fetchErrorMessage.title}</AlertTitle>
                        {uiStateManagement.fetchErrorMessage.description} — <strong>check it out!</strong>
                    </Alert>
                </Snackbar>

                <Routes>
                    <Route path={'/'} element={<Dashboard/>}/>
                    <Route path={'/setup'}>
                        <Route path={'general-setup'} element={<FoodhouseGeneralSetup/>}/>
                    </Route>
                    <Route path={'/user'}>
                        <Route path={'login'} element={<h1>Login page</h1>}/>
                    </Route>
                </Routes>
            </FoodhouseAppUIContext.Provider>
        </ThemeProvider>
    );
}

export default FoodhouseDashboardApp;
