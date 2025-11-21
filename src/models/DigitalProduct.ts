import { Product } from "./Product";

class DigitalProducts extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price)
        this.fileSize = fileSize;
    }
}