import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './global.css';
import './styles/scroll-reveal.css';

// Імпорт загальних компонентів
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

// Імпорт сторінок
import { Home } from './pages/HomePage';
import { ContactsPage } from './pages/ConctactsPage/ContactsPage';

// Layout - це оболонка для сайту. 
// <Outlet /> - це місце, куди React Router буде підставляти потрібну сторінку.
const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
};

// Налаштування маршрутів
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Header та Footer будуть на кожній з цих сторінок
    children: [
      {
        path: '/',
        element: <Home />,   // Головна сторінка за адресою "/"
      },
      {
        path: '/contacts',
        element: <ContactsPage />, // Сторінка контактів за адресою "/contacts"
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);