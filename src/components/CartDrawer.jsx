import { useState } from "react";
import {
  FiX,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiMessageCircle,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

function formatRupiah(value) {
  return `Rp ${new Intl.NumberFormat("id-ID").format(Number(value) || 0)}`;
}

function CartDrawer({ isOpen, onClose }) {
  const [customerName, setCustomerName] = useState("");
  const [nameError, setNameError] = useState("");
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  /*
   * =========================
   * CHECKOUT WHATSAPP
   * =========================
   */

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    const name = customerName.trim();

    // =========================
    // VALIDASI NAMA
    // =========================

    if (!name) {
      setNameError("Nama pemesan wajib diisi.");
      return;
    }

    if (name.length < 2) {
      setNameError("Nama minimal 2 karakter.");
      return;
    }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
      setNameError("Nama hanya boleh berisi huruf dan spasi.");
      return;
    }

    setNameError("");

    // =========================
    // WHATSAPP
    // =========================

    const phoneNumber = "6285868749808";

    let message = `Halo Kedai Mama Kyrel\n`;
    message += `Saya ingin memesan:\n\n`;
    message += `Nama: ${name}\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;

      // UKURAN
      if (item.size) {
        if (item.name === "Seblak") {
          message += `   Paket: ${item.size}\n`;
        } else {
          message += `   Ukuran: ${item.size}\n`;
        }
      }

      // TOPPING
      if (item.topping) {
        message += `   Topping: ${item.topping}\n`;
      }

      // LEVEL
      if (
        item.level !== "" &&
        item.level !== null &&
        item.level !== undefined
      ) {
        message += `   Level: ${item.level}\n`;
      }

      // HARGA
      if (item.level && item.level > 2) {
        const levelNumber = Number(item.level);
        const additionalLevelPrice = (levelNumber - 2) * 1000;
        const basePrice = item.price - additionalLevelPrice;

        message += `   Harga : ${formatRupiah(basePrice)}\n`;
        message += `   Level ${levelNumber}: +${formatRupiah(additionalLevelPrice)}\n`;
      } else {
        message += `   Harga: ${formatRupiah(item.price)}\n`;
      }

      // JUMLAH
      message += `   Jumlah: ${item.quantity}\n`;

      // CATATAN
      if (item.note) {
        message += `   Catatan: ${item.note}\n\n`;
      }

      // SUBTOTAL
      message += `   Subtotal: ${formatRupiah(item.price * item.quantity)}\n\n`;
    });

    message += `--------------------------\n`;
    message += `Total Item: ${totalItems}\n`;
    message += `Total Harga: ${formatRupiah(totalPrice)}\n\n`;
    message += `Mohon konfirmasi pesanan saya. Terima kasih`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      {/* OVERLAY */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[80]
          bg-black/40
          backdrop-blur-sm
          transition-opacity
          duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* DRAWER */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[90]
          flex
          h-full
          w-full
          flex-col
          bg-surface
          shadow-[-10px_0_40px_rgba(0,0,0,0.15)]
          transition-transform
          duration-300
          sm:max-w-md
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* =========================
            HEADER
        ========================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-outline-variant
            px-5
            py-4
          "
        >
          <div>
            <h2
              className="
                font-heading
                text-xl
                font-bold
                text-on-surface
              "
            >
              Keranjang
            </h2>

            <p
              className="
                mt-1
                font-body
                text-sm
                text-on-surface-variant
              "
            >
              {totalItems} item
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-surface-container
              text-on-surface
              transition
              hover:bg-primary
              hover:text-on-primary
              active:scale-95
            "
          >
            <FiX size={19} />
          </button>
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <div className="mb-5">
            <label
              htmlFor="customer-name"
              className="
      mb-2
      block
      font-body
      text-sm
      font-semibold
      text-on-surface
    "
            >
              Nama Pemesan
              <span className="ml-1 text-primary">*</span>
            </label>

            <input
              id="customer-name"
              type="text"
              value={customerName}
              maxLength={50}
              onChange={(event) => {
                const value = event.target.value;

                setCustomerName(value);

                // Hapus error ketika user mulai memperbaiki
                if (nameError) {
                  setNameError("");
                }
              }}
              placeholder="Masukkan nama kamu"
              className={`
      w-full
      rounded-xl
      border
      bg-surface-container-low
      px-4
      py-3
      font-body
      text-sm
      text-on-surface
      outline-none
      transition
      placeholder:text-on-surface-variant/60
      focus:ring-2
      ${
        nameError
          ? "border-error focus:border-error focus:ring-error/10"
          : "border-outline-variant focus:border-primary focus:ring-primary/10"
      }
    `}
            />

            {/* ERROR */}
            {nameError && (
              <p className="mt-2 text-xs font-medium text-error">{nameError}</p>
            )}
          </div>
          {cartItems.length === 0 ? (
            <div
              className="
                flex
                h-full
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-surface-container
                  text-primary
                "
              >
                <FiShoppingBag size={32} />
              </div>

              <h3
                className="
                  mt-5
                  font-heading
                  text-lg
                  font-bold
                  text-on-surface
                "
              >
                Keranjang masih kosong
              </h3>

              <p
                className="
                  mt-2
                  max-w-xs
                  font-body
                  text-sm
                  leading-6
                  text-on-surface-variant
                "
              >
                Yuk pilih menu favoritmu dan tambahkan ke keranjang.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="
                  mt-5
                  rounded-xl
                  bg-primary
                  px-5
                  py-3
                  font-body
                  text-sm
                  font-semibold
                  text-on-primary
                  transition
                  hover:bg-primary-container
                "
              >
                Lihat Menu
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="
                    rounded-2xl
                    border
                    border-outline-variant
                    bg-surface-container-low
                    p-4
                  "
                >
                  {/* NAME + DELETE */}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3
                        className="
                          font-heading
                          text-base
                          font-bold
                          text-on-surface
                        "
                      >
                        {item.name}
                      </h3>

                      {item.size && (
                        <p className="mt-1 text-xs text-on-surface-variant">
                          {item.size}
                        </p>
                      )}

                      {item.topping && (
                        <p className="mt-1 text-xs text-on-surface-variant">
                          Topping: {item.topping}
                        </p>
                      )}

                      {item.level && (
                        <p className="mt-1 text-xs text-on-surface-variant">
                          Level: {item.level}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.cartId)}
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-on-surface-variant
                        transition
                        hover:bg-error-container
                        hover:text-error
                      "
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>

                  {/* PRICE */}

                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className="
                        font-heading
                        text-base
                        font-extrabold
                        text-primary
                      "
                    >
                      {formatRupiah(item.price)}
                    </span>

                    {/* QUANTITY */}

                    <div
                      className="
                        flex
                        items-center
                        rounded-xl
                        border
                        border-outline-variant
                        bg-surface
                        p-1
                      "
                    >
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.cartId)}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          text-on-surface
                          transition
                          hover:bg-surface-container
                        "
                      >
                        <FiMinus size={14} />
                      </button>

                      <span
                        className="
                          w-8
                          text-center
                          text-sm
                          font-bold
                          text-on-surface
                        "
                      >
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.cartId)}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          text-primary
                          transition
                          hover:bg-primary
                          hover:text-on-primary
                        "
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* SUBTOTAL */}

                  <div
                    className="
                      mt-3
                      border-t
                      border-outline-variant
                      pt-3
                      text-right
                    "
                  >
                    <span className="text-xs text-on-surface-variant">
                      Subtotal{" "}
                    </span>

                    <span className="text-sm font-bold text-on-surface">
                      {formatRupiah(item.price * item.quantity)}
                    </span>
                  </div>

                  {/* NOTE */}

                  {item.note && (
                    <p
                      className="
                        mt-2
                        rounded-lg
                        bg-surface
                        px-3
                        py-2
                        text-xs
                        text-on-surface-variant
                      "
                    >
                      Catatan: {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =========================
            FOOTER
        ========================= */}

        {cartItems.length > 0 && (
          <div
            className="
              shrink-0
              border-t
              border-outline-variant
              bg-surface
              p-5
            "
          >
            {/* TOTAL */}

            <div className="mb-4 flex items-center justify-between">
              <span
                className="
                  font-body
                  text-sm
                  font-medium
                  text-on-surface-variant
                "
              >
                Total
              </span>

              <span
                className="
                  font-heading
                  text-2xl
                  font-extrabold
                  text-primary
                "
              >
                {formatRupiah(totalPrice)}
              </span>
            </div>

            {/* CHECKOUT */}

            <button
              type="button"
              onClick={handleCheckout}
              className="
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
                shadow-[0_6px_18px_rgba(177,8,6,0.2)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-primary-container
                hover:shadow-[0_8px_22px_rgba(177,8,6,0.28)]
                active:translate-y-0
                active:scale-[0.98]
              "
            >
              <FiMessageCircle size={18} />
              Checkout via WhatsApp
            </button>

            {/* CLEAR */}

            <button
              type="button"
              onClick={clearCart}
              className="
                mt-3
                w-full
                py-2
                text-center
                font-body
                text-xs
                font-semibold
                text-on-surface-variant
                transition
                hover:text-error
              "
            >
              Kosongkan Keranjang
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
