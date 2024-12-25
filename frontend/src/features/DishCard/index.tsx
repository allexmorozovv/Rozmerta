import React from "react";
interface IProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	item: any;
	// description: string;
	// price: number;
}
const DishCard = ({ item }: IProps) => {
	console.log("item", item);

	return (
		<div>
			{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
			{item.map((el: any) => {
				return (
					<div key={el.id}>
						<h3>{el.title}</h3>
					</div>
				);
			})}
		</div>
	);
};

export default DishCard;
