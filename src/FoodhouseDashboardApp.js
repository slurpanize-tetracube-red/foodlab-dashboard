import { Route, Routes } from "react-router-dom";
import App from "./App";
import { useFoodhouseInit, useUserAuthenticated } from "./FoodhouseApp/FoodhouseAppHooks";
import FoodhouseGeneralSetup from "./FoodhouseInitializer/FoodhouseGeneralSetup";

function FoodhouseDashboardApp() {

    const shouldInitialized = useFoodhouseInit();
    useUserAuthenticated(shouldInitialized);

    return (
        <Routes>
            <Route path={'/'} element={<App/>}/>
            <Route path={'/setup'}>
                <Route path={'general-setup'} element={<FoodhouseGeneralSetup/>}/>
            </Route>
            <Route path={'/user'}>
                <Route path={'login'} element={<h1>Login page</h1>}/>
            </Route>
        </Routes>
    );
}

export default FoodhouseDashboardApp;
