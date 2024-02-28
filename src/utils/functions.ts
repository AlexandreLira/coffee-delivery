import { ICaffe } from "../components/CoffeeCard";

export function separateCategories(productList: ICaffe[]): {title: string, data: any[]}[] {
    const list = productList;
    let categories = [];

    for (let product of list) {
        const { category } = product;
        const isCategoryAdd = categories.find((item) => item?.title == category);

        if (isCategoryAdd) {
            const index = categories.findIndex((item) => item?.title == category);
            categories[index].data.push(product);
            continue;
        }

        const data = {
            title: category,
            data: [product],
        };

        categories.push(data);
    }
    return categories;
}