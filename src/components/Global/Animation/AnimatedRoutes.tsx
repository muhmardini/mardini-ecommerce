import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../MainLayout";
import { Home } from "../../../pages/Home";
import { About } from "../../../pages/About";
import { Cart } from "../../../pages/Cart";
import Checkout from "../../../pages/Checkout";
import { Contact } from "../../../pages/Contact";
import { Favorite } from "../../../pages/Favorite";
import { Products } from "../../../pages/Products";
import SingleProduct from "../../../pages/SingleProduct";
import { AnimatePresence } from "motion/react";
import PageTransition from "./PageTransition";

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/Products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/Favorite" element={<PageTransition><Favorite /></PageTransition>} />
        <Route path="/Products/:id" element={<PageTransition><SingleProduct /></PageTransition>} />
        </Route>
        <Route path="/Cart" element={<PageTransition><Cart /></PageTransition>} />
        <Route path="/About" element={<PageTransition><About /></PageTransition>} />
        <Route path="/Contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
        <Route path="/favorite" element={<PageTransition><Favorite /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
