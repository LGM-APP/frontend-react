import React from "react";

const Signin = () => {
  const logo = process.env.PUBLIC_URL + "/logo.png";
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <a href="/">
            <img src={logo} width={150} className="mx-auto" alt="logo" />
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
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="flex space-x-4">
              <div>
                <label className="font-medium">Prénom</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-950 shadow-sm rounded-lg"
                  autoComplete="given-name" // Ajout de l'attribut autocomplete pour le prénom
                />
              </div>
              <div>
                <label className="font-medium">Nom</label>
                <input
                  type="text"
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
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-950 shadow-sm rounded-lg"
                autoComplete="email" // Ajout de l'attribut autocomplete pour l'email
              />
            </div>
            <div>
              <label className="font-medium">Mot de passe</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-950 shadow-sm rounded-lg"
                autoComplete="current-password" // Ajout de l'attribut autocomplete pour le mot de passe
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-cyan-950 hover:bg-cyan-800 active:bg-cyan-950 rounded-lg duration-150">
              Créer un compte
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signin;
