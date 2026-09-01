import { useState } from "react";
import {
  FiMessageCircle,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiShoppingCart,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

function Navbar({ darkMode, setDarkMode, onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { totalItems } = useCart();
  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Tentang", href: "#about" },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface/95 backdrop-blur-md">
      {/* =========================
          DESKTOP
      ========================= */}

      <nav className="mx-auto hidden h-20 max-w-[1200px] grid-cols-3 items-center px-6 md:grid">
        {/* LOGO */}

        <div className="flex items-center justify-start">
          <a
            href="#home"
            aria-label="Kedai Mama Kyrel"
            className="inline-flex transition-transform duration-200 hover:scale-[1.02] active:scale-95"
          >
            <img
              src="/assets/logo.png"
              alt="Kedai Mama Kyrel"
              className="block w-[140px] object-contain"
            />
          </a>
        </div>

        {/* NAVIGATION */}

        <div className="flex items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="
                group
                relative
                inline-flex
                h-10
                items-center
                justify-center
                whitespace-nowrap
                font-body
                text-[15px]
                font-semibold
                leading-none
                text-on-surface-variant
                transition-colors
                duration-200
                hover:text-primary
              "
            >
              <span>{item.label}</span>

              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-1
                  left-0
                  h-[2px]
                  w-full
                  origin-center
                  scale-x-0
                  rounded-full
                  bg-primary
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </div>

        {/* ACTION */}

        <div className="flex items-center justify-end gap-3">
          {/* THEME */}

          <button
            type="button"
            aria-label="Ubah tema"
            onClick={() => setDarkMode(!darkMode)}
            className="
    group
    relative
    flex
    h-10
    w-10
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    border-outline-variant
    bg-surface-container-lowest
    text-on-surface
    transition-all
    duration-300
    hover:border-primary
    hover:bg-primary
    hover:text-on-primary
    active:scale-95
  "
          >
            {/* SUN */}
            <FiSun
              size={18}
              className={`
      absolute
      transition-all
      duration-500
      ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
      ${
        darkMode
          ? "rotate-[-180deg] scale-0 opacity-0"
          : "rotate-0 scale-100 opacity-100"
      }
    `}
            />

            {/* MOON */}
            <FiMoon
              size={18}
              className={`
      absolute
      transition-all
      duration-500
      ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
      ${
        darkMode
          ? "rotate-0 scale-100 opacity-100"
          : "rotate-[180deg] scale-0 opacity-0"
      }
    `}
            />
          </button>

          {/* CART */}
          <button
            type="button"
            onClick={onCartClick}
            aria-label="Buka keranjang"
            className="
    relative
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    border
    border-outline-variant
    bg-surface-container-lowest
    text-on-surface
    transition-all
    duration-200
    hover:border-primary
    hover:bg-primary
    hover:text-on-primary
    active:scale-95
  "
          >
            <FiShoppingCart size={18} />

            {/* BADGE JUMLAH */}
            {totalItems > 0 && (
              <span
                key={totalItems}
                className="
      absolute
      -right-1
      -top-1
      z-20
      flex
      min-h-[20px]
      min-w-[20px]
      items-center
      justify-center
      rounded-full
      bg-primary
      px-1
      font-body
      text-[11px]
      font-bold
      leading-none
      text-white
      shadow-md
      ring-2
      ring-surface
      animate-bounce
    "
              >
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </button>

          {/* WHATSAPP */}

          <a
            href="http://wa.me/6285216632281"
            className="
              group
              inline-flex
              h-11
              items-center
              gap-2
              rounded-full
              bg-primary
              px-5
              font-body
              text-sm
              font-semibold
              text-on-primary
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-primary-container
              hover:shadow-[0_6px_18px_rgba(177,8,6,0.22)]
              active:scale-95
            "
          >
            <FiMessageCircle
              size={17}
              className="transition-transform duration-200 group-hover:scale-110"
            />

            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* =========================
    MOBILE HEADER
========================= */}

      <nav className="flex h-[76px] w-full items-center px-4 md:hidden">
        {/* LOGO KIRI */}

        <a
          href="#home"
          aria-label="Kedai Mama Kyrel"
          onClick={handleNavClick}
          className="
      inline-flex
      shrink-0
      transition-transform
      duration-200
      hover:scale-[1.02]
      active:scale-95
    "
        >
          <img
            src="/assets/logo.png"
            alt="Kedai Mama Kyrel"
            className="block w-[120px] object-contain"
          />
        </a>

        {/* MOBILE BUTTONS KANAN */}

        <div className="ml-auto flex items-center gap-2.5">
          {/* THEME */}

          <button
            type="button"
            aria-label="Ubah tema"
            onClick={() => setDarkMode(!darkMode)}
            className="
    group
    relative
    flex
    h-11
    w-11
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    border-outline-variant
    bg-surface-container-lowest
    text-on-surface
    transition-all
    duration-300
    hover:border-primary
    hover:bg-primary
    hover:text-on-primary
    active:scale-95
  "
          >
            {/* SUN */}
            <FiSun
              size={20}
              className={`
      absolute
      transition-all
      duration-500
      ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
      ${
        darkMode
          ? "rotate-[-180deg] scale-0 opacity-0"
          : "rotate-0 scale-100 opacity-100"
      }
    `}
            />

            {/* MOON */}
            <FiMoon
              size={20}
              className={`
      absolute
      transition-all
      duration-500
      ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
      ${
        darkMode
          ? "rotate-0 scale-100 opacity-100"
          : "rotate-[180deg] scale-0 opacity-0"
      }
    `}
            />
          </button>

          {/* CART */}

          <button
            type="button"
            onClick={onCartClick}
            aria-label="Buka keranjang"
            className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-outline-variant
        bg-surface-container-lowest
        text-on-surface
        transition-all
        duration-200
        hover:border-primary
        hover:bg-primary
        hover:text-on-primary
        active:scale-95
      "
          >
            <FiShoppingCart size={20} />

            {/* BADGE JUMLAH */}

            {totalItems > 0 && (
              <span
                key={totalItems}
                className="
            absolute
            -right-1
            -top-1
            z-20
            flex
            min-h-[20px]
            min-w-[20px]
            items-center
            justify-center
            rounded-full
            bg-primary
            px-1
            font-body
            text-[11px]
            font-bold
            leading-none
            text-white
            shadow-md
            ring-2
            ring-surface
            animate-bounce
          "
              >
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </button>

          {/* HAMBURGER */}

          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-primary
        text-on-primary
        transition-all
        duration-200
        hover:bg-primary-container
        hover:shadow-md
        active:scale-95
      "
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>
      {/* =========================
          MOBILE MENU
      ========================= */}

      <div
        className={`
          overflow-hidden
          bg-surface
          transition-all
          duration-300
          md:hidden
          ${
            mobileOpen
              ? "max-h-[300px] border-t border-outline-variant opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-4 py-3">
          <div className="mx-auto max-w-[500px] rounded-2xl bg-surface-container-low p-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`
                  group
                  flex
                  h-12
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  font-body
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    index === 0
                      ? "bg-primary text-on-primary"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }
                `}
              >
                <span>{item.label}</span>

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
