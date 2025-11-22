"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    fileSize;
    discount;
    constructor(sku, name, price, fileSize, discount) {
        super(sku, name, price);
        this.fileSize = fileSize;
        this.discount = discount;
    }
    getFileSize = () => {
        return `${this.fileSize} MB`;
    };
    getPriceWithTax = () => {
        return `$${this.price}`;
    };
    applyDiscount = () => {
        this.discount -= 1;
        this.price *= this.discount;
        return `Your new total with discount is ${this.price}`;
    };
}
exports.DigitalProduct = DigitalProduct;
//# sourceMappingURL=DigitalProduct.js.map