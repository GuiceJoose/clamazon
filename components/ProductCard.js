import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="basic-card">
      <Link href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="rounded" />
      </Link>
      <div className="flex flex-col items-center justify-center p-4">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
