// SimilarProducts.js
import React from "react";
import Card from "react-bootstrap/Card";

function SimilarProducts({ products }) {
  return (
    <div className="similar-products">
      <h2>Similar Products</h2>
      <div className="similar-products-container">
        {products.map((product) => (
          <Card key={product.id} className="similar-product-card">
            <Card.Title>{product.productName}</Card.Title>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
