import React from "react";
import Image from "next/image";
import qs from "qs";
import { getData, getGallaryImageUrls } from "@/src/shared/api";
import type { IMainPage } from "@/src/shared/types";

const MainGallary = async () => {
	const queryMainPage = qs.stringify({
		populate: {
			image: {
				fields: ["alternativeText", "name", "url"],
			},
		},
	});

	const data: IMainPage = await getData("api/hero-photos", queryMainPage);
	const imagesUrls = data.data.map((el) => el.image.url);
	// console.log(data);

	const galleryUrls = getGallaryImageUrls(imagesUrls);

	return (
		<div className="pt-3">
			<div className="grid grid-cols-2 grid-rows-15 gap-3">
				<div className="  row-span-3 ">
					<Image src={galleryUrls[0]} width={672} height={760} alt={""} />
				</div>
				<div className=" row-span-2">
					<Image
						className=" min-h-full"
						src={galleryUrls[1]}
						width={672}
						height={480}
						alt={""}
					/>
				</div>
				<div className="row-span-2 col-start-2 row-start-3">
					<Image
						className=" min-h-full"
						src={galleryUrls[2]}
						width={672}
						height={480}
						alt={""}
					/>
				</div>
				<div className="row-span-2 row-start-4 ">
					<Image
						className=" min-h-full"
						src={galleryUrls[3]}
						width={672}
						height={480}
						alt={""}
					/>
				</div>
				<div className="row-span-3 col-start-2 row-start-5 ">
					<Image
						className=" min-h-full"
						src={galleryUrls[4]}
						width={672}
						height={760}
						alt={""}
					/>
				</div>
				<div className="row-span-2 row-start-6 ">
					<Image
						className=" min-h-full"
						src={galleryUrls[5]}
						width={672}
						height={760}
						alt={""}
					/>
					{/* <img className=" min-h-full" src="/images/image_6.svg" alt="" /> */}
				</div>
				<div className="row-span-3 row-start-8 ">
					<Image
						className=" min-h-full"
						src={galleryUrls[6]}
						width={672}
						height={760}
						alt={""}
					/>
					{/* <img src="/images/image_7.svg" alt="" /> */}
				</div>
				<div className="row-span-2 row-start-8 ">
					<Image
						className=" min-h-full"
						src={galleryUrls[7]}
						width={672}
						height={480}
						alt={""}
					/>
					{/* <img className=" min-h-full" src="/images/image_8.svg" alt="" /> */}
				</div>
				<div className=" row-span-2 col-start-2 row-start-10  ">
					<Image
						className=" min-h-full"
						src={galleryUrls[8]}
						width={672}
						height={480}
						alt={""}
					/>
					{/* <img className=" min-h-full" src="/images/image_9.svg" alt="" /> */}
				</div>
			</div>
		</div>
	);
};

export default MainGallary;
