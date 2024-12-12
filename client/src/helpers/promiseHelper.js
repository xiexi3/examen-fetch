import { Category } from "../classes/Category";
import { Product } from "../classes/Product";


export const parserCategoryToClass = (categoriesLiteralObject) => {
	return new Promise((resolve, reject) => {
		if (categoriesLiteralObject !== null || categoriesLiteralObject !== undefined) {
			const categoryClasses = categoriesLiteralObject.map((categoryLiteralObject) => {
				let categoryClass = new Category(
					categoryLiteralObject.CatName,
					categoryLiteralObject.CategoryValue
				);
				return categoryClass;
			});
			resolve(categoryClasses);
		} else {
			let error = new Error("Object is null or undefined");
			error.name = "parserToClass";
			reject(error);
		}
	});
}

export const parserProductToClass = (productsLiteralObject) => {
	return new Promise((resolve, reject) => {
		if (productsLiteralObject !== null || productsLiteralObject !== undefined) {
			const productClasses = productsLiteralObject.results.map((productLiteralObject) => {
				let productClass = new Product(
					productLiteralObject.name,
					productLiteralObject.price.formattedValue,
				);				
				productClass.imgUrl = productLiteralObject.images[0].baseUrl;
				return productClass;
			});
			resolve(productClasses);
		} else {
			let error = new Error("Object is null or undefined");
			error.name = "parserToClass";
			reject(error);
		}
	});
}