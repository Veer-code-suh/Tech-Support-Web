import React from "react";
import "./ProductDetails.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./../component/Navbar";
import Cards3 from "./../component/Cards3";
import Footer from "./../component/Footer";

function ProductDetails({ products }) {
  const { id } = useParams();
  console.log("Products received in ProductDetails:", products);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <Card className="cards-details">
        <Card.Img className="details-imgs1" src={product.productImageUrl} />

        <Card.Body className="details-box">
          <Card.Title className="details-name">
            {product.productName}
          </Card.Title>
          <p className="details-price-p">Special price</p>
          <Card.Text className="details-price">
            ₹ {product.productPrice} /-
          </Card.Text>
          <p className="details-p">Product details : --</p>

          <Card.Text className="details-detail">
            Ram : &nbsp; &nbsp; {product.productRam}
          </Card.Text>
          <Card.Text className="details-detail">
            Rom : &nbsp; &nbsp; {product.productStorageType}
          </Card.Text>
          <Card.Text className="details-detail">
            Rom : &nbsp; &nbsp; {product.productProcessor}
          </Card.Text>
          <p className="details-p">Description : --</p>
          <Card.Text className="details-detail">
            Rom : &nbsp; &nbsp; {product.productDescription}
          </Card.Text>
          <Link to="https://web.whatsapp.com/">
            <button className=" buybtn">BUY NOW</button>
          </Link>
        </Card.Body>
      </Card>
      <h1>Similar Products</h1>
      <Cards3 products={products} category="computer" />
      <Cards3 products={products} category="laptop" />
      <Cards3 products={products} category="moniter" />
      <Cards3 products={products} category="ram" />
      <Cards3 products={products} category="ssd" />
      <Cards3 products={products} category="processor" />
      <Cards3 products={products} category="barebone" />
      <Footer />
    </>
  );
}

export default ProductDetails;
