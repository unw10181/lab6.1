export interface DiscountableProduct {
    discount: number;
    applyDiscount(): string;
}
export declare abstract class Product {
    sku: string;
    name: string;
    price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails: () => string;
    getPriceWithTax: () => string;
}
//# sourceMappingURL=Product.d.ts.map