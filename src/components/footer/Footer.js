import React from "react";

const Footer = () => {
	const footerNavs = [
		{
			href: "/teams",
			name: "Équipes",
		},
		{
			href: "/competitions",
			name: "Compétitions",
		},
		{
			href: "/favorite",
			name: "Suivis",
		},
		{
			href: "/games",
			name: "Mini-jeux",
		},
	];

	const logo = process.env.PUBLIC_URL + "/logo.png";

	return (
		<footer className="mt-6 pt-6 border-t border-cyan-950">
			<div className="max-w-screen-screen mx-auto px-4 text-gray-600 md:px-8">
				<div className="pb-4 border-t items-center justify-between sm:flex">
					<p className="text-lg">
						© 2023 LGM Group. Tous droits réservés.
					</p>
					<img src={logo} className="h-16 sm:mx-auto" alt="logo" />
					<ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-lg sm:mt-0">
						{footerNavs.map((item, index) => (
							<li
								className="text-gray-800 hover:text-gray-500 duration-150"
								key={index}
							>
								<a href={item.href}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
