import { DiscountableProduct, Product } from "./Product";

export class DigitalProduct extends Product implements DiscountableProduct
 {
    fileSize: number;
    discount: number;

    constructor(sku: string, name: string, price: number, fileSize: number, discount: number) {
        super(sku, name, price)
        this.fileSize = fileSize;
        this.discount = discount;
    }

    getFileSize = (): string => {
        return `${this.fileSize} MB`
    }

    getPriceWithTax = (): string => {
        return `$${this.price}`
    }

    applyDiscount = (): string => {
        this.discount -= 1;
        this.price *= this.discount
       return `Your new total with discount is ${this.price}`; 
    }
}