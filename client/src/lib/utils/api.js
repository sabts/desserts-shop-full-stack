const URL_BASE = 'http://localhost:3000';
const URL_API = '/api/products/';

export const showProductInWeb = async () => {
	try {
		const response = await fetch(URL_BASE + URL_API);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return data;
		} else {
			return [];
		}
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

export const updateProductsStock = async cart => {
	try {
		const response = await fetch(URL_BASE + URL_API + 'bulk-stock', {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cart)
		});

		const data = await response.json();

		if (!response.ok) {
			console.error('Error al actualizar el Stock:', data.error);
			return;
		}
	} catch (error) {
		console.error('Error al comunicar con el backend:', error);
	}
};
