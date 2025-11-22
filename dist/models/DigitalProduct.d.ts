import { DiscountableProduct, Product } from "./Product";
export declare class DigitalProduct extends Product implements DiscountableProduct {
    fileSize: number;
    discount: number;
    constructor(sku: string, name: string, price: number, fileSize: number, discount: number);
    getFileSize: () => string;
    getPriceWithTax: () => string;
    applyDiscount: () => string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map