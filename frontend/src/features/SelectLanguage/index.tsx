import React from "react";

const SelectLaguage = () => {
	return (
		<div>
			<form className="max-w-sm mx-auto">
				<select
					id="languages"
					className=" font-roboto  bg-bg-color  text-gray-900 text-22 border-transparent focus:border-transparent focus:ring-0    w-full p-2.5"
				>
					<option value="RU">Ru</option>
					<option value="Md">Md</option>
					<option value="En">En</option>
				</select>
			</form>
		</div>
	);
};

export default SelectLaguage;
