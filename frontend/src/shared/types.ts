interface IImage {
	id: number;
	documentId: string;
	alternativeText: null;
	name: string;
	url: string;
}

interface ILink {
	id: number;
	href: string;
	text: string;
	external: boolean;
	slug: string;
}

interface ILogo {
	id: number;
	text: string;
	href: string;
	image: IImage;
}

interface IText {
	id: number;
	text: string;
}

export interface IHeader {
	id: number;
	logoLink: ILogo;
	links: ILink[];
	address: IText;
	workTime: IText;
	headerImage: IImage;
}
export interface IFooter {
	id: number;
	logoLink: ILogo;
	links: ILink[];
	phoneNumber: IText;
	privacyPolicy: ILink;
}

export interface IMainPageItem {
	id: number;
	documentId: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	image: IImage;
}

export interface IMainPage {
	data: IMainPageItem[];
}
