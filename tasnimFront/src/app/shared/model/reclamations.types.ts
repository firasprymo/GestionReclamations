import {Users} from './users.types';

export interface Reclamations {
    id?: number;
    type?: string;
    content?: string;
    description?: string;
    email?: string;
    utilisateurs: Users[];
}
