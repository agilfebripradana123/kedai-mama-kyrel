import { useState } from "react";
import MenuCard from "./MenuCard";
import OrderModal from "./OrderModal";
import { menuData } from "../data/menuData";

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedMenu, setSelectedMenu] = useState(null);

  const categories = ["Semua", "Makanan", "Minuman"];

  // =========================
  // FILTER DATA
  // =========================

  const foodMenus = menuData.filter(
    (menu) => menu.category === "Makanan" || menu.category === "Makanan Lain",
  );

  const drinkMenus = menuData.filter((menu) => menu.category === "Minuman");

  return (
    <>
      <section
        id="menu"
        className="
          bg-surface
          px-4
          py-20
          sm:px-6
          lg:py-24
        "
      >
        <div className="mx-auto max-w-[1200px]">
          {/* =========================
              HEADER
          ========================= */}

          <div className="mx-auto max-w-2xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                bg-primary-fixed
                px-4
                py-2
                font-body
                text-sm
                font-semibold
                text-on-primary-fixed
              "
            >
              Menu Kedai
            </span>

            <h2
              className="
                mt-5
                font-heading
                text-[32px]
                font-extrabold
                leading-tight
                text-on-surface
                sm:text-[40px]
              "
            >
              Pilih Menu Favoritmu
            </h2>

            <p
              className="
                mt-4
                font-body
                text-base
                leading-7
                text-on-surface-variant
              "
            >
              Pilih makanan atau minuman favoritmu, lalu pesan sesuai selera.
            </p>
          </div>

          {/* =========================
              FILTER
          ========================= */}

          <div className="mt-10 flex justify-center">
            <div
              className="
                flex
                w-full
                max-w-[420px]
                gap-1.5
                rounded-2xl
                border
                border-outline-variant
                bg-surface-container
                p-1.5
              "
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      relative
                      flex-1
                      rounded-xl
                      px-4
                      py-2.5
                      font-body
                      text-sm
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-primary
                            text-on-primary
                            shadow-[0_4px_12px_rgba(177,8,6,0.18)]
                          `
                          : `
                            text-on-surface-variant
                            hover:bg-surface-container-highest
                            hover:text-on-surface
                          `
                      }
                    `}
                  >
                    {category}

                    {isActive && (
                      <span
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-0.5
                          w-5
                          -translate-x-1/2
                          rounded-full
                          bg-white/80
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =========================
              MENU
          ========================= */}

          <div className="mt-12">
            {/* SEMUA */}

            {activeCategory === "Semua" && (
              <div className="space-y-16">
                <MenuCategory
                  title="Makanan"
                  menus={foodMenus}
                  onOrder={setSelectedMenu}
                />

                <MenuCategory
                  title="Minuman"
                  menus={drinkMenus}
                  onOrder={setSelectedMenu}
                />
              </div>
            )}

            {/* MAKANAN */}

            {activeCategory === "Makanan" && (
              <MenuCategory
                title="Makanan"
                menus={foodMenus}
                onOrder={setSelectedMenu}
              />
            )}

            {/* MINUMAN */}

            {activeCategory === "Minuman" && (
              <MenuCategory
                title="Minuman"
                menus={drinkMenus}
                onOrder={setSelectedMenu}
              />
            )}
          </div>
        </div>
      </section>

      {/* =========================
          ORDER MODAL
      ========================= */}

      <OrderModal menu={selectedMenu} onClose={() => setSelectedMenu(null)} />
    </>
  );
}

/* ==================================================
   MENU CATEGORY
================================================== */

function MenuCategory({ title, menus, onOrder }) {
  return (
    <div>
      {/* CATEGORY TITLE */}

      <div className="mb-6 flex items-center gap-4">
        <h3
          className="
            shrink-0
            font-heading
            text-[24px]
            font-bold
            text-on-surface
          "
        >
          {title}
        </h3>

        <div
          className="
            h-px
            flex-1
            bg-outline-variant
          "
        />
      </div>

      {/* CARDS */}

      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} onOrder={onOrder} />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
