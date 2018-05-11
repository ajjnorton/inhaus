export interface IProperty {
    addrLine1: string;
    addrLine2?: string;
    addrLine3?: string;
    propertyType: string;
    town?: string;
    area?: string;
    country?: string;
    zipCode?: string;
}
export class Property implements IProperty {

    constructor(
        public addrLine1,
        public propertyType,
    ) {
    }

    onBoardTenant(){
        // on board method
    }


}
