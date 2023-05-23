import React from "react";
import ComplistTable from "./ComplistTable";
import Filter from "./Filter";

const Complist = () => {
	const tableItems = [
		{
			avatar:
				"https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
			name: "Liam James",
			email: "liamjames@example.com",
			phone_nimber: "+1 (555) 000-000",
			position: "Software engineer",
			salary: "$100K",
		},
		{
			avatar: "https://randomuser.me/api/portraits/men/86.jpg",
			name: "Olivia Emma",
			email: "oliviaemma@example.com",
			phone_nimber: "+1 (555) 000-000",
			position: "Product designer",
			salary: "$90K",
		},
		{
			avatar: "https://randomuser.me/api/portraits/women/79.jpg",
			name: "William Benjamin",
			email: "william.benjamin@example.com",
			phone_nimber: "+1 (555) 000-000",
			position: "Front-end developer",
			salary: "$80K",
		},
		{
			avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
			name: "Henry Theodore",
			email: "henrytheodore@example.com",
			phone_nimber: "+1 (555) 000-000",
			position: "Laravel engineer",
			salary: "$120K",
		},
		{
			avatar:
				"https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
			name: "Amelia Elijah",
			email: "amelia.elijah@example.com",
			phone_nimber: "+1 (555) 000-000",
			position: "Open source manager",
			salary: "$75K",
		},
	];
	return (
		<div className="flex flex-col m-auto w-[70%] mt-6">
			<h2 className="text-gray-800 font-bold text-4xl">Compétitions</h2>
			<div className="flex justify-center px-4 pb-4 gap-x-[5vh] ">
				<ComplistTable tableItems={tableItems} />
                <Filter />
			</div>
		</div>
	);
};

export default Complist;
