import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsList, BsMoon, BsSun, BsXCircle } from "react-icons/bs";

const Header = () => {
  const header = useRef();
  const nav = useRef();
  const modal = useRef();
  const navTheme = useRef();
  const location = useLocation();

  const documentScroll = () => {
    if (window.location.pathname.search(/productos/) !== 1) {
      header.current?.classList.toggle('header--scroll', window.scrollY > 0);
      nav.current?.classList.toggle('nav--scroll', window.scrollY > 0);
    }
  };

  const openMenu = () => {
    header.current.classList.add('header--open');
    modal.current.classList.add('modal--open');
  };

  const closeMenu = () => {
    header.current.classList.remove('header--open');
    modal.current.classList.remove('modal--open');
  };

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--light');
    navTheme.current.classList.toggle('nav__theme--active');

    if (body.classList.contains('body--light')) {
      localStorage.setItem('darkMode', 'false');
    } else {
      localStorage.setItem('darkMode', 'true');
    }
  };

  useEffect(() => {
    if (window.location.pathname.search(/productos/) === 1) {
      header.current?.classList.add('header--scroll');
      nav.current?.classList.add('nav--scroll');
    } else {
      header.current?.classList.remove('header--scroll');
      nav.current?.classList.remove('nav--scroll');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      navTheme.current.classList.add('nav__theme--active');
    }
  }, []);

  document.addEventListener('scroll', documentScroll);

  return (
    <header
      className="header"
      ref={header}
    >
      <nav
        className="nav"
        ref={nav}
      >
        <div className="container elements elements--header-nav">
          <Link to="/">
            <img src="/favicon.svg" alt="Logo Happy Little Shop" className="nav__logo" width="32" height="32" />
          </Link>
          <div
            className="modal modal--menu"
            ref={modal}
            onClick={closeMenu}
          >
            <ul
              className="menu menu--header"
              onClick={e => e.stopPropagation()}
            >
              <li>
                <NavLink
                  to="/productos"
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                  onClick={closeMenu}
                >
                  Especialidades
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                  onClick={closeMenu}
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reserva"
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link"}
                  onClick={closeMenu}
                >
                  Reserva
                </NavLink>
              </li>
              <li
                className="nav__icon nav__icon--close"
                onClick={closeMenu}
              >
                <BsXCircle />
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button
              className="nav__theme"
              ref={navTheme}
              onClick={toggleTheme}
            >
              <BsMoon />
              <BsSun />
            </button>
            <button
              className="nav__icon nav__icon--menu"
              onClick={openMenu}
            >
              <BsList />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;