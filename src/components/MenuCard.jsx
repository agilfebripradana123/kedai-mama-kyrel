function formatPrice(price) {
  return `Rp${price.toLocaleString("id-ID")}`;
}

function MenuCard({ menu, onOrder }) {
  const hasVariants = menu.variants?.length > 0;
  const hasToppings = menu.toppings?.length > 0;
  const hasLevel = menu.level;

  return (
    <article
      className="
    group
    flex
    h-full
    flex-col
    rounded-xl
    border
    border-outline-variant
    bg-surface-container-lowest
    p-5
    shadow-[0_4px_20px_rgba(30,30,30,0.06)]
    transition-all
    duration-300
    hover:border-primary
    hover:shadow-[0_8px_25px_rgba(30,30,30,0.10)]
  "
    >
      {/* Icon / Image Placeholder */}
      <div
        className="
          mb-5
          flex
          h-40
          items-center
          justify-center
          rounded-lg
          bg-surface-container
          text-5xl
          transition-transform
          duration-300
          group-hover:scale-[1.02]
        "
      >
        🍽️
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Name */}
        <h3
          className="
            font-heading
            text-[20px]
            font-bold
            leading-7
            text-on-surface
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

        {/* Variants */}
        {hasVariants && (
          <div className="mt-4">
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Pilihan
            </p>

            <div className="flex flex-wrap gap-2">
              {menu.variants.map((variant) => (
                <span
                  key={variant.name}
                  className="
                    rounded-full
                    bg-surface-container
                    px-3
                    py-1.5
                    font-body
                    text-xs
                    font-medium
                    text-on-surface-variant
                  "
                >
                  {variant.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Toppings */}
        {hasToppings && (
          <div className="mt-4">
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Topping
            </p>

            <div className="flex flex-wrap gap-2">
              {menu.toppings.map((topping) => (
                <span
                  key={topping}
                  className="
                    rounded-full
                    bg-secondary-container
                    px-3
                    py-1.5
                    font-body
                    text-xs
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

        {/* Level */}
        {hasLevel && (
          <div
            className="
              mt-4
              rounded-lg
              bg-surface-container
              p-3
              font-body
              text-sm
              text-on-surface-variant
            "
          >
            Level 0–2 gratis
            <br />
            Naik 1 level +Rp1.000
          </div>
        )}

        {/* Price */}
        <div className="mt-auto pt-5">
          {menu.price && (
            <p
              className="
                font-heading
                text-[22px]
                font-extrabold
                text-primary
              "
            >
              {formatPrice(menu.price)}
            </p>
          )}

          {hasVariants && (
            <p className="font-body text-sm text-on-surface-variant">
              Mulai dari {formatPrice(menu.variants[0].price)}
            </p>
          )}
        </div>

        {/* Order Button */}
        <button
          type="button"
          onClick={() => onOrder(menu)}
          className="
            mt-5
            w-full
            rounded-lg
            bg-primary
            px-5
            py-3
            font-body
            text-sm
            font-semibold
            text-on-primary
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-primary-container
            hover:shadow-[0_6px_16px_rgba(177,8,6,0.2)]
            active:translate-y-0
          "
        >
          Pesan
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
