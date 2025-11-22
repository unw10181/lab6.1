import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import { Product } from "./models/Product";

const quanMillz = new DigitalProduct("sm12322", "ebook", 3.99, 30, .1);
const doveSoap = new PhysicalProduct("sm12322", "soap", 3.21, 2.1);

calculateTax(doveSoap);
calculateTax(quanMillz);
let cart: Product[] = [];

cart.push(quanMillz, doveSoap);

for (let item of cart) {
    console.log(item.displayDetails());
}


