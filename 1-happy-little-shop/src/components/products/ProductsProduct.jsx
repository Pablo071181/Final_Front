const ProductsProduct = ({ product, data }) => {
  const { nombre, precio, subcategoria, marca, imagen } = product.attributes;

  return (
    <section className="section section--first">
      <div className="container">
        <article className="product">
          <header className="product__header">
            <h4 className="product__subtitle">{marca.data[0].attributes.nombre}</h4>
            <h2 className="product__title">{nombre}</h2>
            <h4 className="product__subtitle">{subcategoria.data.attributes.nombre}</h4>
          </header>
          <div className="product__img-container">
            <img
              src={imagen.data[0].attributes.url}
              alt={nombre}
              width="100%"
              height="auto"
              className="product__img"
            />
          </div>
          <div className="product__body">
            <h3 className="product__price">{precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}</h3>
            <a
              href={`https://api.whatsapp.com/send?phone=51${data.data?.attributes.componetes[4].numero}&text=Deseo%20comprar el producto ${nombre}, marca: ${marca.data[0].attributes.nombre} al precio de ${precio.toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 })}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary">
              Comprar
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductsProduct;