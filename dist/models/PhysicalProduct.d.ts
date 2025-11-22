import { Product } from "./Product";
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getWeight: () => string;
    getPriceWithTax: () => string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map