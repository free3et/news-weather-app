"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
export const useSearchParam = () => {
  const [category, setCategory] = useState("technology");
  const [country, setCountry] = useState("ua");
  const [search, setSearchNews] = useState("");

  function getCategory(item) {
    setCategory(item);
    setSearchNews("");
  }

  function getCountry(item) {
    setCountry(item);
    setSearchNews("");
  }

  function getSearchNews(item) {
    setSearchNews(item);
  }

  const [searchParams, setSearchParams] = useSearchParams();
  /*
  const setQueryParams = (query) => {
    searchParams.set("country", country);
    searchParams.set("category", category);
    searchParams.set("search", search);
    setSearchParams(searchParams);
  };

  const getQueryParams = (query) => {
    searchParams.get("country");
    searchParams.get("category");
    searchParams.get("search");

    setSearchParams(searchParams);
  }; */

  /*   useEffect(
    () => getQueryParams(country, category, search),
    [country, category, search]
  ); */
  return [country, category, search, getCategory, getCountry, getSearchNews];
};
