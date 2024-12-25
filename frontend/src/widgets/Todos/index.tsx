import React from "react";
import qs from "qs";
import Image from "next/image";
import { Card, HR } from "flowbite-react";

interface ITodos {
	id: number;
	documentId: string;
	title: string;
	date: string;
	priority: string;
	done: boolean;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface IPhoto {
	id: number;
	documentId: string;
	alternativeText: null;
	name: string;
	url: string;
}

interface IDishCard {
	id: number;
	documentId: string;
	title: string;
	description: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	price: string;
	photo: IPhoto;
}

async function getresDish() {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;
	const path = "api/dish-cards";
	const url = new URL(path, baseUrl);
	// console.log("baseuRL", baseUrl);
	// console.log("path", path);
	// console.log("url", url);
	url.search = qs.stringify({
		populate: {
			photo: {
				fields: ["alternativeText", "name", "url"],
			},
		},
	});

	const res = await fetch(url.href);
	// console.log("url", url.href);

	if (!res.ok) throw new Error("Failed to fetch team members");

	const data = await res.json();

	return data;
}

const Todos = async () => {
	const responce = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
	const data = await responce.json();
	const todos: ITodos[] = data.data;

	// const resDish = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dish-cards`);
	// const dataDish = await resDish.json();
	// const dishes: IDishCard[] = dataDish.data;
	// console.log("dishes", dishes);

	const res = await getresDish();
	const dishes: IDishCard[] = res.data;
	// console.log("dishes", res.data);

	if (!todos) return <div>Loading....</div>;
	if (!dishes) return <div>Loading....</div>;
	return (
		<div>
			{/* <h3 className="text-3xl font-great ">Hello world!</h3>
			<h3 className="text-3xl font-greatVb ">Hello world!</h3> */}
			<ul>
				{dishes.map((el) => {
					const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}${el.photo.url}`;

					// console.log("imageUrl", imageUrl);

					return (
						<div key={el.id}>
							<Card href="#" className="max-w-sm">
								<Image
									src={imageUrl}
									width={400}
									height={300}
									alt={"картинка блюда "}
								/>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{el.title}
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{el.description}
								</p>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{el.price}
								</p>
							</Card>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default Todos;
