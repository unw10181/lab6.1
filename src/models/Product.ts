export interface DiscountableProduct {
  discount: number
  applyDiscount(): string;
}

export abstract class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails = (): string => {
    return `Product Name: ${this.name} Product SKU: ${this.sku} Price: $${this.price}`;
  };

  getPriceWithTax = (): string => {
    return `$${this.price}`;
  };
}
