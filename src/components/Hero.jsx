function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-80px)]
          max-w-[1200px]
          items-center
          gap-12
          px-4
          py-16
          sm:px-6
          md:grid-cols-2
          md:gap-16
          lg:py-20
        "
      >
        {/* ================= LEFT ================= */}

        <div className="text-center md:text-left">
          {/* Label */}

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
            Kuliner Rumahan • Harga Bersahabat
          </span>

          {/* Heading */}

          <h1
            className="
              mt-6
              font-heading
              text-[42px]
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-on-surface
              sm:text-[52px]
              lg:text-[60px]
            "
          >
            Kedai Mama <span className="text-primary">Kyrel</span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-body
              text-[16px]
              leading-7
              text-on-surface-variant
              sm:text-[18px]
              sm:leading-7
              md:mx-0
            "
          >
            Temukan berbagai pilihan makanan dan minuman favorit dengan cita
            rasa yang nyaman di hati dan harga yang bersahabat.
          </p>

          {/* CTA */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              gap-3
              sm:flex-row
              md:justify-start
            "
          >
            {/* Lihat Menu */}

            <a
              href="#menu"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-primary
                px-7
                py-3.5
                font-body
                text-sm
                font-semibold
                text-white
                shadow-[0_4px_12px_rgba(177,8,6,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-primary-container
                hover:shadow-[0_8px_20px_rgba(177,8,6,0.25)]
                sm:w-auto
              "
            >
              Lihat Menu

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Pesan Sekarang */}

            <a
              href="#menu"
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-primary
                bg-surface
                px-7
                py-3.5
                font-body
                text-sm
                font-semibold
                text-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-primary
                hover:text-white
                sm:w-auto
              "
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative flex justify-center md:justify-end">
          {/* Decorative Circle */}

          <div
            className="
              absolute
              right-10
              top-1/2
              h-72
              w-72
              -translate-y-1/2
              rounded-full
              bg-primary-fixed
              opacity-60
              blur-3xl
            "
          />

          {/* ================= HERO IMAGE ================= */}

          <div
            className="
              relative
              aspect-square
              w-full
              max-w-[430px]
              overflow-hidden
              rounded-[2rem]
              bg-surface-container
              shadow-[0_8px_30px_rgba(30,30,30,0.08)]
              transition-transform
              duration-500
              hover:-translate-y-2
            "
          >
            <img
              src="/assets/hero.webp"
              alt="Menu makanan Kedai Mama Kyrel"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* Overlay tipis */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/10
                via-transparent
                to-transparent
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;