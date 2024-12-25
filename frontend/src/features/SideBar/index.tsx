"use client";

import { type CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
} from "react-icons/hi";

interface IProps {
	categories: string[];
	onSelectCategory: (category: string) => void;
}

export function SideBar({ categories, onSelectCategory }: IProps) {
	const customTheme: CustomFlowbiteTheme["sidebar"] = {
		root: {
			base: "bg-bg-color",
			inner: "bg-bg-color",
		},
		item: {
			base: "bg-bg-color ",
		},
		collapse: {
			button: "p-0 hover:bg-bg-color",
			label: {
				icon: {
					base: "hidden",
				},
			},
		},
	};
	return (
		<div>
			<ul>
				{categories.map((category) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<li key={category} onClick={() => onSelectCategory(category)}>
						{category}
					</li>
				))}
			</ul>
			{/* <Sidebar theme={customTheme}>
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						<Sidebar.Item href="#">Салаты и закуски</Sidebar.Item>
						<Sidebar.Item href="#">Паста</Sidebar.Item>
						<Sidebar.Item href="#">Пицца</Sidebar.Item>
						<Sidebar.Item href="#">Супы и хлеб</Sidebar.Item>
						<Sidebar.Collapse label="Горячие блюда">
							<Sidebar.Item href="#">Рыба</Sidebar.Item>
							<Sidebar.Item href="#">Мясо</Sidebar.Item>
						</Sidebar.Collapse>
						<Sidebar.Item href="#">Гарниры и соусы</Sidebar.Item>
						<Sidebar.Item href="#">Десерты</Sidebar.Item>
						<Sidebar.Item href="#">Напитки</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar> */}
		</div>
	);
}
