import CardsSlider from "../cards/CardsSlider";

const HomeMostSelled = ({ mostSelledProducts }) => {
  return (
    <section className="section">
      <div className="container elements">
        <h2 className="section__title">Los más vendidos</h2>
        <CardsSlider elements={mostSelledProducts} />
      </div>
    </section>
  );
};

export default HomeMostSelled;