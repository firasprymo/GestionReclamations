import {Categories} from './categories.types';

export interface Equipments {
    id?: number;
    serialNumber?: string;
    inventoryNumber?: string;
    description?: string;
    categoryId?: number;
    category?: Categories;
    shippingDate?: string;
    destination?: string;
}
