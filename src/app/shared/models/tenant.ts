import {Person} from './person';

export class Tenant extends Person {

    constructor(first_name, last_name, age, public propertyName: string) {
        super(first_name, last_name, age);
    }

    getName() {
        return super.getFullName();
    }
}
