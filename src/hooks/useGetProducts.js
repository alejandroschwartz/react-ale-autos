import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetProducts(API) {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, [])

  return products;
}
