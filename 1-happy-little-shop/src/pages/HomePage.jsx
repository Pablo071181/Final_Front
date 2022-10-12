import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReadBrands, fetchReadHero, fetchReadMostSelled } from "../redux/slices/homeSlice";
import HomeHero from "../components/home/HomeHero"
import useHome from "../hook/useHome";
import HomeMostSelled from "../components/home/HomeMostSelled";
import HomeBrands from "../components/home/HomeBrands";

const HomePage = () => {
  const dispatch = useDispatch();
  const { brands, heroProducts, mostSelledProducts } = useHome();
  useEffect(() => {
    dispatch(fetchReadHero({ page: 1, pageSize: 6 }));
    dispatch(fetchReadMostSelled({ page: 2, pageSize: 6 }));
    dispatch(fetchReadBrands());
  }, []);

  return (
    <>
      <HomeHero heroProducts={heroProducts} />
      <HomeMostSelled mostSelledProducts={mostSelledProducts} />
      <HomeBrands brands={brands} />
    </>
  );
};

export default HomePage;