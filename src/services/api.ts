import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';
export async function getAllImage() {
	try {
		const response = await axios.get(`${URL}/photos?_limit=5`, {
			timeout: 5000, // вдруг зависает
		});
		return response.data ?? [];
	} catch (err) {
		console.error('Ошибка при загрузке картинок:', err);
		return [];
	}
}
// export type TGetAllImage = ReturnType<Awaited<typeof getAllImage>>
