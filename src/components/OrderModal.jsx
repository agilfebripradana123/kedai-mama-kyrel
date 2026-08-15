import { useEffect, useState } from "react";
import { FiX, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function formatRupiah(value) {
  const number = Number(value) || 0;

  return `Rp ${new Intl.NumberFormat("id-ID").format(number)}`;
}

function OrderModal({ menu, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedTopping, setSelectedTopping] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [note, setNote] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [errors, setErrors] = useState({});

  const { addToCart } = useCart();

  /*
   * =========================
   * RESET SAAT MENU BERUBAH
   * =========================
   */

  useEffect(() => {
    if (!menu) return;

    setQuantity(1);
    setSelectedSize("");
    setSelectedTopping("");
    setSelectedLevel("");
    setNote("");
    setErrors({});
    setIsAdded(false);
  }, [menu]);

  /*
   * =========================
   * ESC + LOCK SCROLL
   * =========================
   */

  useEffect(() => {
    if (!menu) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menu, onClose]);

  if (!menu) {
    return null;
  }

  /*
   * =========================
   * DATA VARIANT
   * =========================
   */

  const sizes = menu.variants || [];

  const toppings = menu.toppings || [];

  /*
   * Level sementara mengikuti
   * struktur menuData kamu.
   */

  const hasSize = sizes.length > 0;
  const hasTopping = toppings.length > 0;

  /*
   * =========================
   * HARGA
   * =========================
   *
   * Kalau menu punya variants:
   * harga mengikuti variant.
   *
   * Kalau menu tidak punya variants:
   * menggunakan menu.price.
   */

  const selectedVariant = sizes.find(
    (variant) => variant.name === selectedSize,
  );

  const currentPrice = selectedVariant?.price ?? menu.price ?? 0;

  /*
   * =========================
   * TAMBAH KE KERANJANG
   * =========================
   */

  const handleAddToCart = () => {
    if (isAdded) return;

    if (hasSize && !selectedSize) {
      setErrors((current) => ({
        ...current,
        size: "Silakan pilih porsi terlebih dahulu.",
      }));
      return;
    }

    if (hasTopping && !selectedTopping) {
      setErrors((current) => ({
        ...current,
        topping: "Silakan pilih topping terlebih dahulu.",
      }));
      return;
    }

    addToCart({
      menuId: menu.id,
      name: menu.name,
      price: selectedSize
        ? sizes.find((size) => size.name === selectedSize)?.price || menu.price
        : menu.price,
      image: menu.image,
      size: selectedSize,
      topping: selectedTopping,
      level: selectedLevel,
      quantity,
      note,
    });

    setIsAdded(true);

    setTimeout(() => {
      onClose();
    }, 700);
  };
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-end
        justify-center
        bg-black/50
        p-0
        backdrop-blur-sm
        sm:items-center
        sm:p-4
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* =========================
          MODAL
      ========================= */}

      <div
        className="
          relative
          max-h-[92vh]
          w-full
          overflow-y-auto
          rounded-t-3xl
          bg-surface
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          sm:max-w-lg
          sm:rounded-3xl
        "
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* =========================
            HEADER
        ========================= */}

        <div
          className="
            sticky
            top-0
            z-10
            flex
            items-start
            justify-between
            border-b
            border-outline-variant
            bg-surface/95
            px-5
            py-4
            backdrop-blur-md
            sm:px-6
          "
        >
          <div className="pr-4">
            <p
              className="
                font-body
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-primary
              "
            >
              Pesan Menu
            </p>

            <h2
              className="
                mt-1
                font-heading
                text-xl
                font-bold
                text-on-surface
              "
            >
              {menu.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-surface-container
              text-on-surface-variant
              transition-all
              duration-200
              hover:bg-primary
              hover:text-on-primary
              active:scale-95
            "
          >
            <FiX size={18} />
          </button>
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="space-y-6 p-5 sm:p-6">
          {/* =========================
              PRICE
          ========================= */}

          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-surface-container-low
              p-4
            "
          >
            <span
              className="
                font-body
                text-sm
                text-on-surface-variant
              "
            >
              Harga
            </span>

            <span
              className="
                font-heading
                text-xl
                font-extrabold
                text-primary
              "
            >
              {formatRupiah(currentPrice)}
            </span>
          </div>

          {/* =========================
              UKURAN / VARIANT
          ========================= */}

          {hasSize && (
            <OptionGroup
              label="Ukuran"
              options={sizes}
              value={selectedSize}
              error={errors.size}
              onChange={(value) => {
                setSelectedSize(value);

                setErrors((current) => ({
                  ...current,
                  size: "",
                }));
              }}
            />
          )}

          {/* =========================
              TOPPING
          ========================= */}

          {hasTopping && (
            <OptionGroup
              label="Topping"
              options={toppings}
              value={selectedTopping}
              error={errors.topping}
              onChange={(value) => {
                setSelectedTopping(value);

                setErrors((current) => ({
                  ...current,
                  topping: "",
                }));
              }}
            />
          )}

          {/* =========================
              JUMLAH
          ========================= */}

          <div>
            <label
              className="
                mb-3
                block
                font-body
                text-sm
                font-semibold
                text-on-surface
              "
            >
              Jumlah
            </label>

            <div
              className="
                inline-flex
                items-center
                rounded-xl
                border
                border-outline-variant
                bg-surface-container-low
                p-1
              "
            >
              <button
                type="button"
                disabled={quantity <= 1}
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  text-on-surface
                  transition
                  hover:bg-surface-container
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <FiMinus size={16} />
              </button>

              <span
                className="
                  flex
                  w-12
                  justify-center
                  font-heading
                  text-base
                  font-bold
                  text-on-surface
                "
              >
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  text-primary
                  transition
                  hover:bg-primary
                  hover:text-on-primary
                "
              >
                <FiPlus size={16} />
              </button>
            </div>
          </div>

          {/* =========================
              CATATAN
          ========================= */}

          <div>
            <label
              htmlFor="order-note"
              className="
                mb-2
                block
                font-body
                text-sm
                font-semibold
                text-on-surface
              "
            >
              Catatan
              <span
                className="
                  ml-1
                  font-normal
                  text-on-surface-variant
                "
              >
                (opsional)
              </span>
            </label>

            <textarea
              id="order-note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              rows={3}
              placeholder="Contoh: sambal dipisah..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-outline-variant
                bg-surface-container-low
                px-4
                py-3
                font-body
                text-sm
                text-on-surface
                outline-none
                transition
                placeholder:text-on-surface-variant/60
                focus:border-primary
                focus:ring-2
                focus:ring-primary/10
              "
            />
          </div>
        </div>

        {/* =========================
            FOOTER
        ========================= */}

        <div
          className="
            sticky
            bottom-0
            border-t
            border-outline-variant
            bg-surface/95
            p-4
            backdrop-blur-md
            sm:p-5
          "
        >
          <div className="flex gap-3">
            {/* BATAL */}

            <button
              type="button"
              onClick={onClose}
              className="
                h-12
                flex-1
                rounded-xl
                border
                border-outline-variant
                bg-surface-container-low
                px-4
                font-body
                text-sm
                font-semibold
                text-on-surface
                transition-all
                duration-200
                hover:border-primary
                hover:text-primary
                active:scale-[0.98]
              "
            >
              Batal
            </button>

            {/* TAMBAH */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`
    flex
    h-12
    flex-[1.5]
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-primary
    px-4
    font-body
    text-sm
    font-semibold
    text-on-primary
    shadow-[0_5px_16px_rgba(177,8,6,0.18)]
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:bg-primary-container
    hover:shadow-[0_8px_20px_rgba(177,8,6,0.25)]
    active:scale-[0.98]
    ${isAdded ? "scale-105" : ""}
  `}
            >
              <FiShoppingCart
                size={17}
                className={isAdded ? "animate-bounce" : ""}
              />

              <span>{isAdded ? "✓ Ditambahkan!" : "Tambah ke Keranjang"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================================================
   OPTION GROUP
================================================== */

function OptionGroup({ label, options, value, onChange, error }) {
  return (
    <div>
      {/* LABEL */}
      <div className="mb-3 flex items-center justify-between">
        <label
          className="
            font-body
            text-sm
            font-semibold
            text-on-surface
          "
        >
          {label}
        </label>

        <span
          className="
            rounded-full
            bg-primary-fixed
            px-2.5
            py-1
            font-body
            text-[11px]
            font-semibold
            text-on-primary-fixed
          "
        >
          Wajib
        </span>
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((option) => {
          const optionValue =
            typeof option === "string"
              ? option
              : option.name || option.label || option.value;

          const optionPrice = typeof option === "object" ? option.price : null;

          const isSelected = value === optionValue;

          return (
            <button
              key={optionValue}
              type="button"
              onClick={() => onChange(optionValue)}
              className={`
                relative
                flex
                min-h-[64px]
                flex-col
                items-start
                justify-center
                rounded-xl
                border
                px-4
                py-3
                text-left
                transition-all
                duration-200

                ${
                  isSelected
                    ? `
                      border-primary
                      bg-primary
                      text-on-primary
                      shadow-[0_4px_14px_rgba(177,8,6,0.18)]
                    `
                    : `
                      border-outline-variant
                      bg-surface-container-low
                      text-on-surface
                      hover:border-primary
                      hover:bg-primary-fixed
                      hover:text-primary
                    `
                }
              `}
            >
              {/* NAMA */}
              <span className="font-body text-sm font-semibold">
                {optionValue}
              </span>

              {/* HARGA */}
              {optionPrice !== null && (
                <span
                  className={`
                    mt-1
                    font-body
                    text-xs
                    ${
                      isSelected
                        ? "text-on-primary/80"
                        : "text-on-surface-variant"
                    }
                  `}
                >
                  {formatRupiah(optionPrice)}
                </span>
              )}

              {/* CHECK */}
              {isSelected && (
                <span
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    text-xs
                    text-white
                  "
                >
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ERROR */}
      {error && (
        <div
          className="
            mt-2.5
            flex
            items-center
            gap-2
            rounded-lg
            bg-error-container
            px-3
            py-2.5
            text-on-error-container
          "
        >
          <span
            className="
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-error
              text-[11px]
              font-bold
              text-white
            "
          >
            !
          </span>

          <span className="font-body text-xs font-medium">{error}</span>
        </div>
      )}
    </div>
  );
}

export default OrderModal;
