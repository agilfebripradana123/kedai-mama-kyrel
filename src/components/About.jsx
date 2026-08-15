function About() {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wider text-primary">
            Tentang Kami
          </span>

          <h2 className="mt-2 font-heading text-3xl font-extrabold text-on-surface sm:text-4xl">
            Kedai Mama Kyrel
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-on-surface-variant sm:text-base">
            Tempat sederhana untuk menikmati makanan dan minuman favorit dengan
            rasa yang enak dan harga yang bersahabat.
          </p>
        </div>

        {/* FOTO + MAPS */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* FOTO */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/assets/hero.webp"
              alt="Kedai Mama Kyrel"
              className="
                h-[320px]
                w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-105
                sm:h-[400px]
              "
            />
          </div>

          {/* MAPS */}
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-outline-variant
              bg-surface-container
              shadow-sm
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.88614021581816!2d109.98278112938056!3d-7.3988532208306355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9f30af498955%3A0x9705e549e6939c0d!2sSTOCKIST%20NASA%20AA.3498!5e0!3m2!1sid!2sid!4v1786750694850!5m2!1sid!2sid"
              className="h-[320px] w-full sm:h-[400px]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

            <div className="border-t border-outline-variant p-4">
              <p className="font-heading text-base font-bold text-on-surface">
                📍 Lokasi Kedai Mama Kyrel
              </p>

              <p className="mt-1 text-sm text-on-surface-variant">
                Temukan lokasi kami melalui Google Maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
