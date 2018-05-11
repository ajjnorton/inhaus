import { Person } from './person';

export interface ILandlord {
    first_name?: string;
    last_name?: string;
    age?: number;
    phone_number?: string;
    email?: string;
}

export class Landlord extends Person {

    constructor(
        public first_name?: string,
        public last_name?: string,
        public email?: string) {
        super();
    }


}
