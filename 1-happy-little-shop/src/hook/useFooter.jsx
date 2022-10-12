import { useSelector } from "react-redux";

const useFooter = () => {
  return (useSelector(state => state.footer));
};

export default useFooter;