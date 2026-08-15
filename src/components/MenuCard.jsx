import {
  FiShoppingBag,
  FiCoffee,
  FiLayers,
  FiZap,
  FiChevronRight,
} from "react-icons/fi";

function formatPrice(price) {
  return `Rp${Number(price || 0).toLocaleString("id-ID")}`;
}

function MenuCard({ menu, onOrder }) {
  const hasVariants = menu.variants?.length > 0;
  const hasToppings = menu.toppings?.length > 0;
  const hasLevel = !!menu.level;

  // =========================
  // ICON BERDASARKAN KATEGORI
  // =========================

  const getCategoryIcon = () => {
    if (menu.category === "Minuman") {
      return <FiCoffee size={38} />;
    }

    if (hasLevel) {
      return <FiZap size={38} />;
    }

    if (hasVariants) {
      return <FiLayers size={38} />;
    }

    return <FiShoppingBag size={38} />;
  };

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-outline-variant
        bg-surface-container-lowest
        shadow-[0_4px_20px_rgba(30,30,30,0.05)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_12px_30px_rgba(30,30,30,0.10)]
      "
    >
      {/* =========================
    IMAGE
========================= */}

      <div
        className="
    relative
    mb-0
    flex
    h-44
    items-center
    justify-center
    overflow-hidden
    bg-surface-container
  "
      >
        <img
          src={menu.image}
          alt={menu.name}
          className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-500
      group-hover:scale-105
    "
        />

        {/* Overlay */}
        <div
          className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/25
      via-transparent
      to-transparent
    "
        />

        {/* Category */}
        <div
          className="
      absolute
      left-4
      top-4
      rounded-full
      bg-white/90
      px-3
      py-1.5
      font-body
      text-[11px]
      font-semibold
      text-on-surface
      shadow-sm
      backdrop-blur-sm
    "
        >
          {menu.category}
        </div>

        {/* Level Badge */}
        {hasLevel && (
          <div
            className="
        absolute
        right-4
        top-4
        rounded-full
        bg-primary
        px-3
        py-1.5
        font-body
        text-[11px]
        font-bold
        text-on-primary
        shadow-sm
      "
          >
            Level
          </div>
        )}
      </div>

      {/* =========================
          CONTENT
      ========================= */}

      <div className="flex flex-1 flex-col p-5">
        {/* Name */}
        <div>
          <h3
            className="
              font-heading
              text-[19px]
              font-bold
              leading-7
              text-on-surface
              transition-colors
              duration-200
              group-hover:text-primary
            "
          >
            {menu.name}
          </h3>

          {/* Description */}
          {menu.description && (
            <p
              className="
                mt-2
                font-body
                text-sm
                leading-6
                text-on-surface-variant
              "
            >
              {menu.description}
            </p>
          )}
        </div>

        {/* =========================
            VARIANTS
        ========================= */}

        {hasVariants && (
          <div className="mt-5">
            <div className="mb-2.5 flex items-center justify-between">
              <p
                className="
                  font-body
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-on-surface-variant
                "
              >
                Pilihan
              </p>

              <span className="font-body text-[11px] text-on-surface-variant">
                {menu.variants.length} pilihan
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {menu.variants.map((variant) => (
                <span
                  key={variant.name}
                  className="
                    rounded-lg
                    border
                    border-outline-variant
                    bg-surface-container
                    px-3
                    py-2
                    font-body
                    text-xs
                    font-medium
                    text-on-surface-variant
                    transition-colors
                    duration-200
                    group-hover:border-primary/20
                  "
                >
                  {variant.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            TOPPINGS
        ========================= */}

        {hasToppings && (
          <div className="mt-5">
            <p
              className="
                mb-2.5
                font-body
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-on-surface-variant
              "
            >
              Topping
            </p>

            <div className="flex flex-wrap gap-1.5">
              {menu.toppings.map((topping) => (
                <span
                  key={topping}
                  className="
                    rounded-full
                    bg-secondary-container
                    px-3
                    py-1.5
                    font-body
                    text-[11px]
                    font-semibold
                    text-on-secondary-container
                  "
                >
                  {topping}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            LEVEL INFO
        ========================= */}

        {hasLevel && (
          <div
            className="
              mt-5
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-primary/10
              bg-primary/5
              p-3
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-primary
                text-on-primary
              "
            >
              <FiZap size={16} />
            </div>

            <div>
              <p
                className="
                  font-body
                  text-xs
                  font-bold
                  text-on-surface
                "
              >
                Level 0–2 gratis
              </p>

              <p
                className="
                  mt-0.5
                  font-body
                  text-[11px]
                  text-on-surface-variant
                "
              >
                +Rp1.000 setiap naik 1 level
              </p>
            </div>
          </div>
        )}

        {/* =========================
            PRICE
        ========================= */}

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              {menu.price ? (
                <>
                  <p
                    className="
                      mb-1
                      font-body
                      text-[11px]
                      font-medium
                      text-on-surface-variant
                    "
                  >
                    Harga
                  </p>

                  <p
                    className="
                      font-heading
                      text-[22px]
                      font-extrabold
                      leading-none
                      text-primary
                    "
                  >
                    {formatPrice(menu.price)}
                  </p>
                </>
              ) : hasVariants ? (
                <>
                  <p
                    className="
                      mb-1
                      font-body
                      text-[11px]
                      font-medium
                      text-on-surface-variant
                    "
                  >
                    Mulai dari
                  </p>

                  <p
                    className="
                      font-heading
                      text-[22px]
                      font-extrabold
                      leading-none
                      text-primary
                    "
                  >
                    {formatPrice(menu.variants[0].price)}
                  </p>
                </>
              ) : null}
            </div>

            {hasVariants && (
              <span
                className="
                  rounded-lg
                  bg-surface-container
                  px-2.5
                  py-1.5
                  font-body
                  text-[10px]
                  font-semibold
                  text-on-surface-variant
                "
              >
                Pilih ukuran
              </span>
            )}
          </div>
        </div>

        {/* =========================
            ORDER BUTTON
        ========================= */}

        <button
          type="button"
          onClick={() => onOrder(menu)}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-primary
            px-5
            py-3.5
            font-body
            text-sm
            font-bold
            text-on-primary
            shadow-[0_5px_16px_rgba(177,8,6,0.12)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-primary-container
            hover:shadow-[0_8px_20px_rgba(177,8,6,0.22)]
            active:translate-y-0
            active:scale-[0.98]
          "
        >
          Pesan Sekarang
          <FiChevronRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
