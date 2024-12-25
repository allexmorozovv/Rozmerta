import MenuPage from "@/src/widgets/MenuPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Menu | Rozmerta",
	description: "Menu of Restaurant Rozmerta",
};

const Menu = () => {
	return (
		<div>
			<MenuPage />
		</div>
	);
};

export default Menu;
