import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsProduct from "../components/products/ProductsProduct";
import useFooter from "../hook/useFooter";
import useProduct from "../hook/useProduct";
import { fetchReadProduct } from "../redux/slices/productSlice";

const ProductPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useProduct();
  const { data } = useFooter();

  useEffect(() => {
    dispatch(fetchReadProduct(slug));
  }, []);

  if (loading || Object.keys(product).length <= 0) {
    return (
      <section className="section section--first">
        <div className="container">
          <h2 className="section__title">Cargando</h2>
        </div>
      </section>
    );
  } else {
    return (
      <ProductsProduct
        product={product}
        data={data}
      />
    );
  }
};

export default ProductPage;