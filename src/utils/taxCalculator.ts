import { Product } from "../models/Product";

export function calculateTax(item: Product): string {
  return `${item.getPriceWithTax()}`;
}
