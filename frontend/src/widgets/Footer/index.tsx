import {
	Footer,
	FooterBrand,
	FooterCopyright,
	FooterLink,
	FooterLinkGroup,
} from "flowbite-react";
import qs from "qs";
import Image from "next/image";
import { getData, getImageUrl } from "@/src/shared/api";
import type { IFooter } from "@/src/shared/types";

export const FooterComp = async () => {
	const queryFooter = qs.stringify({
		populate: {
			footer: {
				populate: {
					logoLink: {
						populate: {
							image: {
								fields: ["alternativeText", "name", "url"],
							},
						},
					},
					links: {
						populate: true,
					},
					phoneNumber: {
						populate: true,
					},
					privacyPolicy: {
						populate: true,
					},
				},
			},
		},
	});
	const query = {
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
	};
	const data = await getData("api/global", queryFooter);
	const footerData: IFooter = data.data.footer;

	const logoImageUrl = getImageUrl(footerData.logoLink.image.url);

	return (
		<Footer className=" shadow-none bg-bg-color" container>
			<div className="w-full  ">
				<div className=" flex justify-between  ">
					<div>
						<FooterBrand src="" href="/">
							<Image
								src={logoImageUrl}
								width={190}
								height={70}
								alt={footerData.logoLink.image.name}
							/>
						</FooterBrand>
					</div>

					<div>
						<FooterLinkGroup>
							<div className=" flex flex-col gap-2 font-vollkorn font-bold text-18 text-b-text-color">
								{footerData.links.map((link) => {
									return (
										<FooterLink key={link.id} href={link.href}>
											{link.text}
										</FooterLink>
									);
								})}
							</div>
						</FooterLinkGroup>
					</div>
					<div className="font-vollkorn font-bold text-b-text-color">
						{footerData.phoneNumber.text}
					</div>
				</div>
				<div className="w-full flex pt-6  text-b-text-color">
					<FooterCopyright
						href="#"
						by={footerData.privacyPolicy.text}
						className="text-left"
					/>
				</div>
			</div>
		</Footer>
	);
};
