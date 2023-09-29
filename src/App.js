import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./Firebase/FirebaseConfig";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Contactus from "./Pages/Contactus";

function App() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProductData(queryOptions, stateUpdater) {
    try {
      const productsCol = collection(db, "ProductData");
      const productQuery = query(productsCol, ...queryOptions);
      const productSnapshot = await getDocs(productQuery);
      const productData = productSnapshot.docs.map((doc) => doc.data());
      stateUpdater(productData);
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  }

  useEffect(() => {
    // Fetch all products
    fetchProductData([], setProductList);
    setLoading(false);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={productList} />} />
        <Route path="/contact" element={<Contactus />} />
        <Route
          path="/productList"
          element={<ProductList products={productList} />}
        />
        <Route
          path="/components"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productType === "component"
              )}
            />
          }
        />
        <Route
          path="/devices"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productType === "device"
              )}
            />
          }
        />
        <Route
          path="/laptop"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "laptop"
              )}
            />
          }
        />
        <Route
          path="/computer"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "computer"
              )}
            />
          }
        />
        <Route
          path="/moniter"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "moniter"
              )}
            />
          }
        />
        <Route
          path="/barebone"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "barebone"
              )}
            />
          }
        />
        <Route
          path="/ram"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "ram"
              )}
            />
          }
        />
        <Route
          path="/processor"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "processor"
              )}
            />
          }
        />
        <Route
          path="/ssd"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "ssd"
              )}
            />
          }
        />
        <Route
          path="/hdd"
          element={
            <ProductList
              products={productList.filter(
                (product) => product.productCategory === "hdd"
              )}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails products={productList} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
