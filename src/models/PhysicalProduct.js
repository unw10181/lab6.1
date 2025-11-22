"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getWeight = () => {
        return `${this.weight} kg`;
    };
    getPriceWithTax = () => {
        this.price *= 1.1;
        return `$${this.price}`;
    };
}
exports.PhysicalProduct = PhysicalProduct;
//# sourceMappingURL=PhysicalProduct.js.map