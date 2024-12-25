import Link from "next/link";
import qs from "qs";
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import SelectLaguage from "@/src/features/SelectLanguage";
import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";
import { getData, getImageUrl } from "@/src/shared/api";
import type { IHeader } from "@/src/shared/types";

const Header = async () => {
	noStore();
	const queryHeader = qs.stringify({
		populate: {
			header: {
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
					address: {
						populate: true,
					},
					workTime: {
						populate: true,
					},
					headerImage: {
						fields: ["alternativeText", "name", "url"],
					},
				},
			},
		},
	});

	const data = await getData("api/global", queryHeader);
	const headerData: IHeader = data.data.header;

	const logoImageUrl = getImageUrl(headerData.logoLink.image.url);
	const headerImageUrl = getImageUrl(headerData.headerImage.url);

	return (
		<Navbar fluid rounded className="bg-bg-color pt-6">
			<div className="w-full">
				<div className="flex justify-between  flex-col gap-2 md:flex-row">
					<NavbarBrand className="" as={Link} href="/">
						<Image
							src={logoImageUrl}
							width={220}
							height={80}
							alt={headerData.logoLink.image.name}
						/>
					</NavbarBrand>
					<div className="flex items-start ">
						<Image
							src={headerImageUrl}
							width={50}
							height={40}
							alt={headerData.headerImage.name}
						/>
						<span className="font-great text-26 text-b-text-color">
							{headerData.address.text}
						</span>
					</div>
					<div className="flex gap-14 items-start">
						<span className="font-great text-26 text-b-text-color">
							{headerData.workTime.text}
						</span>
						<SelectLaguage />
					</div>
				</div>
				<div className="flex  justify-center pt-2 pb-4">
					<img src="/images/separator.svg" alt="sep" />
				</div>
				<NavbarToggle />
				<NavbarCollapse>
					<div className="flex justify-around  w-full font-roboto font-extrabold text-22 leading-7">
						{headerData.links.map((link) => {
							return (
								<NavbarLink key={link.id} href={link.slug}>
									{link.text}
								</NavbarLink>
							);
						})}
					</div>
				</NavbarCollapse>
			</div>
		</Navbar>
	);
};

export default Header;
