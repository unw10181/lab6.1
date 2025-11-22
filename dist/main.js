"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const quanMillz = new DigitalProduct_1.DigitalProduct("sm12322", "ebook", 3.99, 30, .1);
const doveSoap = new PhysicalProduct_1.PhysicalProduct("sm12322", "soap", 3.21, 2.1);
(0, taxCalculator_1.calculateTax)(doveSoap);
(0, taxCalculator_1.calculateTax)(quanMillz);
let cart = [];
cart.push(quanMillz, doveSoap);
for (let item of cart) {
    console.log(item.displayDetails());
}
//# sourceMappingURL=main.js.map