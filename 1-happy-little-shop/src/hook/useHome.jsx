import { useSelector } from "react-redux";

const useHome = () => {
  return (useSelector(state => state.home));
};

export default useHome;