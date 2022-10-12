import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReadFooter } from "../../redux/slices/footerSlice";
import { Link } from "react-router-dom";
import { BsClock, BsClockHistory, BsEnvelope, BsFacebook, BsGeoAlt, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import useFooter from "../../hook/useFooter";

const Footer = () => {
  const dispatch = useDispatch();
  const { data } = useFooter();
  useEffect(() => {
    dispatch(fetchReadFooter());
  }, []);

  return (
    <footer className="footer">
      <nav className="nav">
        <div className="container elements">
          <div className="elements elements--footer-nav">
            <div className="elements elements--sm">
              <h4 className="footer__title">Contacto</h4>
              <ul className="menu menu--footer">
                <li className="footer__subtitle">
                  <a
                    href={`https://api.whatsapp.com/send?phone=51${data.data?.attributes.componetes[4].numero}&text=Deseo%20información`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menu__link"
                  >
                    <BsWhatsapp /> Chatea con nosotros
                  </a>
                </li>
                <li className="footer__subtitle">
                  <a
                    href={`mailto:${data.data?.attributes.componetes[3].email_corporativo}}`}
                    className="menu__link"
                  >
                    <BsEnvelope /> {data.data?.attributes.componetes[3].email_corporativo}
                  </a>
                </li>
                <li className="footer__subtitle"><BsGeoAlt /> {data.data?.attributes.componetes[0].direccion}, {data.data?.attributes.componetes[0].ciudad}, {data.data?.attributes.componetes[0].pais}</li>
                <li className="footer__subtitle"><BsClock /> {data.data?.attributes.componetes[1].dia} de {data.data?.attributes.componetes[1].hora_inicio} a {data.data?.attributes.componetes[1].hora_salida}</li>
                <li className="footer__subtitle"><BsClockHistory /> {data.data?.attributes.componetes[2].dia} de {data.data?.attributes.componetes[2].hora_inicio} a {data.data?.attributes.componetes[2].hora_salida}</li>
              </ul>
            </div>
            <div className="elements elements--sm">
              <h4 className="footer__title">EAKON</h4>
              <ul className="menu menu--footer">
                <li className="footer__subtitle">
                  <Link to="/productos" className="menu__link">
                    Productos
                  </Link>
                </li>
                <li className="footer__subtitle">
                  <Link to="/nosotros" className="menu__link">
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div className="elements elements--sm">
              <h4 className="footer__title">Síguenos</h4>
              <ul className="menu">
                <li className="footer__subtitle">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav__icon nav__icon--footer"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li className="footer__subtitle">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav__icon nav__icon--footer"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className="footer__subtitle">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav__icon nav__icon--footer"
                  >
                    <BsYoutube />
                  </a>
                </li>
                <li className="footer__subtitle">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav__icon nav__icon--footer"
                  >
                    <BsTwitter />
                  </a>
                </li>
                <li className="footer__subtitle">
                  <a
                    href="linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav__icon nav__icon--footer"
                  >
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h4 className="footer__credits">
            Copyright &copy; 2022 <Link to="/" className="footer__credits-author">EAKON</Link> Todos los derechos reservados.
          </h4>
        </div>
      </nav>
    </footer >
  );
};

export default Footer;