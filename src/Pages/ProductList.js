import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./ProductList.css";
import Navbar from "./../component/Navbar";
import Footer from "./../component/Footer";

function ProductList({ products }) {
  if (!products) {
    return <div>No products available.</div>;
  }
  return (
    <>
      <Navbar />
      <div className="card-container1">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`} className="link">
            <Card className="cards">
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
      <Footer />
    </>
  );
}

export default ProductList;
