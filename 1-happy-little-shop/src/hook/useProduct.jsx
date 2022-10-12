import { useSelector } from "react-redux";

const useProduct = () => {
  return (useSelector(state => state.product));
};

export default useProduct;