import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const HomeHero = ({ heroProducts }) => {
  return (
    <Swiper
      tag='section'
      className='hero-slider'
      modules={[A11y, Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      {heroProducts.map((element) => {
        const { nombre, precio, slug, subcategoria, marca, imagen } = element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag='section'
            className="section section--hero"
            style={{
              backgroundImage: `url(${imagen.data[0].attributes.url})`
            }}
          >
            <div className="container container--hero">
              <div className="card card--hero">
                <h2 className="card__title card__title--hero">{nombre}</h2>
                <h3 className="card__subtitle card__subtitle--hero">{marca.data[0].attributes.nombre} I {subcategoria.data.attributes.nombre}</h3>
                <h4 className="card__price card__price--hero ">{precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</h4>
                <Link to={`/productos/${slug}`} className="button button--primary">Ver más</Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper >
  );
};

export default HomeHero;