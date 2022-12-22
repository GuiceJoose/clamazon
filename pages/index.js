import Layout from "../components/Layout";
import React from "react";
import ProductCard from "../components/ProductCard";
import db from "../utils/db";
import Product from "../models/Product";

export default function Home({ products }) {
  return (
    <>
      <Layout title="Home">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            return (
              <ProductCard product={product} key={product.slug}></ProductCard>
            );
          })}
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
