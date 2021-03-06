import Sort from "../Sort/Sort";
import Search from "../Search/Search";
import ProductCard from "../ProductCard/ProductCard";
import "./DisplayedProduct.css";
import { useState } from "react";
import { sortAZ, sortZA, priceLH, priceHL } from "../../utils/sort";

export default function DisplayedProducts({
  products,
  setSearchedProducts,
  searchedProducts,
  user,
}) {
  const [applySort, setApplySort] = useState(true);

  const handleSearch = (e) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(e.toLowerCase())
    );
    setSearchedProducts(results);
  };

  const handleSort = (e) => {
    if (e === "alpha-ascending") {
      setSearchedProducts(sortAZ(searchedProducts));
      setApplySort(!applySort);
    }
    if (e === "alpha-descending") {
      setSearchedProducts(sortZA(searchedProducts));
      setApplySort(!applySort);
    }
    if (e === "price-ascending") {
      setSearchedProducts(priceLH(searchedProducts));
      setApplySort(!applySort);
    }
    if (e === "price-descending") {
      setSearchedProducts(priceHL(searchedProducts));
      setApplySort(!applySort);
    }
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div>
      <div className="sort_search_container">
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
        <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      </div>
      <div className="all-container">
        {searchedProducts.map((product) => {
          return (
            <ProductCard
              user={user}
              product={product}
              id={product?._id}
              title={product?.title}
              img={product?.img}
              description={product?.description}
              price={product?.price}
              category={product?.category}
            />
          );
        })}
      </div>
    </div>
  );
}
