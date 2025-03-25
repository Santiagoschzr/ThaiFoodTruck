"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Map from "./components/Map";

const galleryItems = [
  {
    id: 1,
    title: "Pad Thai Clásico",
    description:
      "Nuestro platillo más popular, preparado con ingredientes frescos",
    image: "/images/pad-thai.jpg",
  },
  {
    id: 2,
    title: "Tom Yum Goong",
    description: "Sopa picante y ácida con camarones frescos",
    image: "/images/tom-yum.jpg",
  },
  {
    id: 3,
    title: "Green Curry",
    description: "Curry verde con leche de coco y pollo",
    image: "/images/green-curry.jpg",
  },
  {
    id: 4,
    title: "Som Tam",
    description: "Ensalada de papaya verde picante",
    image: "/images/som-tam.jpg",
  },
  {
    id: 5,
    title: "Mango Sticky Rice",
    description: "Postre tradicional con arroz glutinoso y mango",
    image: "/images/mango-sticky-rice.jpg",
  },
  {
    id: 6,
    title: "Thai Iced Tea",
    description: "Té tailandés con leche condensada",
    image: "/images/thai-tea.jpg",
  },
];

const truckImages = [
  {
    id: 1,
    src: "/images/truck-1.jpg",
    alt: "Nuestro Food Truck en Condesa",
  },
  {
    id: 2,
    src: "/images/truck-2.jpg",
    alt: "Preparando Pad Thai",
  },
  {
    id: 3,
    src: "/images/truck-3.jpg",
    alt: "Nuestro Chef en acción",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section w-full overflow-hidden">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Thai on Wheels</h1>
            <p className="hero-subtitle">
              Descubre la auténtica cocina tailandesa en las calles de la Ciudad
              de México. Sabores exóticos y frescos que te transportarán a las
              calles de Bangkok.
            </p>
            <a href="#menu" className="hero-button">
              Ver Menú
            </a>
          </motion.div>
        </div>
        <div className="hero-scroll">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="block text-sm mb-2">Scroll Down</span>
            <span className="text-2xl">↓</span>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="modern-section w-full max-w-full overflow-hidden">
        <div className="modern-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="modern-story"
          >
            <div className="modern-story-content">
              <h2 className="modern-title text-3xl">Nuestra Historia</h2>
              <p className="modern-subtitle">
                Thai on Wheels nació de la pasión por compartir la auténtica
                cocina tailandesa en México. Nuestro viaje comenzó en 2020,
                cuando decidimos traer los sabores de Bangkok a las calles de la
                Ciudad de México.
              </p>
              <p className="text-[#2C3E50] leading-relaxed">
                Cada día, nos esforzamos por ofrecer una experiencia culinaria
                única, utilizando ingredientes frescos y técnicas tradicionales
                tailandesas. Nuestro food truck se ha convertido en un punto de
                encuentro para amantes de la comida tailandesa y personas que
                buscan probar algo diferente.
              </p>
              <div className="modern-truck-gallery">
                {truckImages.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="modern-truck-image"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="modern-story-image">
              <Image
                src="/images/truck-main.jpg"
                alt="Nuestro Food Truck"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section w-full max-w-full overflow-hidden">
        <div className="achievements-container overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full max-w-full"
          >
            <h2 className="achievements-title">Logros y Reconocimientos</h2>
            <p className="achievements-description">
              4 años de excelencia en la cocina tailandesa, llevando los
              auténticos sabores de Bangkok a las calles de la Ciudad de México
            </p>

            {/* Experience Counter */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="experience-counter"
            >
              <div className="experience-circle"></div>
              <div className="experience-inner">
                <div className="text-center">
                  <div className="experience-number">4</div>
                  <div className="experience-label">Años de Experiencia</div>
                </div>
              </div>
            </motion.div>

            <div className="achievements-grid w-full max-w-full overflow-hidden px-0">
              {[
                {
                  title: "Mejor Food Truck 2023",
                  description:
                    "Reconocimiento otorgado por la Asociación de Food Trucks de México",
                  year: "2023",
                  icon: "🏆",
                  color: "from-yellow-100 to-yellow-50",
                  borderColor: "border-yellow-200",
                },
                {
                  title: "Innovación Culinaria",
                  description:
                    "Premio por la fusión de sabores tailandeses y mexicanos",
                  year: "2022",
                  icon: "🌟",
                  color: "from-purple-100 to-purple-50",
                  borderColor: "border-purple-200",
                },
                {
                  title: "Sostenibilidad",
                  description:
                    "Certificación por prácticas eco-friendly y cero desperdicios",
                  year: "2023",
                  icon: "🌱",
                  color: "from-green-100 to-green-50",
                  borderColor: "border-green-200",
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`achievement-card bg-gradient-to-b ${achievement.color} border ${achievement.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                  <span className="achievement-year">{achievement.year}</span>
                </motion.div>
              ))}
            </div>

            {/* Additional Stats */}
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-6 text-center"
            >
              Nuestras Estadísticas
            </motion.h3>
            <div className="stats-grid-container w-full max-w-full overflow-hidden">
              <div className="stats-grid w-full max-w-full">
                {[
                  {
                    number: "10,000+",
                    label: "Clientes Satisfechos",
                    icon: "👥",
                    color: "text-blue-500",
                    bgColor: "bg-blue-50",
                  },
                  {
                    number: "50+",
                    label: "Eventos Especiales",
                    icon: "🎉",
                    color: "text-purple-500",
                    bgColor: "bg-purple-50",
                  },
                  {
                    number: "15+",
                    label: "Platillos Auténticos",
                    icon: "🍜",
                    color: "text-orange-500",
                    bgColor: "bg-orange-50",
                  },
                  {
                    number: "98%",
                    label: "Índice de Calidad",
                    icon: "⭐",
                    color: "text-amber-500",
                    bgColor: "bg-amber-50",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`stat-card ${stat.bgColor} border border-gray-100`}
                  >
                    <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label text-xs sm:text-sm md:text-base w-full max-w-full">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="modern-section w-full max-w-full overflow-hidden">
        <div className="modern-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="modern-title text-center text-3xl mb-12">
              Nuestros Platillos
            </h2>
            <div className="modern-gallery">
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="modern-gallery-item"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="modern-gallery-overlay">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="modern-section w-full max-w-full overflow-hidden"
      >
        <div className="modern-container">
          <h2 className="modern-title text-center text-3xl mb-12">Menú</h2>
          <div className="modern-menu-grid">
            {[
              {
                title: "Pad Thai",
                description:
                  "Fideos de arroz salteados con tofu, huevo, cacahuates y salsa tamarindo",
                price: "$120",
              },
              {
                title: "Tom Yum",
                description:
                  "Sopa picante y ácida con camarones, hongos y hierbas tailandesas",
                price: "$140",
              },
              {
                title: "Green Curry",
                description: "Curry verde con leche de coco, berenjena y pollo",
                price: "$130",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="modern-card"
              >
                <div className="modern-menu-item">
                  <h3 className="modern-menu-title">{item.title}</h3>
                  <p className="modern-menu-description">{item.description}</p>
                  <p className="modern-menu-price">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="modern-section w-full max-w-full overflow-hidden">
        <div className="modern-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="modern-title text-center text-3xl mb-12">
              Encuéntranos
            </h2>
            <div className="modern-map-container">
              <Map />
            </div>
            <div className="modern-map-info">
              <h3 className="modern-map-title">Thai on Wheels</h3>
              <p className="modern-map-text">
                Nuestro food truck se encuentra en diferentes ubicaciones de la
                Ciudad de México. Sigue nuestras redes sociales para conocer
                nuestra ubicación diaria.
              </p>
              <div className="modern-map-schedule">
                <div className="modern-map-schedule-item">
                  <div className="modern-map-schedule-day">Lunes - Viernes</div>
                  <div className="modern-map-schedule-hours">11:00 - 22:00</div>
                </div>
                <div className="modern-map-schedule-item">
                  <div className="modern-map-schedule-day">Sábado</div>
                  <div className="modern-map-schedule-hours">12:00 - 23:00</div>
                </div>
                <div className="modern-map-schedule-item">
                  <div className="modern-map-schedule-day">Domingo</div>
                  <div className="modern-map-schedule-hours">12:00 - 22:00</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="modern-section w-full max-w-full overflow-hidden">
        <div className="modern-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="modern-form"
          >
            <h2 className="modern-title text-center text-3xl mb-12">
              Haz tu Pedido
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="modern-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="modern-input"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="modern-input"
              />
              <textarea placeholder="Tu pedido" className="modern-input h-32" />
              <button className="modern-button w-full">Enviar Pedido</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-section bg-[#1A1A1A] text-white w-full max-w-full overflow-hidden">
        <div className="modern-container text-center">
          <p className="mb-4">Síguenos en redes sociales</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-[#FF4B4B] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#FF4B4B] transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-[#FF4B4B] transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
