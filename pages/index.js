import Layout from "../components/Layout";
import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import db from "../utils/db";
import Product from "../models/Product";
import { toast } from "react-toastify";
import { Store } from "../utils/Store";
import Sidebar from "../components/Sidebar";

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    selectedMin: null,
    selectedMax: null,
  });

  const getFilteredProducts = (products, filters) => {
    let filteredProducts = [...products];
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }
    if (filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color))
      );
    }
    return filteredProducts;
  };

  const handleAddToCart = async (product) => {
    const existingItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    const response = await fetch(`/api/products/${product._id}`);
    const data = await response.json();

    if (data.countInStock < quantity) {
      return toast.error("Sorry. This product is out of stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    toast.success(`${data.name} added to cart`);
  };

  return (
    <>
      <Layout title="Home">
        <div className="grid md:grid-cols-[1fr_5fr] ">
          <Sidebar
            products={products}
            filters={filters}
            setFilters={setFilters}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {getFilteredProducts(products, filters).map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.slug}
                  handleAddToCart={handleAddToCart}
                ></ProductCard>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
