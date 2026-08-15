import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import CartDrawer from "./components/CartDrawer";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-surface text-on-surface transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        <Hero />

        <MenuSection />
        <About />
        <Footer />
      </main>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
