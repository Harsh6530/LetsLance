import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalContextProvider } from "./contexts/globalContext";
import ErrorBoundary from "./common/ErrorBoundary";
import ContactPage from "./pages/ContactPage/ContactPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import { useEffect } from "react";
import Portfolio from "./pages/Portfolio/Portfolio";
import { CacheContextProvider } from "./contexts/cacheContext";
import IndustryPage from "./pages/IndustryPage/IndustryPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import useModal from "./hooks/useModal";
import { twMerge } from "tailwind-merge";
import ServicePage from "./pages/ServicesPage/ServicesPage";
import TnCpage from "./pages/TnCPage/TnCpage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        ErrorBoundary={() => <div>Error occured</div>}
        element={<Root />}
      >
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/industries/:id" element={<IndustryPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/TermsAndConditions" element={<TnCpage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Route>
    )
  );

  return (
    <GlobalContextProvider>
      <CacheContextProvider>
        <RouterProvider router={router} />
      </CacheContextProvider>
    </GlobalContextProvider>
  );
}

function Root() {
  const location = useLocation();
  const modal = useModal();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <main className="relative ">
      <div
        className={twMerge(
          "fixed left-0 top-0 z-[102] flex h-screen w-full items-center justify-center bg-[#00000045] backdrop-blur-sm duration-500",
          modal.element ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {modal.element}
      </div>
      <Navbar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </main>
  );
}
