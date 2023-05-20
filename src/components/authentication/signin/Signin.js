import React, {useState} from "react";
import {auth_service} from "../../../services/auth.service";
import {useNavigate} from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const logo = process.env.PUBLIC_URL + "/logo.png";

    const [credentials, setCredentials] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
    });

    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();

        auth_service.register(credentials)
            .then(response => {
                auth_service.save_token(response.data.accessToken);
                navigate("/login");
            })
            .catch(err => console.log(err))
    }

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <a href="/">
                        <img src={logo} width={150} className="mx-auto" alt="logo"/>
                    </a>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                            Créer un compte
                        </h3>
                        <p className="">
                            Vous avez déjà un compte ?
                            <a
                                href="/login"
                                className="font-medium text-cyan-950 hover:text-cyan-800 pl-1"
                            >
                                Connectez-vous
                            </a>
                        </p>
                    </div>
                </div>
                <div className="shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="flex space-x-4">
                            <div>
                                <label className="font-medium">Prénom</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChanges}
                                    value={credentials.firstName}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-950 shadow-sm rounded-lg"
                                    autoComplete="given-name" // Ajout de l'attribut autocomplete pour le prénom
                                />
                            </div>
                            <div>
                                <label className="font-medium">Nom</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChanges}
                                    value={credentials.lastName}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-950 shadow-sm rounded-lg"
                                    autoComplete="family-name" // Ajout de l'attribut autocomplete pour le nom
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChanges}
                                value={credentials.email}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-950 shadow-sm rounded-lg"
                                autoComplete="email" // Ajout de l'attribut autocomplete pour l'email
                            />
                        </div>
                        <div>
                            <label className="font-medium">Mot de passe</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChanges}
                                value={credentials.password}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-950 shadow-sm rounded-lg"
                                autoComplete="current-password" // Ajout de l'attribut autocomplete pour le mot de passe
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-cyan-950 hover:bg-cyan-800 active:bg-cyan-950 rounded-lg duration-150">
                            Créer un compte
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Signin;
