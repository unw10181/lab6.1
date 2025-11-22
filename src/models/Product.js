"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails = () => {
        return `Product Name: ${this.name} Product SKU: ${this.sku} Price: $${this.price}`;
    };
    getPriceWithTax = () => {
        return `$${this.price}`;
    };
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map