import {Equipments} from './equipments.types';

export interface Stock {
    id?: number;
    availableEquipment?: string;
    quantity?: number;
    stockRecord?: string;
    location?: string;
    startDate?: Date;
    endDate?: Date;
    equipmentId?: number;
}
