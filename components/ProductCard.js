import Link from "next/link";
import React from "react";

function ProductCard({ handleAddToCart, product }) {
  return (
    <div className="basic-card">
      <Link href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="rounded" />
      </Link>
      <div className="flex flex-col text-center items-stretch justify-between p-4 h-full">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
