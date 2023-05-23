import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCaretDown,
	faPuzzlePiece,
	faPeopleGroup,
	faTrophy,
	faStarHalfStroke,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { auth_service } from "../../services/auth.service";

const Navbar = () => {
	const [state, setState] = useState(false);
	const [profileDropdownState, setProfileDropdownState] = useState(false);
	const profileRef = useRef();
	const logo = process.env.PUBLIC_URL + "/logo.png";

	const navigation = [
		{ title: "Équipes", path: "#", icon: faPeopleGroup },
		{ title: "Compétitions", path: "/competitions", icon: faTrophy },
		{ title: "Suivis", path: "#", icon: faStarHalfStroke },
		{ title: "Mini-jeux", path: "#", icon: faPuzzlePiece },
	];
	const profileNavigation = [
		{ title: "Profil", path: "/profile" },
		{ title: "Déconnexion", path: "/logout" },
	];
	const isAuthenticated = auth_service.is_logged();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (profileRef.current && !profileRef.current.contains(e.target)) {
				setProfileDropdownState(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const userDisplayName = "Nom utilisateur";
	const userPoints = "points";

	return (
		<nav
			className={`bg-gray-200 border-b border-cyan-950 md:text-md lg:text-lg ${
				state
					? "shadow-lg border md:shadow-none md:border-none md:mx-2 md:mt-0"
					: ""
			} w-full top-0 z-50`}
		>
			<div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
				<div className="flex items-center justify-between py-5 md:block">
					<a href="/">
						<img src={logo} width={70} alt="LGM logo" />
					</a>
					<div className="md:hidden">
						<button
							className="menu-btn text-gray-500 hover:text-blue-500"
							onClick={() => setState(!state)}
						>
							{state ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 items-center pb-3 md:mt-0 md:flex ${
						state ? "block" : "hidden"
					}`}
				>
					<ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
						{navigation.map((item, idx) => {
							return (
								<li
									key={idx}
									className="text-gray-700 hover:text-gray-900"
								>
									<a href={item.path} className="block">
										<FontAwesomeIcon
											icon={item.icon}
											className="hidden md:inline"
										/>
										<span className="ml-1">{item.title}</span>
									</a>
								</li>
							);
						})}
					</ul>

					<div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
						{isAuthenticated ? (
							<div ref={profileRef} className="relative">
								<button
									onClick={() =>
										setProfileDropdownState(!profileDropdownState)
									}
									className="flex items-center text-gray-700 hover:text-gray-900"
								>
									{userDisplayName} - {userPoints}
									<FontAwesomeIcon
										icon={faCaretDown}
										className="ml-2"
									/>
								</button>
								{profileDropdownState && (
									<ul className="absolute bg-white mt-2 rounded-md shadow-md py-1 text-gray-700 z-50">
										{profileNavigation.map((item, idx) => (
											<li key={idx}>
												<Link
													to={item.path}
													onClick={() =>
														setProfileDropdownState(false)
													}
													className="block px-4 py-2 hover:bg-gray-200"
												>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								)}
							</div>
						) : (
							<>
								<Link
									to="/signin"
									className="flex items-center text-gray-700 hover:text-gray-900"
								>
									<FontAwesomeIcon
										className="pr-1"
										icon={faUserPlus}
									/>
									Inscription
								</Link>
								<Link
									to="/login"
									className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-cyan-900 hover:bg-cyan-800 rounded-full"
								>
									<FontAwesomeIcon icon={faUserPlus} />
									Connexion
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
