import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import useFooter from '../../hook/useFooter';

const CardsSlider = ({ elements }) => {
  const { data } = useFooter();
  return (
    <Swiper
      tag="section"
      className="section-slider"
      modules={[A11y, Navigation]}
      navigation
      preloadImages={false}
      slidesPerView={2}
      spaceBetween={16}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 32
        }
      }}
    >
      {elements.map((element) => {
        const { nombre, precio, slug, marca, imagen } = element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag="div"
            className="card"
          >
            <Link to={`/productos/${slug}`} className="overflow-hidden">
              <img
                src={imagen.data[0].attributes.formats.thumbnail.url}
                alt={nombre}
                className="card__header-img"
                loading="lazy"
              />
            </Link>
            <div className="card__body">
              <h4 className="card__subtitle">{marca.data[0].attributes.nombre}</h4>
              <Link to={`/productos/${slug}`} className="card__title">{nombre}</Link>
              <h5 className="card__price">{precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</h5>
              <a
                href={`https://api.whatsapp.com/send?phone=51${data.data?.attributes.componetes[4].numero}&text=Deseo%20comprar el producto ${nombre}, marca: ${marca.data[0].attributes.nombre} al precio de ${precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary mt-auto">
                Comprar
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardsSlider;