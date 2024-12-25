"use client";
import DishCard from "@/src/features/DishCard";
import { SideBar } from "@/src/features/SideBar";
import { getData } from "@/src/shared/api";
import qs from "qs";
import React, { useEffect, useState } from "react";

interface IMenuItem {
	name: string;
	description: string;
	price: number;
}

interface MenuDataType {
	[category: string]: IMenuItem[];
}

const menuData: MenuDataType = {
	Салаты: [
		{ name: "Цезарь", description: "Классический салат с курицей", price: 350 },
		{ name: "Греческий", description: "Салат с оливками и фетой", price: 300 },
		{
			name: "Капрезе",
			description: "Салат с моцареллой и помидорами",
			price: 320,
		},
	],
	"Горячие блюда": [
		{
			name: "Стейк",
			description: "Говяжий стейк средней прожарки",
			price: 1200,
		},
		{ name: "Паста", description: "Паста с томатным соусом", price: 450 },
		{ name: "Ризотто", description: "Ризотто с грибами", price: 500 },
	],
	Напитки: [
		{ name: "Кофе", description: "Свежесваренный кофе", price: 150 },
		{ name: "Чай", description: "Зеленый чай", price: 100 },
		{ name: "Сок", description: "Свежевыжатый сок", price: 200 },
	],
};

const MenuPage = () => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [menuData, setMenuData] = useState<any>();
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [menuCat, setMenuCat] = useState<any>();
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const queryMenu = qs.stringify({
			populate: {
				category: {
					populate: {
						card: {
							populate: {
								image: {
									fields: ["alternativeText", "name", "url"],
								},
							},
						},
					},
				},
			},
		});
		const fetchMenuData = async () => {
			try {
				const response = await getData("api/sidebar", queryMenu);
				const data = response.data;
				// console.log("data", data);
				const category = data.category;
				const card = data.category[0].card;
				// console.log("categories", category);
				// console.log("card", card);
				setMenuData(category);
				setSelectedCategory(category[0].title);
				console.log(category);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchMenuData();
	}, []);
	if (menuData !== undefined) {
		console.log("menudata", menuData);
	}

	if (loading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error}</div>;
	// if (selectedCategory === null) return <div>'nuul</div>;
	return (
		<div className="flex gap-8 bg-bg-color">
			<SideBar
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				categories={menuData.map((el: any) => el.title)}
				onSelectCategory={setSelectedCategory}
			/>

			{selectedCategory &&
				menuData
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					.filter((el: any) => el.title === selectedCategory)
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					.map((item: any) => <DishCard key={item.id} item={item.card} />)}
		</div>
	);
};

export default MenuPage;
