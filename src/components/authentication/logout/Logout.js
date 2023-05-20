import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {auth_service} from "../../../services/auth.service";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        auth_service.logout();
        navigate("/");
    })

    return (
        <div>
        </div>
    );
};

export default Logout;