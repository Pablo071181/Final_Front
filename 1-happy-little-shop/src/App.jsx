import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="especialidades">
            <Route path=":slug" element={<ProductPage />} />
            <Route index element={<h1>Especialidades</h1>} />
          </Route>
          <Route path="nosotros" element={<h1>Nosotros</h1>} />
          <Route index element={<HomePage />} />
        </Route>
          <Route path="reserva" element={<h1>Reserva</h1>} />
          <Route index element={<BookingPage />} />
      </Routes>
    </Provider>
  );
};

export default App;