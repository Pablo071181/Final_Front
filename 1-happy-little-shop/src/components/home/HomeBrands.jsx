import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

const HomeBrands = ({ brands }) => {
  return (
    <section className="section section--secondary">
      <div className="container">
        <h2 className="section__title">Las mejores marcas</h2>
        <Swiper
          tag='section'
          className='section-slider'
          modules={[A11y, Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2500 }}
          // loop
          navigation
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={32}
          breakpoints={{
            768: {
              slidesPerView: 5
            }
          }}
        >
          {brands.map((element) => {
            const { nombre } = element.attributes;
            return (
              <SwiperSlide
                key={element.id}
                tag='h3'
                className="brands"
              >
                {nombre}
              </SwiperSlide>
            );
          })}
        </Swiper >
      </div>
    </section >
  );
};

export default HomeBrands;