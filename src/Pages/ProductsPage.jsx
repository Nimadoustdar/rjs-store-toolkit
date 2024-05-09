import { useState, useEffect } from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";

import styles from "./ProductsPage.module.css";

import {
  categoryProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";

import { useSearchParams } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((store) => store.product);

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);
    finalProducts = categoryProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox setSearch={setSearch} search={search} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
