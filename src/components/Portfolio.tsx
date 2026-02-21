import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Antes e Depois",
    category: "Transformação",
  },
  {
    image: portfolio2,
    title: "Jardim Corporativo",
    category: "Empresas",
  },
  {
    image: portfolio3,
    title: "Limpeza Urbana",
    category: "Conservação",
  },
  {
    image: portfolio4,
    title: "Gramado Esportivo",
    category: "Esportes",
  },
  {
    image: portfolio5,
    title: "Jardim Residencial",
    category: "Residências",
  },
  {
    image: portfolio6,
    title: "Equipe em Ação",
    category: "Árvores",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Portfólio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos projetos que realizamos com excelência e dedicação.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/90 via-green-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-green-grass text-sm font-medium mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Portfolio"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
