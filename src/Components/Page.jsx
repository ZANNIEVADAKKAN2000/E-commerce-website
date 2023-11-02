import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom"
const Page = (x) => {
  let api = x.data;
  let navigate=useNavigate()
  let [product, setProduct] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let productCount = 3;
  let lastProductIndex = currentPage * productCount;
  let firstProductIndex = lastProductIndex - productCount;
  let currentProducts = product.slice(firstProductIndex, lastProductIndex);
  let [sort, setSort] = useState("all");
  let sortedProducts = currentProducts;
  useEffect(() => {
    axios.get(api).then((res) => {
      setProduct(res.data);
    });
  }, [api]);
  if (sort === "all") {
    sortedProducts = currentProducts;
    console.log(sortedProducts);
  } else if (sort === "p-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
    console.log(sortedProducts);
  } else if (sort === "p-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
    console.log(sortedProducts);
  } else if (sort === "r-asc") {
    sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    console.log(sortedProducts);
  } else if (sort === "r-desc") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    console.log(sortedProducts);
  }
  return (
    <>
      <div className="optioning">
        <div className="filer">
          <p>Category</p>
          <select onChange={(e)=>{navigate(e.target.value)}}>
            <option value="/">All</option>
            <option value="/women">Women's Wear</option>
            <option value="/men">Men's Wear</option>
            <option value="/jewelery">Jewelery</option>
            <option value="/electronics">Electronics</option>
          </select>
        </div>
        <div className="sort">
          <p>Sort using</p>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="all">All</option>
            <option value="p-asc">Price: low to high</option>
            <option value="p-desc">Price: high to low</option>
            <option value="r-asc">Rating: low to high</option>
            <option value="r-desc">Rating: high to low</option>
          </select>
        </div>
      </div>
      <div className="page1">
        {sortedProducts.map((x) => {
          return (
            <div className="container card">
              <div className="container content">
                <img src={x.image} alt="picture" />
                <h1>{x.title}</h1>
                <h2>{x.category}</h2>
                <h3>
                  <i class="bi bi-currency-rupee"></i>
                  {x.price}
                  <span>
                    <i class="bi bi-star-fill me-1 "></i>
                    {x.rating.rate} ({x.rating.count})
                  </span>
                </h3>
                <h5>{x.description}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <Footer
        totalProducts={product.length}
        productCount={productCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
export default Page;