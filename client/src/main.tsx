import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./global.css";
import "./styles/scroll-reveal.css";

// Імпорт загальних компонентів
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// Імпорт сторінок
import { Home } from "./pages/HomePage";
import { ContactsPage } from "./pages/ConctactsPage/ContactsPage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

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
  // 1. Група для звичайних сторінок (з Хедером та Футером)
  {
    path: "/",
    element: <RootLayout />, // Тут є <Header /> і <Footer />
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
    ],
  },

  // 2. Окремі маршрути без Хедера та Футера
  {
    path: "/login",
    element: <LoginPage />, // Просто сторінка, без RootLayout
  },
  {
    path: "/admin",
    element: <AdminPage />, // Просто сторінка, без RootLayout
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
