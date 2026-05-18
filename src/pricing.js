export function applyDiscount(price, discountRate) {
  if (price < 0) {
    throw new RangeError("price must be non-negative");
  }

  if (discountRate < 0 || discountRate > 1) {
    throw new RangeError("discountRate must be between 0 and 1");
  }

  return Number((price * (1 - discountRate)).toFixed(2));
}
