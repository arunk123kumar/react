import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
export default function Detail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sku, setSku] = useState("");
  const { data: product, loading, error } = useFetch(`products/${id}`);
  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) return error;
  return (
    <div id="detail">
      <label htmlFor="size">Filter by Size:</label>{" "}
      <select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
        <option value="">What size?</option>
        {product.skus.map((s) => (
          <option value={s.sku}>{s.size}</option>
        ))}
      </select>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <button
        disabled={!sku}
        onClick={() => {
          props.addToCart(id, sku);
          navigate("/cart");
        }}
        className="btn btn-primary"
      >
        Add to Cart
      </button>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
