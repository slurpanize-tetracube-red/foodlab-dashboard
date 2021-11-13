import { useEffect } from "react";
import { initializeAuthService } from "../../services/authenticationServices";

function CreateUser() {

    useEffect(() => {
        initializeAuthService()
    }, [])

    return(
        <h1>Create User</h1>
    );
}

export default CreateUser;