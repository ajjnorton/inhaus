
// minimum contract to the outside world
export interface IPerson {
    first_name?: string;
    last_name?: string;
    age?: number;
    mobile?: string;
}

export class Person implements IPerson {

    constructor(
        public mobile?: string,
        public first_name?: string,
        public last_name?: string,
        public phone_number?: string

    ) {

    }

    getFullName(): string {
        return this.first_name + this.last_name;
    }
}

