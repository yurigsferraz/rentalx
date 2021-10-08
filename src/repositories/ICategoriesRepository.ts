import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO);
    list(): Category[];
    findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
