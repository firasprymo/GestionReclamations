import {Users} from './users.types';

export interface Contacts {
    id?: number;
    name?: string;
    email?: string;
    phone?: string;
    userId?: number;
    users?: Users;
}

