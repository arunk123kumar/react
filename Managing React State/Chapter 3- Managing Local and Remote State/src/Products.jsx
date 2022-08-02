import React, { useState } from "react";
import "./App.css";
import "./services/productService";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";

export default function Products() {
  const [size, setsize] = useState("");
  const { category } = useParams();
  const {
    data: product,
    error,
    loading,
  } = useFetch("products?category=" + category);

  const filterProducts = size
    ? product.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : product;
  if (error) throw error;
  if (loading) return <Spinner />;
  if (product.length === 0) return <PageNotFound />;

  return (
    <>
      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <select
          id="size"
          value={size}
          onChange={(e) => setsize(e.target.value)}
        >
          <option value="">All sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        {size && <h2> "Result Found: " {filterProducts.length}</h2>}
      </section>
      <section id="products">
        {filterProducts.map((p) => {
          return (
            <div key={p.id} className="product">
              <Link to={`/category/${p.id}`}>
                <img src={`/images/${p.image}`} alt={p.name} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
