import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards3({ products, category }) {
  // Filter the products based on the category
  const filteredProducts = products.filter(
    (product) => product.productCategory === category
  );

  // Slice the array to get only the first 5 products
  const firstFiveProducts = filteredProducts.slice(0, 4);

  return (
    <div className="card-container1">
      <div className="category-head">
        <h2>{category.toUpperCase()}</h2>
        <Link to={`/${category}`} className="link">
          <Button className="btn">View All</Button>
        </Link>
      </div>
      {firstFiveProducts.map((product) => (
        <Link to={`/product/${product.id}`} className="link">
          <Card key={product.id} className="cards">
            <Card.Img className="card-img" src={product.productImageUrl} />
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text className="card-disc">
                ₹ {product.productPrice}
              </Card.Text>
              <Link to={`/product/${product.id}`} className="link">
                Buy Now
              </Link>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Cards3;
