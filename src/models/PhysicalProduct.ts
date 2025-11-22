import { Product } from "./Product"

export class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  getWeight = (): string => {
    return `${this.weight} kg`;
  }

  getPriceWithTax = (): string => {
    this.price *= 1.1;
    return `$${this.price}`
  }
}