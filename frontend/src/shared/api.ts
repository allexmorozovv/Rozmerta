export const getImageUrl = (imageUrl: string) => {
	return `${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrl}`;
};

export const getGallaryImageUrls = (imageUrls: string[]) => {
	return imageUrls.map(
		(el: string) => `${process.env.NEXT_PUBLIC_IMAGE_URL}${el}`,
	);
};

export async function getData(path: string, query: string) {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;

	const url = new URL(path, baseUrl);
	url.search = query;

	const res = await fetch(url.href);
	if (!res.ok) throw new Error("Failed to fetch data");
	const data = await res.json();
	return data;
}
